from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Greentech SRL API")
api_router = APIRouter(prefix="/api")


# -------------------- Models --------------------
class ContactRequest(BaseModel):
    nombre: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    telefono: str = Field(..., min_length=6, max_length=40)
    empresa: Optional[str] = Field(default=None, max_length=120)
    interes: Optional[str] = Field(default=None, max_length=120)
    mensaje: str = Field(..., min_length=5, max_length=2000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nombre: str
    email: str
    telefono: str
    empresa: Optional[str] = None
    interes: Optional[str] = None
    mensaje: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterRequest(BaseModel):
    email: EmailStr


class NewsletterEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# -------------------- Routes --------------------
@api_router.get("/")
async def root():
    return {"message": "Greentech SRL API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@api_router.post("/contact", response_model=ContactMessage, status_code=201)
async def submit_contact(payload: ContactRequest):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    logger.info(f"Nuevo mensaje de contacto: {msg.email} - {msg.interes}")
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts(limit: int = 100):
    items = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except ValueError:
                pass
    return items


@api_router.post("/newsletter", response_model=NewsletterEntry, status_code=201)
async def subscribe_newsletter(payload: NewsletterRequest):
    existing = await db.newsletter.find_one({"email": payload.email})
    if existing:
        raise HTTPException(status_code=409, detail="Este correo ya está suscrito")
    entry = NewsletterEntry(email=payload.email)
    doc = entry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter.insert_one(doc)
    return entry


@api_router.get("/stats")
async def public_stats():
    # Hardcoded marketing stats based on Greentech corporate deck
    return {
        "years": 12,
        "projects": 350,
        "clients": 120,
        "certifications": ["NFPA", "UL Listed"],
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
