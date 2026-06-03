# Project Structure

```
niurka_project/
├── frontend/                   # React SPA (main application)
│   ├── src/
│   │   ├── components/         # Page-section components (Hero, Contact, Solutions, etc.)
│   │   │   └── ui/            # shadcn/ui primitives (Button, Card, Input, etc.)
│   │   ├── constants/          # Test IDs and enums
│   │   ├── data/               # Centralized content & copy (site.js, brands.js)
│   │   ├── hooks/              # Custom React hooks (use-toast, etc.)
│   │   ├── lib/                # Utility functions (cn helper)
│   │   └── pages/              # Route-level page components (Home.jsx)
│   ├── plugins/                # Custom webpack plugins (health-check)
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── craco.config.js
│   ├── tailwind.config.js
│   └── components.json         # shadcn/ui config
├── backend/                    # FastAPI server
│   ├── server.py               # Main API (single file, all routes)
│   ├── requirements.txt
│   ├── .env                    # Environment vars (MONGO_URL, DB_NAME, CORS_ORIGINS)
│   └── tests/
├── artifacts/                  # Design assets (presentations, logo, extracted slides)
├── memory/                     # Project memory/documentation
├── tests/                      # Integration/E2E tests
├── design_guidelines.json      # UI/UX design system (colors, typography, layout rules)
└── test_result.md
```

## Conventions
- **One component per file**, default export, PascalCase filenames (`.jsx`)
- **Centralized copy**: All text content lives in `src/data/site.js` — components import from there
- **`cn()` utility**: Use `cn()` from `@/lib/utils` to merge Tailwind classes conditionally
- **Testing attributes**: All interactive elements and sections must have `data-testid`
- **Typography**: Headings use `font-display` (Outfit), body uses default sans (Satoshi)
- **Color tokens**: Use `brand-*` for accent greens, `graphite-*` for dark neutrals, or CSS variable-based shadcn tokens
- **API pattern**: All backend routes prefixed with `/api`, Pydantic models with UUID `id` fields and ISO timestamps
- **Animations**: Framer Motion `initial`/`animate`/`transition` pattern; stagger children in grids by 0.1s
