# Sales Call Follow-up Copilot

Turn sales call transcripts into follow-up emails, CRM notes, pain points, objections, and next steps.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- App Router

## Current product surface
- Marketing landing page
- Transcript-to-follow-up app
- Waitlist form with API route
- Lightweight analytics event pipeline
- Auth-ready sign-in entry with graceful fallback

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
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Notes
- If `OPENAI_API_KEY` is not provided, the app still works in **fallback demo mode** so the UI can be tested quickly.
- If Supabase env vars are not provided, the app still shows a **Sign in** entry but falls back to a friendly "not configured yet" message.

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

## Waitlist storage
Right now waitlist entries are stored in a local JSON file under `data/waitlist.json` for fast MVP iteration.
For production, the next step is moving this to Supabase or another hosted database.
