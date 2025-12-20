export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET(req) {
  // 🔒 Lazy imports to avoid build-time execution
  const { prisma } = await import("@/lib/prisma");
  const { requireAdmin } = await import("@/lib/adminGuard");

  const authError = await requireAdmin(req);
  if (authError) return authError;

  const requests = await prisma.contactRequest.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(requests);
}
