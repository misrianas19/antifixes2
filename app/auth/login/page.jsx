"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/admin", // IMPORTANT
    });

    // If credentials are wrong, NextAuth redirects back with error
    if (result?.error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030305] p-4 relative overflow-hidden">
      <Link
        href="/"
        className="absolute top-8 left-8 text-gray-400 hover:text-neon-cyan flex items-center gap-2 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </Link>

      <div className="w-full max-w-md glass-card p-8 md:p-10 z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          WELCOME BACK
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Access the MISRISAAB portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-black/40 text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-black/40 text-white"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-neon-cyan text-black font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
