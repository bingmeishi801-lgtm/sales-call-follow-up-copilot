# Sales Call Follow-up Copilot

Turn sales call transcripts into follow-up emails, CRM notes, pain points, objections, and next steps.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Supabase-ready waitlist and auth

## Current product surface
- Marketing landing page
- Transcript-to-follow-up app
- Waitlist form with API route
- Lightweight analytics event pipeline
- Supabase-backed magic link sign-in (with graceful fallback)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Environment variables
Create `.env.local`:

```bash
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4.1-mini
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_or_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Notes
- If `OPENAI_API_KEY` is not provided, the app still works in **fallback demo mode** so the UI can be tested quickly.
- If Supabase env vars are not provided, the app still shows a **Sign in** entry but falls back to a friendly "not configured yet" message.
- Waitlist submissions use Supabase when configured; otherwise they fall back to a local JSON file.

## Routes
- `/` landing page
- `/app` transcript-to-follow-up app
- `/api/generate` generation endpoint
- `/api/waitlist` waitlist submission endpoint
- `/api/track` lightweight analytics endpoint
- `/api/auth/status` auth configuration check

## MVP outputs
- Call Summary
- Key Pain Points
- Objections
- Next Steps
- Follow-up Email
- CRM Note

## Supabase setup
Create a `waitlist` table with at least these columns:
- `id` uuid primary key default gen_random_uuid()
- `email` text unique not null
- `name` text null
- `source` text null
- `created_at` timestamptz default now()

Recommended SQL:

```sql
create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  source text,
  created_at timestamptz not null default now()
);
```
