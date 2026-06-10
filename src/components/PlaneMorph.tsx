"use client";

import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCanvasSequence } from "@/hooks/useCanvasSequence";

export default function PlaneMorph() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [progress, setProgress] = useState(0);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        setProgress(latest);
    });

    const { canvasRef, renderFrame, isLoaded } = useCanvasSequence({
        folderPath: "/action-school/plane-sequence",
        frameCount: 240,
    });

    useEffect(() => {
        renderFrame(progress);
    }, [progress, isLoaded, renderFrame]);

    // --- Cinematic Phase Choreography ---

    // Phase 1: "Fly in Freedom" (10%-45% of scroll)
    const p1TitleOpacity = useTransform(scrollYProgress, [0.08, 0.14, 0.38, 0.45], [0, 1, 1, 0]);
    const p1TitleScale = useTransform(scrollYProgress, [0.08, 0.20], [0.92, 1]);
    const p1SubOpacity = useTransform(scrollYProgress, [0.14, 0.20, 0.35, 0.42], [0, 1, 1, 0]);
    const p1SubY = useTransform(scrollYProgress, [0.14, 0.20], [20, 0]);
    const p1CardOpacity = useTransform(scrollYProgress, [0.18, 0.24, 0.38, 0.44], [0, 1, 1, 0]);
    const p1CardY = useTransform(scrollYProgress, [0.18, 0.24], [30, 0]);

    // Phase 2: Specs (55%-95% of scroll)
    const p2HeaderOpacity = useTransform(scrollYProgress, [0.52, 0.58, 0.88, 0.95], [0, 1, 1, 0]);
    const p2HeaderY = useTransform(scrollYProgress, [0.52, 0.58], [40, 0]);
    const p2DescOpacity = useTransform(scrollYProgress, [0.56, 0.62, 0.85, 0.92], [0, 1, 1, 0]);
    const p2DescY = useTransform(scrollYProgress, [0.56, 0.62], [30, 0]);
    const p2SpecsOpacity = useTransform(scrollYProgress, [0.60, 0.66, 0.88, 0.94], [0, 1, 1, 0]);
    const p2SpecsY = useTransform(scrollYProgress, [0.60, 0.66], [20, 0]);
    const p2CtaOpacity = useTransform(scrollYProgress, [0.64, 0.70, 0.90, 0.96], [0, 1, 1, 0]);

    return (
        <div id="plane-morph" ref={containerRef} className="relative h-[400vh] w-full z-20 bg-rich-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-80" 
                />

                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-rich-black/20 pointer-events-none z-[1]" />

                {/* ===== PHASE 1: Fly In Freedom ===== */}

                {/* Big headline - right aligned */}
                <motion.div
                    style={{ opacity: p1TitleOpacity, scale: p1TitleScale }}
                    className="absolute top-1/3 right-6 md:right-12 z-[2] pointer-events-none text-right"
                >
                    <div className="px-4">
                        <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter text-white drop-shadow-2xl">
                            Fly in<br />Freedom
                        </h2>
                    </div>
                </motion.div>

                {/* Subtext - bottom left */}
                <motion.div
                    style={{ opacity: p1SubOpacity, y: p1SubY }}
                    className="absolute bottom-[28%] sm:bottom-[25%] left-6 md:left-12 z-[3] pointer-events-none"
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-white/90 leading-snug">
                        Adventure<br />that moves you
                    </h3>
                </motion.div>

                {/* Description card - bottom right */}
                <motion.div
                    style={{ opacity: p1CardOpacity, y: p1CardY }}
                    className="absolute bottom-6 sm:bottom-8 right-6 md:right-12 left-6 sm:left-auto z-[3] pointer-events-none max-w-sm"
                >
                    <div className="bg-white/5 backdrop-blur-xl p-4 md:p-5 rounded-xl border border-white/10">
                        <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                            <span>Featured</span>
                            <span>Ultra-Light</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed">
                            Experience the thrill of piloting a real, lightweight airplane under expert supervision. Designed for maximum visibility and pure joy.
                        </p>
                    </div>
                </motion.div>


                {/* ===== PHASE 2: Specs ===== */}

                {/* Header - top left */}
                <motion.div
                    style={{ opacity: p2HeaderOpacity, y: p2HeaderY }}
                    className="absolute top-20 sm:top-24 left-6 md:left-12 z-[3] pointer-events-none max-w-[90%]"
                >
                    <p className="text-[10px] sm:text-xs text-white/50 font-medium tracking-[0.3em] uppercase mb-1">Action School</p>
                    <h2 className="text-[11vw] sm:text-[9vw] md:text-[7vw] font-bold tracking-tighter text-white leading-[0.8] drop-shadow-2xl">
                        Ultra-Light
                    </h2>
                </motion.div>

                {/* Description card - top right on desktop, below title on mobile */}
                <motion.div
                    style={{ opacity: p2DescOpacity, y: p2DescY }}
                    className="absolute top-[40%] sm:top-24 right-6 md:right-12 left-6 sm:left-auto z-[3] pointer-events-none max-w-[calc(100%-3rem)] sm:max-w-xs md:max-w-sm"
                >
                    <div className="bg-white/5 backdrop-blur-xl p-4 md:p-5 rounded-xl border border-white/10">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white leading-none mb-3">
                            Master the Skies
                        </h3>
                        <div className="w-10 h-px bg-white/20 mb-3" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1.5">Direct Access to Open Skies</p>
                        <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed">
                            Fast, agile, and incredibly safe. Whether you are an aspiring pilot or an adventure enthusiast, our fleet is ready.
                        </p>
                    </div>
                </motion.div>

                {/* Specs grid - bottom left */}
                <motion.div
                    style={{ opacity: p2SpecsOpacity, y: p2SpecsY }}
                    className="absolute bottom-20 sm:bottom-16 md:bottom-12 left-6 md:left-12 right-6 sm:right-auto z-[3] pointer-events-none"
                >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-5 bg-white/5 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-white/10 max-w-md">
                        <div>
                            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-0.5">Experience</p>
                            <p className="text-xs sm:text-base font-bold text-white">EXPERT LED</p>
                        </div>
                        <div>
                            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-0.5">Views</p>
                            <p className="text-xs sm:text-base font-bold text-white">360° PANORAMIC</p>
                        </div>
                        <div>
                            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-0.5">Requirements</p>
                            <p className="text-xs sm:text-base font-bold text-white">NO EXPERIENCE</p>
                        </div>
                        <div>
                            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-0.5">Safety</p>
                            <p className="text-xs sm:text-base font-bold text-white">100% SECURE</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA - bottom right */}
                <motion.div
                    style={{ opacity: p2CtaOpacity }}
                    className="absolute bottom-6 sm:bottom-8 right-6 md:right-12 z-[4] pointer-events-auto"
                >
                    <a href="#contact" className="inline-block px-6 sm:px-8 py-3 rounded-full bg-white text-rich-black font-bold text-[11px] sm:text-xs tracking-wide shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                        Join the Movement
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
