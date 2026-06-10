"use client";

import { motion } from "framer-motion";

export default function FutureSection() {
    return (
        <section id="future" className="w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-aviation-navy text-white relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-aviation-blue/10 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            
            <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-6"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-aviation-blue mb-2 sm:mb-4">
                        The Future
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                        Expanding Across <span className="text-aviation-blue">Kerala.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 sm:space-y-8"
                >
                    <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed text-off-white/90">
                        We are actively working towards establishing multiple Take-off and Landing Zones (Aero-Parks) across strategic locations in Kerala to support commercial low-speed flying and tourism.
                    </p>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto text-left flex gap-4 sm:gap-6 items-start">
                        <div className="text-2xl md:text-3xl flex-shrink-0">🏛️</div>
                        <div>
                            <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Government Partnership</h4>
                            <p className="text-xs sm:text-sm leading-relaxed text-metallic-gray">
                                We are currently in discussions with the Kerala Startup Mission (KSUM) and government bodies for land allocation to make these aviation hubs a reality soon.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
