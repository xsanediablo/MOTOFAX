# MOTOFAX

MOTOFAX Web Application built with Next.js and Supabase.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker (for local Supabase development)
- Supabase CLI

### Local Setup

1. **Install dependencies**

```bash
npm install
```

2. **Set up environment variables**

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials in `.env.local`.

3. **Start Supabase locally** (optional)

```bash
supabase start
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

The app automatically deploys to Supabase when you push to the `main` branch via the GitHub Actions workflow.

### Required GitHub Secrets

- `SUPABASE_ACCESS_TOKEN`
- `SUPABASE_DB_PASSWORD`
- `SUPABASE_PROJECT_ID`