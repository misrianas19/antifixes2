"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (res.ok) {
                router.push("/auth/login");
            } else {
                const data = await res.json();
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            setError("An error occurred");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#030305] p-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 blur-[100px] rounded-full pointer-events-none"></div>

            <Link href="/" className="absolute top-8 left-8 text-gray-400 hover:text-neon-cyan flex items-center gap-2 transition-colors">
                <ArrowLeft className="w-5 h-5" /> Back to Home
            </Link>

            <div className="w-full max-w-md glass-card p-8 md:p-10 z-10">
                <h1 className="font-display text-3xl font-bold text-white text-center mb-2">CREATE ACCOUNT</h1>
                <p className="text-gray-400 text-center mb-8">Join the future with MISRISAAB</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                    <button type="submit" className="w-full bg-neon-purple/10 border border-neon-purple/50 text-neon-purple font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-neon-purple hover:text-black hover:shadow-[0_0_20px_rgba(189,0,255,0.4)] transition-all">
                        Register
                    </button>
                </form>

                <p className="text-gray-500 text-center mt-6 text-sm">
                    Already have an account? <Link href="/auth/login" className="text-neon-purple hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
}
