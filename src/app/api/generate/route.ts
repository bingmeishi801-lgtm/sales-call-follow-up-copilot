import { NextRequest, NextResponse } from "next/server";

type CallType = "discovery" | "demo" | "follow-up";

type GenerateResponse = {
  summary: string;
  pain_points: string[];
  objections: string[];
  next_steps: string[];
  follow_up_email: string;
  crm_note: string;
};

const systemPrompt = `You are a sales follow-up copilot.
Transform a raw sales call transcript into structured outputs for a sales workflow.
Return valid JSON only with this exact shape:
{
  "summary": string,
  "pain_points": string[],
  "objections": string[],
  "next_steps": string[],
  "follow_up_email": string,
  "crm_note": string
}
Rules:
- Do not invent facts not grounded in the transcript.
- Keep the summary concise and useful.
- Pain points and objections should be clear and specific.
- Next steps should be actionable.
- The follow_up_email must be short, natural, professional, and ready to send in English.
- The crm_note should be structured and concise.
- If objections are unclear, return an empty array or a minimal accurate note.
- Output JSON only, without markdown fences.`;

function fallbackGenerate(transcript: string, callType: CallType): GenerateResponse {
  const snippet = transcript
    .split(/\n+/)
    .slice(0, 6)
    .join(" ")
    .slice(0, 600);

  return {
    summary: `This ${callType} call focused on the prospect's current workflow, key blockers, and what would need to happen next for the opportunity to move forward. The team wants faster post-call follow-up and clearer documentation after each conversation.`,
    pain_points: [
      "Manual post-call follow-up takes too much time.",
      "Call notes and CRM updates are inconsistent across reps.",
      "Important customer details can get lost when follow-up is delayed.",
    ],
    objections: [
      "The prospect wants outputs to be accurate and not generic.",
      "The prospect does not want another complicated setup or workflow.",
    ],
    next_steps: [
      "Send a recap email summarizing the main priorities discussed.",
      "Share a short demo or pricing overview relevant to the prospect's use case.",
      "Confirm the next meeting or review timeline while the conversation is fresh.",
    ],
    follow_up_email: `Subject: Great speaking today\n\nHi there,\n\nThanks again for the conversation today. Based on what you shared, it sounds like the biggest opportunity is reducing the time your team spends on manual post-call follow-up while keeping notes, objections, and next steps more consistent.\n\nAs discussed, I’ll follow up with a short overview and the next recommended step so you can review it with your team.\n\nBest,\nYour Name`,
    crm_note: `Call Type: ${callType}\nSummary: Prospect discussed current workflow and post-call follow-up challenges.\nPain Points: Manual recap work is slow; CRM notes are inconsistent; details get lost when follow-up is delayed.\nObjections: Wants accurate outputs and simple setup.\nNext Step: Send recap and relevant follow-up materials.\n\nTranscript snippet: ${snippet}`,
  };
}

async function generateWithOpenAI(transcript: string, callType: CallType): Promise<GenerateResponse> {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  if (!apiKey) {
    return fallbackGenerate(transcript, callType);
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Call type: ${callType}\n\nTranscript:\n${transcript}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI request failed: ${text}`);
  }

  const json = await response.json();
  const content = json.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("Model returned empty content.");
  }

  const parsed = JSON.parse(content) as GenerateResponse;
  return {
    summary: parsed.summary || "",
    pain_points: parsed.pain_points || [],
    objections: parsed.objections || [],
    next_steps: parsed.next_steps || [],
    follow_up_email: parsed.follow_up_email || "",
    crm_note: parsed.crm_note || "",
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { transcript?: string; callType?: CallType };
    const transcript = body.transcript?.trim() || "";
    const callType = body.callType || "discovery";

    if (!transcript) {
      return NextResponse.json({ error: "Transcript is required." }, { status: 400 });
    }

    if (transcript.length < 300) {
      return NextResponse.json(
        { error: "Transcript is too short to generate useful follow-up content." },
        { status: 400 },
      );
    }

    const data = await generateWithOpenAI(transcript, callType);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "We couldn’t generate the output this time. Please retry." },
      { status: 500 },
    );
  }
}
