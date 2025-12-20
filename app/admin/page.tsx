export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminPage() {
  const { getServerSession } = await import("next-auth");
  const { redirect } = await import("next/navigation");
  const { authOptions } = await import(
    "@/app/api/auth/[...nextauth]/route"
  );

  const { default: AdminDashboard } = await import(
    "@/components/AdminDashboard"
  );
  const { default: Navbar } = await import("@/components/Navbar");

  const session = await getServerSession(authOptions);

  // ❌ Not logged in → go to login
  if (!session) {
    redirect("/auth/login");
  }

  // 🔒 Explicit narrowing for TypeScript
  const user = session.user;

  // ❌ Logged in but NOT admin → go to home
  if (user.role !== "ADMIN") {
    redirect("/");
  }

  // ✅ Logged in + ADMIN
  return (
    <main className="min-h-screen bg-[#030305] pt-24 pb-12 px-4">
      <Navbar />

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 mb-8">
          <div>
            <h1 className="font-display text-4xl font-bold text-white mb-2">
              ADMIN <span className="text-neon-cyan">PORTAL</span>
            </h1>
            <p className="text-gray-400">
              Overview of business performance and inquiries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <AdminDashboard />
        </div>
      </div>
    </main>
  );
}
