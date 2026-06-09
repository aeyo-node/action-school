"use client";

import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCanvasSequence } from "@/hooks/useCanvasSequence";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [progress, setProgress] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    const { canvasRef, renderFrame, isLoaded } = useCanvasSequence({
        folderPath: "/action-school/hero-sequence",
        frameCount: 120, // Confirm exact count
    });

    useEffect(() => {
        renderFrame(progress);
    }, [progress, isLoaded, renderFrame]);

    // Text Animations
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.15], [0, -20]);

    return (
        <div id="home" ref={containerRef} className="relative h-[300vh] w-full z-0 bg-rich-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas Background */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay Content Container */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none flex flex-col justify-between p-6 pb-20 pt-24 md:p-12 md:pb-20 md:pt-28"
                >
                    {/* Top: Main Headline */}
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-[0.9] drop-shadow-lg max-w-3xl">
                            Experiencing the <br /> Real "High"
                        </h1>
                    </div>

                    {/* Bottom: Sub content */}
                    <div className="space-y-4">
                        {/* "Action School" center label */}
                        <p className="text-white/60 text-xs md:text-sm font-light tracking-[0.2em] uppercase drop-shadow-md">Action School</p>

                        <h2 className="text-xl sm:text-2xl md:text-4xl font-normal tracking-tight text-white leading-tight drop-shadow-md">
                            Introducing Sport Flying <br /> to Kerala.
                        </h2>
                        <div className="w-12 h-px bg-white/50" />
                        <p className="text-xs sm:text-sm text-off-white/90 leading-relaxed font-medium drop-shadow-md bg-rich-black/40 p-3 md:p-4 rounded-xl backdrop-blur-sm max-w-md">
                            From Paramotors to Ultra-Light Aircraft, Action School is bringing world-class sport flying and low-speed aviation to the youth of Kerala. It's time to chase dreams, not distractions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-3 pointer-events-auto pt-2">
                            <a href="#activities" className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-aviation-blue text-white font-bold text-xs md:text-sm tracking-wide transition-transform hover:scale-105 shadow-lg">
                                Explore Activities
                            </a>
                            <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-white text-aviation-blue font-bold text-xs md:text-sm tracking-wide transition-transform hover:scale-105 shadow-lg">
                                Join the Movement
                            </a>
                        </div>
                    </div>

                    {/* Right Side Content - Desktop only */}
                    <div className="hidden md:block absolute top-[40%] right-12 text-right">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[0.9] drop-shadow-lg">
                            Action <br /> School
                        </h1>
                    </div>

                    {/* Scroll Indicator - Desktop only */}
                    <div className="hidden md:flex absolute bottom-12 right-12 items-center gap-4 text-white drop-shadow-md">
                        <div className="flex flex-col items-center gap-1 animate-bounce">
                            <span className="text-[10px] transform rotate-90">»</span>
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-off-white/80">To Start The Journey</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
