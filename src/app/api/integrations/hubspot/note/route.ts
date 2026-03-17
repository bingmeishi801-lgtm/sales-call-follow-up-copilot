import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";

type HubspotNoteRequest = {
  objectType?: "contact" | "deal" | "company";
  objectId?: string;
  crmNote?: string;
};

const ASSOCIATION_TYPE_ID: Record<"contact" | "deal" | "company", number> = {
  contact: 202,
  company: 190,
  deal: 214,
};

const HUBSPOT_OBJECT_TYPE_ID: Record<"contact" | "deal" | "company", string> = {
  contact: "0-1",
  company: "0-2",
  deal: "0-3",
};

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN?.trim();
    if (!token) {
      return NextResponse.json({ error: "HubSpot token is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as HubspotNoteRequest;
    const objectType = body.objectType || "deal";
    const objectId = body.objectId?.trim();
    const crmNote = body.crmNote?.trim();

    if (!objectId) {
      return NextResponse.json({ error: "objectId is required." }, { status: 400 });
    }

    if (!crmNote) {
      return NextResponse.json({ error: "crmNote is required." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    const response = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        properties: {
          hs_note_body: crmNote,
          hs_timestamp: timestamp,
        },
        associations: [
          {
            to: { id: objectId },
            types: [
              {
                associationCategory: "HUBSPOT_DEFINED",
                associationTypeId: ASSOCIATION_TYPE_ID[objectType],
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ error: `HubSpot API failed: ${text}` }, { status: 502 });
    }

    const note = await response.json();

    return NextResponse.json({
      ok: true,
      noteId: note.id,
      objectType,
      objectId,
      objectTypeId: HUBSPOT_OBJECT_TYPE_ID[objectType],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to push note to HubSpot.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
