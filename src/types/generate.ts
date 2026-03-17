export type CallType = "discovery" | "demo" | "follow-up";

export type GenerateRequest = {
  transcript: string;
  callType?: CallType;
};

export type GenerateResponse = {
  summary: string;
  pain_points: string[];
  objections: string[];
  next_steps: string[];
  follow_up_email: string;
  crm_note: string;
};

export type OutputSectionKey = keyof GenerateResponse;

export type OutputSection = {
  key: OutputSectionKey;
  title: string;
  content: string;
};
