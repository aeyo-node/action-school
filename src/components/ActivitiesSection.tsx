"use client";

import { motion } from "framer-motion";

const activities = [
    {
        title: "Ultra-Light Aircrafts",
        description: "Experience the thrill of piloting a real, lightweight airplane under expert supervision.",
        target: "Aspiring Pilots & Hobbyists",
        tag: "FEATURED"
    },
    {
        title: "Paramotors",
        description: "The simplest form of powered aviation—fly free like a bird over Kerala's coastlines.",
        target: "Adventure Enthusiasts",
        tag: "OPEN AIR"
    },
    {
        title: "Gyrocopter Flying",
        description: "Fast, agile, and incredibly safe open-cockpit flying machines.",
        target: "Tourists & Aerial Explorers",
        tag: "AGILE"
    }
];

export default function ActivitiesSection() {
    return (
        <section id="activities" className="w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-rich-black text-white relative z-10 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-aviation-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 sm:space-y-6"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-md">
                        Choose Your <span className="text-aviation-blue">Sky</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-off-white/70 max-w-2xl mx-auto font-light">
                        Discover the perfect way to experience the freedom of flight. No prior experience required.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {activities.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 group hover:border-aviation-blue/30 hover:shadow-2xl hover:shadow-aviation-blue/10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6 sm:mb-8">
                                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-aviation-blue bg-aviation-blue/10 px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-sm sm:text-base text-off-white/80 leading-relaxed mb-8 sm:mb-12 font-light">
                                    {item.description}
                                </p>
                            </div>
                            <div className="pt-4 sm:pt-6 border-t border-white/10">
                                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-metallic-gray mb-1 sm:mb-2">Target Profile</p>
                                <p className="text-sm sm:text-base font-medium text-white">{item.target}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
