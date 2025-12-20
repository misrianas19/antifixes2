"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <section id="contact" className="py-24 px-4 bg-[#030305] relative">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl font-bold text-white mb-2">REQUEST <span className="text-neon-cyan">CONSULTATION</span></h2>
                    <p className="text-gray-400">Ready to scale your business? Let's talk.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="name" required placeholder="Full Name" className="bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-cyan focus:outline-none transition-colors" />
                        <input name="email" type="email" required placeholder="Email Address" className="bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-cyan focus:outline-none transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="phone" placeholder="Phone Number" className="bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-cyan focus:outline-none transition-colors" />
                        <input name="company" placeholder="Company Name" className="bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-cyan focus:outline-none transition-colors" />
                    </div>

                    <div className="relative">
                        <select name="industry" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-gray-400 focus:border-neon-cyan focus:outline-none appearance-none cursor-pointer">
                            <option value="" disabled selected>Select Your Industry</option>
                            <option value="Travel">Tours & Travels</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Manufacturing">Manufacturing & Packaging</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <textarea name="message" required rows={4} placeholder="Tell us about your requirements..." className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-cyan focus:outline-none transition-colors"></textarea>

                    <button disabled={status === 'loading'} type="submit" className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'loading' ? 'Sending...' : 'Submit Request'}
                    </button>

                    {status === 'success' && <p className="text-green-400 text-center mt-4">Request submitted successfully! We will contact you shortly.</p>}
                    {status === 'error' && <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>}
                </form>
            </div>
        </section>
    )
}
