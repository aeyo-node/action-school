"use client";

import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCanvasSequence } from "@/hooks/useCanvasSequence";

export default function PlaneMorph() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const [progress, setProgress] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    const { canvasRef, renderFrame, isLoaded } = useCanvasSequence({
        folderPath: "/action-school/plane-sequence",
        frameCount: 120, // Confirm exact count
    });

    useEffect(() => {
        renderFrame(progress);
    }, [progress, isLoaded, renderFrame]);

    // --- Animations ---
    const opacityLuxury = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
    const scaleLuxury = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);
    const opacitySpecs = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div id="plane-morph" ref={containerRef} className="relative h-[400vh] w-full z-20 bg-rich-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-80" 
                />

                {/* PHASE 1: Fly In Freedom - Use flex layout instead of absolute chaos */}
                <motion.div
                    style={{ opacity: opacityLuxury, scale: scaleLuxury }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none p-6 pt-20 pb-8 md:p-12 md:pt-24 md:pb-12"
                >
                    {/* Top: Big headline */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                        <h2 className="text-[13vw] sm:text-[15vw] leading-none font-semibold tracking-tighter text-white drop-shadow-md">Fly in</h2>
                        <h2 className="text-[13vw] sm:text-[15vw] leading-none font-semibold tracking-tighter text-white drop-shadow-md">Freedom</h2>
                    </div>

                    {/* Middle: Subtext */}
                    <div className="max-w-xs">
                        <h3 className="text-xl md:text-3xl font-medium tracking-tight text-white leading-tight drop-shadow-md">
                            Adventure <br /> that moves <br /> you
                        </h3>
                    </div>

                    {/* Bottom: Description card */}
                    <div className="self-end max-w-sm bg-rich-black/60 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/10">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-2">
                            <span>Featured</span>
                            <span>Ultra-Light</span>
                        </div>
                        <p className="text-xs text-white/90 leading-relaxed">
                            Experience the thrill of piloting a real, lightweight airplane under expert supervision. Designed for maximum visibility and pure joy, our ultra-light aircraft bring the sky closer to you.
                        </p>
                    </div>
                </motion.div>


                {/* PHASE 2: Specs - Also flex-based */}
                <motion.div
                    style={{ opacity: opacitySpecs }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none p-6 pt-20 pb-8 md:p-12 md:pt-24 md:pb-12"
                >
                    {/* Top row: Title + description side by side on desktop, stacked on mobile */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
                        <div className="drop-shadow-md">
                            <p className="text-sm md:text-xl text-off-white/80 font-medium mb-0">Action School</p>
                            <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-white leading-[0.8]">Ultra-Light</h2>
                        </div>

                        <div className="max-w-sm bg-rich-black/40 p-4 md:p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="text-xl md:text-3xl font-medium tracking-tight text-white leading-none mb-3 md:mb-6">
                                Master the Skies
                            </h3>
                            <div className="w-12 h-px bg-white/20 mb-3 md:mb-6" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-2">Direct Access to Open Skies</p>
                            <p className="text-xs text-white/90 leading-relaxed">
                                Fast, agile, and incredibly safe. Whether you are an aspiring pilot or an adventure enthusiast, our fleet is ready to deliver an unforgettable experience.
                            </p>
                        </div>
                    </div>

                    {/* Bottom: Specs grid + CTA */}
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:gap-x-12 md:gap-y-6 text-white bg-rich-black/60 p-4 md:p-8 rounded-xl backdrop-blur-md border border-white/10 max-w-lg">
                            <div>
                                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Experience</p>
                                <p className="text-xs md:text-xl font-bold">EXPERT LED</p>
                            </div>
                            <div>
                                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Views</p>
                                <p className="text-xs md:text-xl font-bold">360° PANORAMIC</p>
                            </div>
                            <div>
                                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Requirements</p>
                                <p className="text-xs md:text-xl font-bold">NO EXPERIENCE</p>
                            </div>
                            <div>
                                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Safety</p>
                                <p className="text-xs md:text-xl font-bold">100% SECURE</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pointer-events-auto">
                            <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-aviation-blue text-white font-bold text-xs md:text-sm tracking-wide shadow-lg shadow-aviation-blue/20 hover:scale-105 transition-transform">
                                Join the Movement
                            </a>
                            <div className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-aviation-blue text-xl hover:scale-110 transition-transform cursor-pointer">
                                ✈️
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}
