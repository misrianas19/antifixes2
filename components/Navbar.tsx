"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#030305]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-display text-2xl font-bold tracking-wider text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">
                            MISRISAAB
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#industries" className="hover:text-neon-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide">INDUSTRIES</Link>
                            <Link href="#contact" className="hover:text-neon-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide">CONTACT</Link>

                            {session ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-400">Hi, {session.user?.name || session.user?.email?.split('@')[0]}</span>
                                    <button onClick={() => signOut()} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link href="/api/auth/signin" className="bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)]">
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-card m-2 p-4 border-t border-white/10">
                    <div className="flex flex-col space-y-4">
                        <Link href="#industries" className="text-gray-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium">INDUSTRIES</Link>
                        <Link href="#contact" className="text-gray-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium">CONTACT</Link>
                        {session ? (
                            <>
                                <span className="text-sm text-gray-400 px-3">Hi, {session.user?.name}</span>
                                <button onClick={() => signOut()} className="text-left text-red-400 block px-3 py-2 uppercase font-bold text-sm">Logout</button>
                            </>
                        ) : (
                            <Link href="/api/auth/signin" className="text-neon-cyan block px-3 py-2 uppercase font-bold text-sm">Sign In</Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
