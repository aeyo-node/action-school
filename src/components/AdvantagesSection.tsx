"use client";

import { motion } from "framer-motion";

const advantages = [
    {
        title: "Rigorous Safety Standards",
        description: "Safety is our absolute priority. We operate under strict international sport aviation guidelines, utilizing dual-control aircraft and state-of-the-art emergency parachute systems for complete peace of mind.",
        num: "01"
    },
    {
        title: "Experiential Education",
        description: "Learn by doing. Our structured training modules pair you with veteran pilots from day one, giving you hands-on throttle and stick experience rather than just classroom theory.",
        num: "02"
    },
    {
        title: "Community & Network",
        description: "Join a passionate network of aviators, aerospace startups, and adventure enthusiasts. Action School is building Kerala's premier ecosystem for sport aviation and aerial tourism.",
        num: "03"
    }
];

export default function AdvantagesSection() {
    return (
        <section id="advantages" className="w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-brand-cream text-brand-charcoal relative z-10 overflow-hidden border-t border-brand-charcoal/5">
            {/* Background grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#31272603_1px,transparent_1px),linear-gradient(to_bottom,#31272603_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 relative z-10">
                
                {/* Section Title */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-brand-charcoal/10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-px bg-brand-charcoal/55" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-charcoal/60">Advantages</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none">
                            Why Action School?
                        </h2>
                    </motion.div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-sm sm:text-base text-brand-charcoal/70 max-w-sm font-light leading-relaxed"
                    >
                        We offer a premium, secure entry point to pilot training and recreational flight, backed by innovation.
                    </motion.p>
                </div>

                {/* Advantages Cards (Jesko Jets Style layout: vertical/grid cards with divider lines) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {advantages.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="flex flex-col space-y-6 group"
                        >
                            {/* Number & Line */}
                            <div className="flex justify-between items-end">
                                <span className="font-display font-medium text-4xl sm:text-5xl text-brand-charcoal/20 group-hover:text-brand-charcoal/40 transition-colors duration-300">
                                    {item.num}
                                </span>
                                <div className="w-16 h-px bg-brand-charcoal/10 group-hover:w-24 transition-all duration-300" />
                            </div>

                            {/* Divider Line */}
                            <div className="w-full h-px bg-brand-charcoal/10" />

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-brand-charcoal">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-brand-charcoal/70 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
