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
- Google sign-in via Supabase OAuth
- Logged-in generation history saved to Supabase and restored on refresh
- Guest usage limits plus higher logged-in daily limits
- Waitlist form with API route
- Lightweight analytics event pipeline
- SEO content hubs for `/tools`, `/templates`, and `/guides`
- **Batch 4 + Batch 5 keyword expansion live:** 94 total SEO landing pages built on the same reusable App Router pattern
- Stronger internal-linking system across homepage, hubs, and detail pages

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
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4.1-mini
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_or_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
HUBSPOT_PRIVATE_APP_TOKEN=your_hubspot_private_app_token
```

### Notes
- If `OPENAI_API_KEY` is not provided, the app still works in **fallback demo mode** so the UI can be tested quickly.
- `OPENAI_BASE_URL` supports OpenAI-compatible providers, so you can point generation to a custom API gateway instead of OpenAI official.
- If Supabase env vars are not provided, the app still renders the sign-in entry, but login and saved history will not work.
- Waitlist submissions use Supabase when configured; otherwise they fall back to a local JSON file.
- Generation history is only saved when the user is signed in.
- Current auth UI is Google-only; email link and test mode are no longer exposed.
- HubSpot push endpoint is available at `/api/integrations/hubspot/note` (requires login + `HUBSPOT_PRIVATE_APP_TOKEN`).

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
- Homepage now surfaces featured keyword pages plus dedicated **batch 4** and **batch 5** modules for new tools, templates, and guides
- Detail pages use stronger internal linking via explicit related pages, same-topic journeys, same-topic cluster cards, and next-read blocks
- Hub pages show featured entries plus dedicated **batch 4 + batch 5** exposure so fresh pages are not buried
- Canonical metadata is set globally and overridden on keyword detail pages
- `src/app/sitemap.ts` and `src/app/robots.ts` generate search-engine discovery files automatically
- **Sitemap already auto-covers all SEO pages** because it maps directly from `seoPages`; no sitemap code change was needed for this batch
- To add more keyword pages later, the fastest path is still to append new entries or generator patterns inside `seoPages`, set `topic`, assign `batch`, mark a few as `featured`, and wire `relatedSlugs`

## Fourth batch expansion
This batch kept the same SEO system and pushed adjacent-intent coverage deeper without introducing any new routing layer.

### Batch 4 themes
- Tool / AI / software pages around:
  - follow-up
  - recap
  - crm notes
  - discovery call
  - objections
  - call summary
- Adjacent-intent keywords such as:
  - demo follow-up
  - sales recap
  - qualification notes
  - buyer discovery notes
  - pricing objections
  - sales call wrap-up
- Template / guide coverage for the same clusters so the new tool pages are not isolated

## Fifth batch expansion
This batch added another layer of intent variants and made the topical cluster feel more mature.

### Batch 5 themes
- Generator pages for adjacent high-intent post-call workflows
- Example / format pages for templates and note structures
- How-to / tips / best-practices pages to keep the guide layer dense enough to support internal distribution
- More cross-category links from homepage and hubs so new pages get immediate exposure

## Total SEO page count
- Tools: 30
- Templates: 32
- Guides: 32
- **Total: 94**

## Fastest path to 150–200 pages later
1. Keep `src/lib/seo-pages.ts` as the only content source of truth.
2. Continue expanding by **topic x intent modifier x adjacent phrasing** instead of inventing a second SEO system.
3. For each topic (`follow-up`, `recap`, `crm notes`, `discovery call`, `objections`, `call summary`), keep shipping:
   - tool / ai / generator / software
   - template / example / format
   - how to / best practices / tips
4. Reuse the current batch 4/5 generator pattern to stamp out another 40–80 pages with small keyword-definition changes instead of hand-writing giant arrays.
5. Keep homepage and hub exposure lightweight:
   - add a new batch section
   - feature a few new entries per category
   - let detail-page related links inherit from topic + batch logic
6. If scaling to 150–200, the **lowest-effort path** is to add more keyword-variant definitions to the generator config rather than creating new React components or route files.
7. Before pushing far past 150, it is reasonable to pause and watch Search Console so the next pages follow the clusters that actually start getting impressions.

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

create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  event text not null,
  properties jsonb,
  user_id uuid,
  user_email text,
  created_at timestamptz not null default now()
);

create index if not exists idx_analytics_events_event_created_at
  on public.analytics_events (event, created_at desc);

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
