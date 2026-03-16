# Sales Call Follow-up Copilot

Turn sales call transcripts into follow-up emails, CRM notes, pain points, objections, and next steps.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Supabase-backed waitlist, auth, and generation history

## Current product surface
- Marketing landing page
- Transcript-to-follow-up app
- Waitlist form with API route
- Lightweight analytics event pipeline
- Supabase-backed magic link sign-in
- Test mode sign-in for fast QA without email limits
- Logged-in generation history saved to Supabase

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
- If Supabase env vars are not provided, the app still shows a **Sign in** entry but falls back gracefully.
- For fast testing, type `test` in the sign-in prompt to enable local test mode without email delivery.
- Waitlist submissions use Supabase when configured; otherwise they fall back to a local JSON file.
- Generation history is only saved when the user is signed in.

## Routes
- `/` landing page
- `/app` transcript-to-follow-up app
- `/api/generate` generation endpoint
- `/api/waitlist` waitlist submission endpoint
- `/api/track` lightweight analytics endpoint
- `/api/auth/status` auth configuration check
- `/api/history` save and fetch signed-in generation history

## MVP outputs
- Call Summary
- Key Pain Points
- Objections
- Next Steps
- Follow-up Email
- CRM Note

## Supabase setup
Run this SQL in the Supabase SQL Editor:

```sql
create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  source text,
  created_at timestamptz not null default now()
);

create table if not exists public.generation_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  user_email text,
  call_type text not null,
  transcript text not null,
  summary text not null,
  pain_points jsonb not null default '[]'::jsonb,
  objections jsonb not null default '[]'::jsonb,
  next_steps jsonb not null default '[]'::jsonb,
  follow_up_email text not null,
  crm_note text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_generation_history_user_id_created_at
  on public.generation_history (user_id, created_at desc);
```
