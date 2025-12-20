"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Building, Factory } from 'lucide-react';

const industries = [
    {
        id: 'travel',
        title: 'Tours & Travels',
        icon: Globe,
        description: 'Revolutionizing travel experiences with AI-driven logistics and personalized customer journeys.',
        processes: [
            'Dynamic Itinerary Management & Booking Engine',
            'Fleet Utilization & Real-Time Tracking System',
            'Customer Experience & Loyalty Automation'
        ]
    },
    {
        id: 'real-estate',
        title: 'Real Estate',
        icon: Building,
        description: 'Transforming property management with Virtual Reality and intelligent CRM pipelines.',
        processes: [
            'Virtual Property Tour & Augmented Reality Showcase',
            'Intelligent Lead Scoring & CRM Integration',
            'Automated Tenant Onboarding & Document Management'
        ]
    },
    {
        id: 'manufacturing',
        title: 'Manufacturing',
        icon: Factory,
        description: 'Optimizing production lines with IoT sensors and predictive analytics.',
        processes: [
            'IoT-Enabled Smart Production Monitoring',
            'Predictive Maintenance & Supply Chain Optimization',
            'Automated Quality Control & Inventory Logistics'
        ]
    }
];

export default function Industries() {
    return (
        <section id="industries" className="py-24 px-4 relative bg-[#030305]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">INDUSTRY <span className="text-neon-cyan">SOLUTIONS</span></h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function IndustryCard({ industry }: { industry: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = industry.icon;

    return (
        <motion.div
            className="glass-card p-8 group relative overflow-hidden"
            whileHover={{ y: -5 }}
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={120} />
            </div>

            <Icon className="w-12 h-12 text-neon-cyan mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-3">{industry.title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{industry.description}</p>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider hover:text-neon-cyan transition-colors"
            >
                <span>View Processes</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 space-y-3">
                            {industry.processes.map((process: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 border-l border-white/10 pl-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-1.5 flex-shrink-0" />
                                    <span>{process}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
