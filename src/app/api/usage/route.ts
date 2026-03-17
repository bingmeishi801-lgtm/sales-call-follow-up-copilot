import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { getAuthenticatedUsage, getGuestUsage } from "@/lib/usage";

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    const usage = user ? await getAuthenticatedUsage(user.id) : getGuestUsage(request);
    return NextResponse.json(usage);
  } catch {
    return NextResponse.json({ error: "Failed to load usage status." }, { status: 500 });
  }
}
