export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function DebugPage() {
  // Lazy imports to avoid build-time execution
  const { getServerSession } = await import("next-auth");
  const { authOptions } = await import(
    "@/app/api/auth/[...nextauth]/route"
  );

  const session = await getServerSession(authOptions);

  return (
    <pre style={{ padding: 20, fontSize: 16 }}>
      {JSON.stringify(session, null, 2)}
    </pre>
  );
}
