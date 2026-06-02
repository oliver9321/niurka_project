"""Backend API tests for Greentech SRL corporate site.

Covers:
- /api/health
- /api/contact (POST validation, GET listing)
- /api/newsletter (POST + duplicate)
- /api/stats
"""
import os
import uuid
import pytest
import requests


BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read frontend/.env directly so we test the public ingress
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break

assert BASE_URL, "REACT_APP_BACKEND_URL not configured"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# -------------------- Health --------------------
class TestHealth:
    def test_health_ok(self, session):
        r = session.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "healthy"
        assert "timestamp" in data


# -------------------- Stats --------------------
class TestStats:
    def test_stats_shape(self, session):
        r = session.get(f"{API}/stats", timeout=15)
        assert r.status_code == 200
        data = r.json()
        for key in ("years", "projects", "clients", "certifications"):
            assert key in data, f"Missing {key} in /api/stats"
        assert isinstance(data["years"], int)
        assert isinstance(data["certifications"], list)


# -------------------- Contact --------------------
class TestContact:
    def test_contact_post_valid_and_persists(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "nombre": f"TEST Usuario {unique}",
            "email": f"test_{unique}@example.com",
            "telefono": "+18095551234",
            "empresa": "TEST Empresa",
            "interes": "BMS",
            "mensaje": "Mensaje de prueba automatizada"
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 201, f"got {r.status_code}: {r.text}"
        data = r.json()
        assert data["nombre"] == payload["nombre"]
        assert data["email"] == payload["email"]
        assert data["interes"] == "BMS"
        assert "id" in data and len(data["id"]) > 0
        # uuid format
        uuid.UUID(data["id"])
        assert "created_at" in data
        assert "_id" not in data

        # Verify persistence via GET listing
        rlist = session.get(f"{API}/contact?limit=100", timeout=15)
        assert rlist.status_code == 200
        items = rlist.json()
        assert isinstance(items, list)
        found = next((x for x in items if x.get("id") == data["id"]), None)
        assert found is not None, "Created contact not found in GET list"
        assert "_id" not in found

    def test_contact_post_invalid_email(self, session):
        payload = {
            "nombre": "Test",
            "email": "not-an-email",
            "telefono": "+18095551234",
            "mensaje": "Mensaje suficiente"
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_contact_post_missing_fields(self, session):
        payload = {"email": "x@x.com"}
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_contact_get_ordering(self, session):
        # Create two messages
        for i in range(2):
            session.post(f"{API}/contact", json={
                "nombre": f"TEST Orden {i}",
                "email": f"orden_{uuid.uuid4().hex[:6]}@example.com",
                "telefono": "+18095550000",
                "mensaje": f"Orden mensaje {i}"
            }, timeout=15)
        r = session.get(f"{API}/contact?limit=10", timeout=15)
        assert r.status_code == 200
        items = r.json()
        assert len(items) >= 2
        # Should be desc by created_at
        cas = [it["created_at"] for it in items if it.get("created_at")]
        assert cas == sorted(cas, reverse=True), "created_at not desc"
        for it in items:
            assert "_id" not in it


# -------------------- Newsletter --------------------
class TestNewsletter:
    def test_newsletter_subscribe_and_duplicate(self, session):
        email = f"news_{uuid.uuid4().hex[:8]}@example.com"
        r1 = session.post(f"{API}/newsletter", json={"email": email}, timeout=15)
        assert r1.status_code == 201, f"first POST got {r1.status_code}: {r1.text}"
        data = r1.json()
        assert data["email"] == email
        assert "id" in data
        assert "_id" not in data

        r2 = session.post(f"{API}/newsletter", json={"email": email}, timeout=15)
        assert r2.status_code == 409, f"duplicate POST got {r2.status_code}: {r2.text}"

    def test_newsletter_invalid_email(self, session):
        r = session.post(f"{API}/newsletter", json={"email": "bad-email"}, timeout=15)
        assert r.status_code == 422
