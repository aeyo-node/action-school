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

    // 1. "Fly into Freedom" Text (Visible early)
    const opacityLuxury = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
    const scaleLuxury = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);

    // 2. Specs Text (Visible later)
    const opacitySpecs = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div id="plane-morph" ref={containerRef} className="relative h-[400vh] w-full z-20 bg-rich-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-80" 
                />

                {/* PHASE 1: Fly In Freedom */}
                <motion.div
                    style={{ opacity: opacityLuxury, scale: scaleLuxury }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-center pointer-events-none px-6 md:px-12"
                >
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[15vw] leading-none font-semibold tracking-tighter text-white drop-shadow-md">Fly in</h2>
                        <h2 className="text-[15vw] leading-none font-semibold tracking-tighter text-white drop-shadow-md">Freedom</h2>
                    </div>

                    {/* Subtext */}
                    <div className="absolute top-1/2 left-6 md:left-12 mt-24 md:mt-32 max-w-[200px] md:max-w-xs">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-none drop-shadow-md">
                            Adventure <br /> that moves <br /> you
                        </h3>
                    </div>

                    <div className="absolute bottom-32 md:bottom-12 left-6 sm:left-auto right-6 md:right-12 max-w-[calc(100%-3rem)] sm:max-w-sm text-right bg-rich-black/60 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/10">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-2">
                            <span>Featured</span>
                            <span>Ultra-Light</span>
                        </div>
                        <p className="text-xs text-white/90 leading-relaxed text-left">
                            Experience the thrill of piloting a real, lightweight airplane under expert supervision. Designed for maximum visibility and pure joy, our ultra-light aircraft bring the sky closer to you.
                        </p>
                    </div>
                </motion.div>


                {/* PHASE 2: Specs */}
                <motion.div
                    style={{ opacity: opacitySpecs }}
                    className="absolute inset-0 w-full h-full pointer-events-none px-6 md:px-12"
                >
                    {/* Header Left */}
                    <div className="absolute top-24 left-6 md:left-12 drop-shadow-md">
                        <p className="text-lg md:text-xl text-off-white/80 font-medium mb-0">Action School</p>
                        <h2 className="text-[15vw] md:text-[10vw] font-bold tracking-tighter text-white leading-[0.8]">Ultra-Light</h2>
                    </div>

                    {/* Header Right */}
                    <div className="absolute top-64 md:top-24 right-6 md:right-12 left-6 md:left-auto max-w-[calc(100%-3rem)] md:max-w-sm bg-rich-black/40 p-4 md:p-6 rounded-xl backdrop-blur-sm">
                        <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-none mb-4 md:mb-6">
                            Master the <br className="hidden md:block" /> Skies
                        </h3>
                        <div className="w-12 h-px bg-white/20 mb-4 md:mb-6" />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-2">Direct Access to Open Skies</p>
                        <p className="text-xs text-white/90 leading-relaxed">
                            Fast, agile, and incredibly safe. Whether you are an aspiring pilot or an adventure enthusiast, our fleet is ready to deliver an unforgettable experience.
                        </p>
                    </div>

                    {/* Specs Left Bottom */}
                    <div className="absolute bottom-32 md:bottom-12 left-6 md:left-12 right-6 md:right-auto grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8 text-white bg-rich-black/60 p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/10">
                        <div>
                            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Experience</p>
                            <p className="text-sm md:text-xl font-bold">EXPERT LED</p>
                        </div>
                        <div>
                            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Views</p>
                            <p className="text-sm md:text-xl font-bold">360° PANORAMIC</p>
                        </div>
                        <div>
                            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Requirements</p>
                            <p className="text-sm md:text-xl font-bold">NO EXPERIENCE <span className="text-[8px] md:text-[10px] font-normal opacity-70 block md:inline">(NEEDED)</span></p>
                        </div>
                        <div>
                            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-aviation-blue mb-1">Safety</p>
                            <p className="text-sm md:text-xl font-bold">100% SECURE <span className="text-[8px] md:text-[10px] font-normal opacity-70 block md:inline">(CERTIFIED)</span></p>
                        </div>
                    </div>

                    {/* Center Bottom Floating CTA */}
                    <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-3 md:gap-4 pointer-events-auto w-[90%] md:w-auto">
                        <a href="#contact" className="w-full md:w-auto text-center px-6 py-3 rounded-full bg-aviation-blue text-white font-bold text-xs md:text-sm tracking-wide shadow-lg shadow-aviation-blue/20 hover:scale-105 transition-transform">
                            Join the Movement
                        </a>
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-aviation-blue text-xl hover:scale-110 transition-transform cursor-pointer">
                            ✈️
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}
