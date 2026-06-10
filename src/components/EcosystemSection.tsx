"use client";

import { motion } from "framer-motion";

const bullets = [
    {
        title: "Experienced Pilots & Trainers",
        desc: "Our team consists of seasoned aviators and international-grade trainers ensuring 100% safety.",
        icon: "👨‍✈️"
    },
    {
        title: "Startup Ecosystem Support",
        desc: "Proudly backed and accelerated by leading Kerala startups like chargeMOD.",
        icon: "🚀"
    },
    {
        title: "Community Validation",
        desc: "Trusted by frequent flyers and veteran pilots like Mr. Raman, who believe in our vision to transform Kerala's skies.",
        icon: "🤝"
    }
];

export default function EcosystemSection() {
    return (
        <section className="w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-white text-rich-black relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                
                {/* Left: Text */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 space-y-6 md:space-y-8"
                >
                    <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-6 md:w-8 h-px bg-metallic-gray" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-metallic-gray">Strength & Ecosystem</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            Backed by Innovation, <br />
                            <span className="text-aviation-blue">Driven by Experts.</span>
                        </h2>
                    </div>

                    <div className="space-y-5 md:space-y-8 pt-4 md:pt-8">
                        {bullets.map((bullet, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="flex gap-4 md:gap-6"
                            >
                                <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-off-white flex items-center justify-center text-xl md:text-2xl shadow-inner border border-white">
                                    {bullet.icon}
                                </div>
                                <div className="space-y-0.5 md:space-y-1">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-rich-black">{bullet.title}</h3>
                                    <p className="text-sm md:text-base text-dim leading-relaxed">{bullet.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Abstract Graphic */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 relative h-[350px] sm:h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-aviation-blue/5 to-metallic-gray/10 flex items-center justify-center border border-aviation-blue/10 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-aviation-blue/20 absolute -top-10 -right-10 animate-pulse"></div>
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-metallic-gray/20 absolute -bottom-20 -left-20 animate-pulse delay-700"></div>
                    
                    <div className="relative z-10 text-center space-y-3 md:space-y-4">
                        <div className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full bg-white shadow-2xl flex items-center justify-center text-2xl md:text-4xl transform hover:scale-110 transition-transform">
                            🌍
                        </div>
                        <p className="font-bold text-aviation-navy tracking-[0.15em] md:tracking-widest uppercase text-[10px] sm:text-xs md:text-sm">Kerala Aviation Network</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
