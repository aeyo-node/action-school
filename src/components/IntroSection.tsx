"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IntroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-[#3b82f6] text-off-white z-10 py-24 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
            {/* Sky Background Gradient shim to match Hero/Plane */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#60a5fa] to-[#3b82f6] -z-10" />

            <div className="max-w-7xl mx-auto w-full space-y-32">

                {/* Part A: Mission Statement */}
                <motion.div
                    style={{ y: yContent, opacity: opacityContent }}
                    className="space-y-8"
                >
                    <div className="flex justify-between items-start text-[10px] font-bold uppercase tracking-widest opacity-70">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">🌐</div>
                            <span>JR</span>
                        </div>
                        <div>
                            <span>EST.</span>
                        </div>
                        <div>
                            <span>BY CHRIS DEMIDENKO<br />2013</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-5xl">
                        Jesko Jets® is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.
                    </h2>
                </motion.div>

                {/* Part B: Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {/* Feature 1 */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-none">
                            Direct Access to <br /> Private Travel
                        </h3>
                        <div className="w-8 h-px bg-white/50" />
                        <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                            Fly beyond boundaries with Jesko Jets. Our global operations ensure seamless, personalized travel experiences — from the first call to landing. Every journey is tailored to your comfort, privacy, and schedule.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-none">
                            Your Freedom to <br /> Enjoy Life
                        </h3>
                        <div className="w-8 h-px bg-white/50" />
                        <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                            We value your time above all. Jesko Jets gives you the freedom to live, work, and relax wherever life takes you — without compromise.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-none">
                            Precision and <br /> Excellence
                        </h3>
                        <div className="w-8 h-px bg-white/50" />
                        <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                            Each detail of your flight — from route planning to in-flight service — reflects our dedication to perfection. Our crew and fleet meet the highest global standards, ensuring reliability in every mission.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-none">
                            Global Reach, <br /> Personal Touch
                        </h3>
                        <div className="w-8 h-px bg-white/50" />
                        <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                            With access to destinations in over 150 countries, Jesko Jets brings the world closer to you. Our experts manage every aspect of your flight, guaranteeing a smooth and effortless journey.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
