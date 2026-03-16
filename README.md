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
- SEO content hubs for `/tools`, `/templates`, and `/guides`
- **Third keyword cluster live:** 40 total SEO landing pages built on the same reusable App Router pattern
- Stronger internal-linking system across homepage, hubs, and detail pages
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
- `/tools` SEO hub for tool-intent keywords
- `/templates` SEO hub for template-intent keywords
- `/guides` SEO hub for educational keywords
- `/[category]/[slug]` reusable SEO landing page route powered by `src/lib/seo-pages.ts`
- `/sitemap.xml` generated sitemap
- `/robots.txt` generated robots rules
- `/api/generate` generation endpoint
- `/api/waitlist` waitlist submission endpoint
- `/api/track` lightweight analytics endpoint
- `/api/auth/status` auth configuration check
- `/api/history` save and fetch signed-in generation history

## SEO page structure
- Centralized SEO metadata and page copy lives in `src/lib/seo-pages.ts`
- The dynamic route at `src/app/[category]/[slug]/page.tsx` statically generates keyword pages from that config
- Shared page UI lives in `src/components/seo-page-shell.tsx`
- Category hubs live at `/tools`, `/templates`, and `/guides`
- Homepage now surfaces featured keyword pages plus dedicated **batch 3** modules for new tools, templates, and guides
- Detail pages now use stronger internal linking via explicit related pages, same-topic journeys, same-topic cluster cards, and next-read blocks
- Hub pages now show featured entries plus a dedicated **New in batch 3** section so fresh pages are not buried
- Canonical metadata is set globally and overridden on keyword detail pages
- `src/app/sitemap.ts` and `src/app/robots.ts` generate search-engine discovery files automatically
- **Sitemap already auto-covers all SEO pages** because it maps directly from `seoPages`
- To add more keyword pages later, the fastest path is to append new entries in `seoPages`, set `topic`, assign `batch`, mark a few as `featured`, and wire `relatedSlugs`

## Third batch keywords added
### Tools
- `follow-up-meeting-recap-ai`
- `crm-notes-ai-generator`
- `discovery-call-summary-ai-tool`
- `objection-handling-ai-tool`
- `sales-call-recap-software`
- `call-summary-generator-ai`

### Templates
- `follow-up-email-format`
- `crm-notes-example`
- `discovery-call-template-format`
- `objection-response-template`
- `sales-recap-template-example`
- `call-summary-format`

### Guides
- `follow-up-email-tips-after-sales-call`
- `how-to-write-crm-notes-for-sales-calls`
- `discovery-call-best-practices-for-notes`
- `how-to-handle-sales-objections-after-a-call`
- `sales-call-recap-best-practices`
- `how-to-write-a-call-summary-after-a-sales-call`

## Total SEO page count
- Tools: 12
- Templates: 14
- Guides: 14
- **Total: 40**

## Fastest path to 80–100 pages later
1. Keep using `src/lib/seo-pages.ts` as the only content source of truth.
2. Expand by **topic x intent modifier** instead of inventing new page systems.
3. For each topic (`follow-up`, `recap`, `crm notes`, `discovery call`, `objections`, `call summary`), keep shipping:
   - tool / ai / generator / software variants
   - template / example / format variants
   - how to / best practices / tips variants
4. Add another 6–10 pages per batch, then surface them in:
   - homepage featured or new-batch modules
   - hub `featured` + `new batch` sections
   - detail-page `relatedSlugs` + same-topic journey
5. Reuse current `batch`, `topic`, `featured`, and `relatedSlugs` fields so new pages automatically inherit sitemap coverage and internal-linking behavior.
6. If scaling further, consider adding small topic-level hub modules on the homepage (for example follow-up cluster, CRM-notes cluster, recap cluster) without changing the route architecture.

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
