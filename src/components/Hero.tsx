"use client";

import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCanvasSequence } from "@/hooks/useCanvasSequence";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
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
        folderPath: "/action-school/hero-sequence",
        frameCount: 147,
    });

    useEffect(() => {
        renderFrame(progress);
    }, [progress, isLoaded, renderFrame]);

    // Right side content fades out as user scrolls
    const contentOpacity = useTransform(scrollYProgress, [0, 0.03, 0.15, 0.22], [0, 1, 1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.03], [30, 0]);

    // Scroll indicator
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.02, 0.10, 0.15], [0, 1, 1, 0]);

    return (
        <div id="home" ref={containerRef} className="relative h-[300vh] w-full z-0 bg-rich-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas Background - CLEAN, no text over the animation */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Subtle vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-l from-rich-black/50 via-transparent to-transparent pointer-events-none z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/40 via-transparent to-transparent pointer-events-none z-[1]" />

                {/* Right side: Brand + Buttons ONLY */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-[3] pointer-events-auto"
                >
                    <div className="flex flex-col items-end space-y-6">
                        {/* Brand name */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-[0.85] text-right drop-shadow-2xl">
                            Action<br />School
                        </h1>

                        {/* Thin divider */}
                        <div className="w-16 h-px bg-white/30" />

                        {/* Tagline */}
                        <p className="text-[10px] sm:text-xs text-white/60 font-medium tracking-[0.3em] uppercase text-right">
                            Sport Flying in Kerala
                        </p>

                        {/* Buttons stacked */}
                        <div className="flex flex-col gap-3 items-end">
                            <a href="#activities" className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-rich-black font-bold text-[11px] sm:text-xs tracking-wide transition-all hover:scale-105 hover:shadow-xl shadow-lg text-center w-full sm:w-auto">
                                Explore Activities
                            </a>
                            <a href="#contact" className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-[11px] sm:text-xs tracking-wide border border-white/20 transition-all hover:bg-white/20 hover:scale-105 text-center w-full sm:w-auto">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll indicator - bottom center, desktop only */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] pointer-events-none hidden md:flex flex-col items-center gap-2"
                >
                    <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Scroll</span>
                </motion.div>

            </div>
        </div>
    );
}
