import Link from "next/link";

const features = [
  {
    title: "Call Summary",
    description: "Get a concise recap of the conversation without rereading the full transcript.",
  },
  {
    title: "Pain Points",
    description: "Extract the customer’s real problems, blockers, and priorities.",
  },
  {
    title: "Objections",
    description: "Capture buying concerns before they disappear from memory.",
  },
  {
    title: "Next Steps",
    description: "Know exactly what should happen next after the call.",
  },
  {
    title: "Follow-up Email",
    description: "Generate a clean, professional email you can send right away.",
  },
  {
    title: "CRM Note",
    description: "Turn the conversation into a structured CRM-ready note.",
  },
];

const audience = [
  {
    title: "Founder-led sales",
    description: "For founders who still run sales themselves and need faster follow-up after every call.",
  },
  {
    title: "Small sales teams",
    description: "For SDRs and AEs who want cleaner call notes, better follow-up, and less admin work.",
  },
  {
    title: "Agencies & consultants",
    description: "For client-facing teams that want to stay organized and look more professional.",
  },
];

const steps = [
  "Paste your transcript",
  "Choose the call type",
  "Generate structured outputs",
  "Copy and use in email or CRM",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-600">
              Built for founders and sales teams
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Turn sales call transcripts into follow-up emails, CRM notes, and next steps — in seconds.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Sales Call Follow-up Copilot helps you move from raw transcript to sales-ready follow-up fast. Paste the call, generate the outputs, and move the deal forward.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Try the Demo
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                See How It Works
              </a>
            </div>
            <p className="text-sm text-slate-500">
              No meeting bot. No complicated setup. Just paste your transcript and get sales-ready outputs instantly.
            </p>
          </div>

          <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">Follow-up Email</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Thanks again for the conversation today. Based on your current workflow, it sounds like the biggest priorities are improving rep follow-up consistency and reducing time spent updating CRM notes manually...
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm font-medium text-slate-500">Pain Points</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    <li>Manual call recap takes too long</li>
                    <li>Follow-up quality is inconsistent</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm font-medium text-slate-500">Next Steps</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    <li>Send recap email with pricing</li>
                    <li>Book product demo next week</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Problem</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Sales calls don’t end when the call ends.</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              After every sales call, you still need to write the follow-up email, update the CRM, capture objections, summarize customer pain points, and define the next steps.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-4 text-slate-700">
              <li>• Follow-up gets delayed</li>
              <li>• CRM notes are inconsistent</li>
              <li>• Objections get forgotten</li>
              <li>• The same transcript gets rewritten multiple times</li>
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              This product helps you finish the post-call work in minutes, not afterthoughts.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Outputs</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Everything you need after a sales call</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Paste the transcript. Get the follow-up done.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-medium text-slate-500">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Who it’s for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Built for teams that sell</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-white sm:px-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Stop rewriting sales call notes by hand.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Paste your transcript. Generate the follow-up. Move the deal forward.
            </p>
            <Link
              href="/app"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
