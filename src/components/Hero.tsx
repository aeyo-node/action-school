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
        stiffness: 300,
        damping: 35,
        restDelta: 0.0001
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

    // Content is fully visible at start (scroll 0) and fades out near the end of Hero (scroll 0.15-0.22)
    const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.15], [0, -20]);

    // Scroll indicator
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.10], [1, 0]);

    return (
        <div id="home" ref={containerRef} className="relative h-[300vh] w-full z-0 bg-brand-charcoal">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas Background */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Subtle vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-l from-brand-charcoal/50 via-transparent to-transparent pointer-events-none z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent pointer-events-none z-[1]" />

                {/* Top Slogans (Exactly like Jesko Jets: Left and Right headers) */}
                <div className="absolute top-24 left-6 md:left-12 right-6 md:right-12 z-[3] flex justify-between items-start pointer-events-none">
                    <motion.div style={{ opacity: contentOpacity }} className="max-w-[45%]">
                        <h2 className="text-xs sm:text-sm md:text-base font-display font-bold uppercase tracking-[0.25em] text-white/95 drop-shadow-lg">
                            We are adventure
                        </h2>
                    </motion.div>
                    <motion.div style={{ opacity: contentOpacity }} className="max-w-[45%] text-right">
                        <h2 className="text-xs sm:text-sm md:text-base font-display font-bold uppercase tracking-[0.25em] text-white/95 drop-shadow-lg">
                            We are distinction
                        </h2>
                    </motion.div>
                </div>

                {/* Bottom Slogans, Description, and Buttons */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute bottom-10 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-[3] pointer-events-auto flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    {/* Left: Tagline + Description Card */}
                    <div className="flex flex-col items-start space-y-3 sm:space-y-4 max-w-[95%] sm:max-w-md bg-brand-charcoal/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl w-full md:w-auto">
                        <h2 className="text-xs sm:text-sm md:text-base font-display font-bold uppercase tracking-[0.12em] text-brand-cream drop-shadow-2xl leading-snug">
                            Experiencing the Real &ldquo;High&rdquo; – Introducing Sport Flying to Kerala.
                        </h2>
                        <div className="w-12 h-px bg-white/20" />
                        <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-light drop-shadow-md">
                            From Paramotors to Ultra-Light Aircraft, Action School is bringing world-class low-speed aviation to the youth of Kerala, building a future of discipline, focus, and adventure.
                        </p>
                    </div>

                    {/* Right: Buttons + Scroll indicator */}
                    <div className="flex flex-col items-end space-y-4 w-full md:w-auto">
                        {/* Buttons side-by-side */}
                        <div className="flex flex-row gap-3 justify-end w-full sm:w-auto">
                            <a href="#activities" className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-brand-charcoal font-bold text-[10px] sm:text-xs tracking-widest uppercase hover:scale-105 transition-transform shadow-lg text-center">
                                Explore
                            </a>
                            <a href="#contact" className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform text-center">
                                Contact
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll indicator - bottom center, visible on all viewports */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] pointer-events-none flex flex-col items-center gap-2"
                >
                    <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Scroll</span>
                </motion.div>

            </div>
        </div>
    );
}
