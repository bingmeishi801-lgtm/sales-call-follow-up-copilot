const fs = require('fs');
const path = require('path');

const file = path.join('D:/Personal/Desktop/Sales Call Follow-up Copilot','src/lib/seo-pages.ts');
let s = fs.readFileSync(file, 'utf8');

s = s.replace('  batch?: 1 | 2 | 3;','  batch?: 1 | 2 | 3 | 4 | 5;');
s = s.replace('export function getBatchPages(batch: 1 | 2 | 3) {','export function getBatchPages(batch: 1 | 2 | 3 | 4 | 5) {');
s = s.replace('export function getBatchPagesByCategory(category: SeoPageCategory, batch: 1 | 2 | 3, limit?: number) {','export function getBatchPagesByCategory(category: SeoPageCategory, batch: 1 | 2 | 3 | 4 | 5, limit?: number) {');

const marker = 'export const seoPageMap = Object.fromEntries(seoPages.map((page) => [page.slug, page])) as Record<string, SeoPage>;';
if (!s.includes('const batch4Pages: SeoPage[] =')) {
  const insert = `
const topicDefinitions = {
  "follow-up": {
    label: "follow-up",
    noun: "sales follow up",
    asset: "follow-up email and recap",
    adjacent: "demo follow-up and post-call follow-up",
    audience: ["AEs", "Founder-led sales teams", "SDRs sending fast post-call follow-up"],
    seedSlugs: ["sales-follow-up-email-generator", "sales-follow-up-email-template", "how-to-write-a-sales-follow-up-email", "follow-up-email-format", "follow-up-email-tips-after-sales-call"],
  },
  "recap": {
    label: "recap",
    noun: "sales recap",
    asset: "recap and next-step note",
    adjacent: "meeting recap and post-call recap",
    audience: ["AEs", "Founders", "Teams sending recap emails after calls"],
    seedSlugs: ["sales-call-recap-generator", "sales-call-recap-template", "how-to-write-a-sales-call-recap", "sales-call-recap-best-practices", "sales-recap-template-example"],
  },
  "crm-notes": {
    label: "crm notes",
    noun: "CRM notes",
    asset: "CRM update and call note",
    adjacent: "post-call notes and qualification notes",
    audience: ["HubSpot users", "Revenue teams", "Founders updating CRM manually"],
    seedSlugs: ["crm-note-generator", "crm-notes-template", "how-to-write-crm-notes-after-a-sales-call", "crm-notes-example", "crm-note-format"],
  },
  "discovery-call": {
    label: "discovery call",
    noun: "discovery call summary",
    asset: "discovery summary and qualification note",
    adjacent: "qualification notes and buyer discovery recap",
    audience: ["AEs running discovery", "Sales managers", "Founders doing customer discovery"],
    seedSlugs: ["discovery-call-summary-generator", "discovery-call-notes-template", "how-to-summarize-a-discovery-call", "discovery-call-best-practices-for-notes", "discovery-call-template-format"],
  },
  objections: {
    label: "buyer objections",
    noun: "buyer objections",
    asset: "objection log and response prep",
    adjacent: "pricing objections and buyer objection follow-up",
    audience: ["Sales managers", "Enablement leads", "Founders refining messaging"],
    seedSlugs: ["sales-objection-tracker-ai", "objection-handling-template", "how-to-document-sales-objections-after-a-call", "how-to-handle-sales-objections-after-a-call", "objection-response-template"],
  },
  summary: {
    label: "call summary",
    noun: "sales call summary",
    asset: "call summary and handoff note",
    adjacent: "meeting summary and call wrap-up",
    audience: ["AEs", "Sales leaders", "Operators handling many calls"],
    seedSlugs: ["sales-call-summary-tool", "call-summary-format", "sales-call-summary-best-practices", "how-to-write-a-call-summary-after-a-sales-call", "call-summary-generator-ai"],
  },
};

const generatedPageBlueprints = {
  4: [
    { category: "tools", slugPattern: "{base}-ai-tool", keywordPattern: "{keywordBase} ai tool", titlePattern: "{TitleBase} AI Tool | Faster Post-Call Workflow", descriptionPattern: "Use an AI tool for {keywordBase} workflows so your team can turn transcripts into a clearer {asset} faster.", heroPattern: "An AI tool for {keywordBase} workflows that saves post-call time", introPattern: "This page targets software-intent searchers who want help with {label} work after the meeting, not another generic summarizer.", faqQ1: "What should a {keywordBase} AI tool do?", faqA1: "It should turn transcript detail into a structured {asset}, surface the most important signal, and make the next follow-up action easier.", faqQ2: "Where does this fit in a sales workflow?", faqA2: "It fits right after the call ends, when the rep needs a usable draft for email, CRM, or internal handoff while the details are still fresh.", featuredTopics: ["follow-up", "crm-notes", "summary"] },
    { category: "tools", slugPattern: "{adjacentSlug}-software", keywordPattern: "{adjacentKeyword} software", titlePattern: "{AdjacentTitle} Software | Turn Conversations Into Action Faster", descriptionPattern: "Evaluate software for {adjacentKeyword} workflows that can convert raw call detail into a usable {asset} without manual rewriting.", heroPattern: "Software for {adjacentKeyword} when manual post-call work keeps piling up", introPattern: "This software-intent page captures visitors comparing products that can speed up {adjacent} work and keep follow-up quality high.", faqQ1: "What makes {adjacentKeyword} software useful?", faqA1: "Useful software shortens the time from transcript to usable output and keeps the important buyer context visible for the next step.", faqQ2: "Is this only for large sales teams?", faqA2: "No. Founder-led teams and small revenue teams often benefit even more because they have less time for manual post-call admin.", featuredTopics: ["recap", "discovery-call", "objections"] },
    { category: "templates", slugPattern: "{adjacentSlug}-template", keywordPattern: "{adjacentKeyword} template", titlePattern: "{AdjacentTitle} Template | Reuse a Better Post-Call Structure", descriptionPattern: "Use a {adjacentKeyword} template to structure the most important details from the conversation and keep the next step obvious.", heroPattern: "A {adjacentKeyword} template your team can reuse after important calls", introPattern: "Template-intent visitors often want a fast structure before they commit to a tool. This page gives the cluster another clean bridge into product-intent pages.", faqQ1: "When should I use a {adjacentKeyword} template?", faqA1: "Use it when you want a repeatable structure for capturing what happened on the call and what should happen next.", faqQ2: "Can a template still work with AI?", faqA2: "Yes. A strong template becomes an even better output target for AI because it defines the exact sections the team cares about.", featuredTopics: ["follow-up", "recap", "discovery-call"] },
    { category: "guides", slugPattern: "{guideSlug}", keywordPattern: "{guideKeyword}", titlePattern: "{GuideTitle} | Sharpen Post-Call Execution", descriptionPattern: "Learn {guideKeyword} so your team can turn raw conversations into a clearer {asset} with less manual cleanup.", heroPattern: "{GuideTitle} without letting the useful details slip away", introPattern: "This guide expands the topical cluster with a practical educational page tied closely to {label} execution and follow-up quality.", faqQ1: "What matters most when improving {keywordBase}?", faqA1: "The biggest gains usually come from using a repeatable structure, capturing the real buyer signal, and defining the next action before the conversation fades from memory.", faqQ2: "Should this workflow connect to templates and tools?", faqA2: "Yes. Strong how-to content should naturally feed readers into the template and software pages that help them execute faster.", featuredTopics: ["crm-notes", "summary", "objections"] },
  ],
  5: [
    { category: "tools", slugPattern: "{generatorSlug}", keywordPattern: "{generatorKeyword}", titlePattern: "{GeneratorTitle} | Build Better Outputs From Sales Calls", descriptionPattern: "Use a {generatorKeyword} to turn transcripts into a structured {asset} with cleaner buyer context, blockers, and next steps.", heroPattern: "A {generatorKeyword} for teams that want faster, cleaner post-call outputs", introPattern: "This batch 5 tool page goes after visitors ready to evaluate a generator rather than browse generic advice. It stays tightly aligned with the current product workflow.", faqQ1: "Why use a {generatorKeyword} instead of writing manually?", faqA1: "Because it reduces blank-page work, keeps details from the transcript visible, and helps the team move faster without sacrificing structure.", faqQ2: "Can a generator still be reviewed by a rep?", faqA2: "Absolutely. The best workflow is generate first, then review the draft quickly before sending or logging it.", featuredTopics: ["follow-up", "recap", "discovery-call"] },
    { category: "templates", slugPattern: "{exampleSlug}", keywordPattern: "{exampleKeyword}", titlePattern: "{ExampleTitle} | See What Good Post-Call Output Looks Like", descriptionPattern: "Review a {exampleKeyword} to see how a strong {asset} can be structured after the conversation ends.", heroPattern: "A {exampleKeyword} that shows the right level of specificity", introPattern: "Example-intent searches are useful because they help visitors benchmark quality quickly, then move into templates and AI tools naturally.", faqQ1: "Why look for a {exampleKeyword}?", faqA1: "Examples make the quality bar obvious and show what should actually be captured, not just the section headings.", faqQ2: "Should examples be short or detailed?", faqA2: "Usually concise but specific works best so the note stays readable while preserving the decision-relevant details.", featuredTopics: ["crm-notes", "summary"] },
    { category: "templates", slugPattern: "{formatSlug}", keywordPattern: "{formatKeyword}", titlePattern: "{FormatTitle} | A Cleaner Structure for Sales Teams", descriptionPattern: "Use a {formatKeyword} to keep the most important buyer context, blockers, and next steps organized after each call.", heroPattern: "A {formatKeyword} that makes post-call outputs easier to scan", introPattern: "Format-intent pages give the cluster another way to capture visitors who want structure first and tooling second.", faqQ1: "What should a {formatKeyword} include?", faqA1: "It should include the core context, the important signal from the call, and the next agreed action in a format another teammate can scan quickly.", faqQ2: "Is format different from a template?", faqA2: "They overlap, but format-focused searches usually want the page shape and section logic first, while templates often provide more direct fill-in wording.", featuredTopics: ["follow-up", "objections", "discovery-call"] },
    { category: "guides", slugPattern: "{howToSlug}", keywordPattern: "{howToKeyword}", titlePattern: "{HowToTitle} | Make Post-Call Work More Reusable", descriptionPattern: "Learn {howToKeyword} so your team can capture the useful signal from the conversation and turn it into a better {asset}.", heroPattern: "{HowToTitle} without relying on fuzzy memory alone", introPattern: "This how-to page strengthens the cluster with a very close-intent educational entry point that can route readers into templates, formats, and tools.", faqQ1: "What is the biggest mistake in {keywordBase}?", faqA1: "The biggest mistake is writing a generic recap that misses the real buyer priorities, blockers, or next step.", faqQ2: "Should the process be standardized across the team?", faqA2: "Yes. Even light standardization makes it easier to compare notes, coach reps, and reuse context across the pipeline.", featuredTopics: ["recap", "crm-notes", "summary"] },
    { category: "guides", slugPattern: "{tipsSlug}", keywordPattern: "{tipsKeyword}", titlePattern: "{TipsTitle} | Keep Sales Follow-Up Sharper", descriptionPattern: "Review {tipsKeyword} so your team can write cleaner notes, recaps, and follow-up assets with less friction after each call.", heroPattern: "{TipsTitle} that make post-call execution cleaner and faster", introPattern: "Tips and best-practices pages are lightweight entry points that expand the cluster and improve internal distribution into higher-intent pages.", faqQ1: "What are the most useful {tipsKeyword}?", faqA1: "The most useful tips keep teams specific, fast, and action-oriented instead of turning post-call work into long vague notes.", faqQ2: "Do tips pages still help product discovery?", faqA2: "Yes. They often attract readers early, then route them toward the tool, template, and software pages when they want more speed.", featuredTopics: ["follow-up", "objections", "discovery-call"] },
  ],
};

const topicVariantConfig = {
  "follow-up": {
    base: "follow-up-email",
    keywordBase: "follow up email",
    adjacentSlug: "demo-follow-up",
    adjacentKeyword: "demo follow up",
    adjacentTitle: "Demo Follow-Up",
    guideSlug: "post-call-follow-up-best-practices",
    guideKeyword: "post call follow up best practices",
    guideTitle: "Post-Call Follow-Up Best Practices",
    generatorSlug: "post-call-follow-up-generator",
    generatorKeyword: "post call follow up generator",
    generatorTitle: "Post-Call Follow-Up Generator",
    exampleSlug: "demo-follow-up-example",
    exampleKeyword: "demo follow up example",
    exampleTitle: "Demo Follow-Up Example",
    formatSlug: "post-call-follow-up-format",
    formatKeyword: "post call follow up format",
    formatTitle: "Post-Call Follow-Up Format",
    howToSlug: "how-to-write-a-demo-follow-up-email",
    howToKeyword: "how to write a demo follow up email",
    howToTitle: "How to Write a Demo Follow-Up Email",
    tipsSlug: "sales-follow-up-best-practices",
    tipsKeyword: "sales follow up best practices",
    tipsTitle: "Sales Follow-Up Best Practices",
  },
  "recap": {
    base: "meeting-recap",
    keywordBase: "meeting recap",
    adjacentSlug: "sales-recap",
    adjacentKeyword: "sales recap",
    adjacentTitle: "Sales Recap",
    guideSlug: "meeting-recap-best-practices",
    guideKeyword: "meeting recap best practices",
    guideTitle: "Meeting Recap Best Practices",
    generatorSlug: "sales-recap-generator",
    generatorKeyword: "sales recap generator",
    generatorTitle: "Sales Recap Generator",
    exampleSlug: "meeting-recap-example",
    exampleKeyword: "meeting recap example",
    exampleTitle: "Meeting Recap Example",
    formatSlug: "post-call-recap-format",
    formatKeyword: "post call recap format",
    formatTitle: "Post-Call Recap Format",
    howToSlug: "how-to-write-a-meeting-recap-after-a-sales-call",
    howToKeyword: "how to write a meeting recap after a sales call",
    howToTitle: "How to Write a Meeting Recap After a Sales Call",
    tipsSlug: "sales-recap-tips",
    tipsKeyword: "sales recap tips",
    tipsTitle: "Sales Recap Tips",
  },
  "crm-notes": {
    base: "post-call-notes",
    keywordBase: "post call notes",
    adjacentSlug: "qualification-notes",
    adjacentKeyword: "qualification notes",
    adjacentTitle: "Qualification Notes",
    guideSlug: "post-call-notes-best-practices",
    guideKeyword: "post call notes best practices",
    guideTitle: "Post-Call Notes Best Practices",
    generatorSlug: "qualification-notes-generator",
    generatorKeyword: "qualification notes generator",
    generatorTitle: "Qualification Notes Generator",
    exampleSlug: "post-call-notes-example",
    exampleKeyword: "post call notes example",
    exampleTitle: "Post-Call Notes Example",
    formatSlug: "qualification-notes-format",
    formatKeyword: "qualification notes format",
    formatTitle: "Qualification Notes Format",
    howToSlug: "how-to-write-post-call-notes-for-sales",
    howToKeyword: "how to write post call notes for sales",
    howToTitle: "How to Write Post-Call Notes for Sales",
    tipsSlug: "crm-note-best-practices-for-sales-teams",
    tipsKeyword: "crm note best practices for sales teams",
    tipsTitle: "CRM Note Best Practices for Sales Teams",
  },
  "discovery-call": {
    base: "qualification-call-summary",
    keywordBase: "qualification call summary",
    adjacentSlug: "buyer-discovery-notes",
    adjacentKeyword: "buyer discovery notes",
    adjacentTitle: "Buyer Discovery Notes",
    guideSlug: "qualification-call-best-practices",
    guideKeyword: "qualification call best practices",
    guideTitle: "Qualification Call Best Practices",
    generatorSlug: "qualification-call-summary-generator",
    generatorKeyword: "qualification call summary generator",
    generatorTitle: "Qualification Call Summary Generator",
    exampleSlug: "discovery-call-notes-example",
    exampleKeyword: "discovery call notes example",
    exampleTitle: "Discovery Call Notes Example",
    formatSlug: "qualification-call-notes-format",
    formatKeyword: "qualification call notes format",
    formatTitle: "Qualification Call Notes Format",
    howToSlug: "how-to-write-discovery-call-notes",
    howToKeyword: "how to write discovery call notes",
    howToTitle: "How to Write Discovery Call Notes",
    tipsSlug: "discovery-call-summary-tips",
    tipsKeyword: "discovery call summary tips",
    tipsTitle: "Discovery Call Summary Tips",
  },
  objections: {
    base: "buyer-objections",
    keywordBase: "buyer objections",
    adjacentSlug: "pricing-objections",
    adjacentKeyword: "pricing objections",
    adjacentTitle: "Pricing Objections",
    guideSlug: "buyer-objection-best-practices",
    guideKeyword: "buyer objection best practices",
    guideTitle: "Buyer Objection Best Practices",
    generatorSlug: "buyer-objection-generator",
    generatorKeyword: "buyer objection generator",
    generatorTitle: "Buyer Objection Generator",
    exampleSlug: "buyer-objection-example",
    exampleKeyword: "buyer objection example",
    exampleTitle: "Buyer Objection Example",
    formatSlug: "pricing-objection-response-format",
    formatKeyword: "pricing objection response format",
    formatTitle: "Pricing Objection Response Format",
    howToSlug: "how-to-document-buyer-objections-after-a-sales-call",
    howToKeyword: "how to document buyer objections after a sales call",
    howToTitle: "How to Document Buyer Objections After a Sales Call",
    tipsSlug: "sales-objection-follow-up-tips",
    tipsKeyword: "sales objection follow up tips",
    tipsTitle: "Sales Objection Follow-Up Tips",
  },
  summary: {
    base: "meeting-summary",
    keywordBase: "meeting summary",
    adjacentSlug: "sales-call-wrap-up",
    adjacentKeyword: "sales call wrap up",
    adjacentTitle: "Sales Call Wrap-Up",
    guideSlug: "call-summary-best-practices-for-sales-teams",
    guideKeyword: "call summary best practices for sales teams",
    guideTitle: "Call Summary Best Practices for Sales Teams",
    generatorSlug: "meeting-summary-generator-for-sales-calls",
    generatorKeyword: "meeting summary generator for sales calls",
    generatorTitle: "Meeting Summary Generator for Sales Calls",
    exampleSlug: "call-summary-example-for-sales-calls",
    exampleKeyword: "call summary example for sales calls",
    exampleTitle: "Call Summary Example for Sales Calls",
    formatSlug: "sales-call-wrap-up-format",
    formatKeyword: "sales call wrap up format",
    formatTitle: "Sales Call Wrap-Up Format",
    howToSlug: "how-to-write-a-sales-meeting-summary",
    howToKeyword: "how to write a sales meeting summary",
    howToTitle: "How to Write a Sales Meeting Summary",
    tipsSlug: "call-summary-tips-after-client-calls",
    tipsKeyword: "call summary tips after client calls",
    tipsTitle: "Call Summary Tips After Client Calls",
  },
};

function titleCase(value) {
  return value
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function fill(template, vars) {
  return template.replace(/\{(.*?)\}/g, (_, key) => vars[key] ?? '');
}

function buildGeneratedPages(batch) {
  return (Object.keys(topicDefinitions)).flatMap((topicKey) => {
    const topic = topicDefinitions[topicKey];
    const variant = topicVariantConfig[topicKey];
    return generatedPageBlueprints[batch].map((blueprint) => {
      const vars = {
        ...topic,
        ...variant,
        TitleBase: titleCase(variant.keywordBase),
        AdjacentTitle: variant.adjacentTitle,
        GuideTitle: variant.guideTitle,
        GeneratorTitle: variant.generatorTitle,
        ExampleTitle: variant.exampleTitle,
        FormatTitle: variant.formatTitle,
        HowToTitle: variant.howToTitle,
        TipsTitle: variant.tipsTitle,
      };

      const slug = fill(blueprint.slugPattern, vars);
      const keyword = fill(blueprint.keywordPattern, vars);
      const title = fill(blueprint.titlePattern, vars);
      const description = fill(blueprint.descriptionPattern, vars);
      const heroTitle = fill(blueprint.heroPattern, vars);
      const heroDescription = "Turn transcript detail into a cleaner " + topic.asset + " for " + topic.adjacent + " work without wasting time on manual rewrites.";
      const intro = fill(blueprint.introPattern, vars);
      const featured = blueprint.featuredTopics.includes(topicKey);
      const relatedSlugs = [...topic.seedSlugs].slice(0, 5);

      return {
        slug,
        category: blueprint.category,
        topic: topicKey,
        batch,
        featured,
        keyword,
        title,
        description,
        heroTitle,
        heroDescription,
        intro,
        benefits: [
          "Turn raw transcript detail into a usable " + topic.asset + " faster.",
          "Keep " + topic.label + " workflows more consistent across the team.",
          "Create a cleaner path from the call into follow-up, CRM, and internal handoff.",
        ],
        audiences: topic.audience,
        faqs: [
          { question: fill(blueprint.faqQ1, vars), answer: fill(blueprint.faqA1, vars) },
          { question: fill(blueprint.faqQ2, vars), answer: fill(blueprint.faqA2, vars) },
        ],
        relatedSlugs,
      };
    });
  });
}

const batch4Pages: SeoPage[] = buildGeneratedPages(4);
const batch5Pages: SeoPage[] = buildGeneratedPages(5);
const seoPages: SeoPage[] = [...baseSeoPages, ...batch4Pages, ...batch5Pages];
`;
  s = s.replace('export const seoPageMap = Object.fromEntries(seoPages.map((page) => [page.slug, page])) as Record<string, SeoPage>;', insert + '\n' + marker);
  s = s.replace('export const seoPages: SeoPage[] = [', 'const baseSeoPages: SeoPage[] = [');
}

fs.writeFileSync(file, s);
console.log('updated seo-pages.ts');
