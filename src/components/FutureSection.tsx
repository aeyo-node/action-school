"use client";

import { motion } from "framer-motion";

export default function FutureSection() {
    return (
        <section id="future" className="w-full py-32 px-6 md:px-12 bg-aviation-navy text-white relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-aviation-blue/10 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-aviation-blue mb-4">
                        The Future
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Expanding Across <span className="text-aviation-blue">Kerala.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-off-white/90">
                        We are actively working towards establishing multiple Take-off and Landing Zones (Aero-Parks) across strategic locations in Kerala to support commercial low-speed flying and tourism.
                    </p>

                    <div className="bg-rich-black/50 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm text-left flex gap-6 items-start">
                        <div className="text-3xl">🏛️</div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Government Partnership</h4>
                            <p className="text-sm leading-relaxed text-metallic-gray">
                                We are currently in discussions with the Kerala Startup Mission (KSUM) and government bodies for land allocation to make these aviation hubs a reality soon.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
