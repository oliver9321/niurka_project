# Tech Stack & Build System

## Frontend
- **Framework**: React 19 (CRA + CRACO override, NOT Next.js)
- **Language**: JavaScript (JSX) — no TypeScript
- **Styling**: TailwindCSS 3.4, tailwindcss-animate, CSS variables for theming
- **UI Components**: shadcn/ui (New York style, Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Charts**: Recharts
- **Marquee**: react-fast-marquee
- **Routing**: React Router DOM 7
- **Data Fetching**: Axios, TanStack React Query, SWR
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: Yarn 1.22

## Backend
- **Framework**: FastAPI (Python)
- **Database**: MongoDB via Motor (async driver)
- **Models**: Pydantic v2
- **Auth libs available**: python-jose, bcrypt, passlib (not yet fully wired)

## Common Commands

```bash
# Frontend
cd frontend
yarn install          # Install dependencies
yarn start            # Dev server (CRACO)
yarn build            # Production build
yarn test             # Run tests

# Backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload   # Dev server
```

## Key Configuration Files
- `frontend/craco.config.js` — Webpack overrides, path aliases, health-check plugin
- `frontend/tailwind.config.js` — Custom colors (brand, graphite), fonts, shadcn CSS vars
- `frontend/components.json` — shadcn/ui configuration (New York style, no RSC, no TSX)
- `design_guidelines.json` — Full UI/UX design system specification

## Path Alias
`@/` → `frontend/src/` (configured in craco.config.js via webpack alias)
