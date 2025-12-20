export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-[#030305]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Ambient Glow */}
            <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-neon-purple/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 text-center space-y-8 max-w-5xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-neon-cyan border border-neon-cyan/20 rounded-full bg-neon-cyan/5 backdrop-blur-sm">
                    EST. 2025 • ENTERPRISE SOLUTIONS
                </div>

                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                    MISRISAAB
                </h1>

                <p className="font-display text-xl md:text-3xl text-gray-300 tracking-widest uppercase">
                    SCALING BUSINESSES.<br />
                    <span className="text-neon-cyan text-shadow-glow">OPTIMIZING EFFICIENCY.</span>
                </p>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    We provide cutting-edge IT infrastructure for the world's most demanding industries.
                    From <span className="text-white">Travel</span> to <span className="text-white">Real Estate</span> to <span className="text-white">Manufacturing</span>.
                </p>

                <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#industries" className="relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded hover:bg-neon-cyan hover:text-black transition-all hover:shadow-[0_0_40px_rgba(0,243,255,0.4)]">
                        View Solutions
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded hover:bg-white/5 transition-all">
                        Contact Us  →
                    </a>
                </div>
            </div>
        </section>
    )
}
