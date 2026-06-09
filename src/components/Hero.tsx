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
    // Text fades OUT as we scroll DOWN (entering the window)
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
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                >
                    {/* Middle Label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
                        <p className="text-white/80 text-base md:text-lg font-light tracking-[0.2em] uppercase mix-blend-overlay drop-shadow-md">Action School</p>
                    </div>

                    {/* Left Side Content */}
                    <div className="absolute top-[20%] md:top-[25%] left-6 md:left-12 space-y-2">
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[0.9] drop-shadow-lg max-w-3xl">
                            Experiencing the <br /> Real &quot;High&quot;
                        </h1>
                    </div>

                    <div className="absolute bottom-24 md:bottom-12 left-6 md:left-12 max-w-xs sm:max-w-md space-y-4 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight drop-shadow-md">
                            Introducing <br className="hidden sm:block" /> Sport Flying <br /> to Kerala.
                        </h2>
                        <div className="w-12 h-px bg-white/50" />
                        <p className="text-xs sm:text-sm text-off-white/90 leading-relaxed font-medium drop-shadow-md bg-rich-black/40 p-4 rounded-xl backdrop-blur-sm">
                            From Paramotors to Ultra-Light Aircraft, Action School is bringing world-class sport flying and low-speed aviation to the youth of Kerala. It&apos;s time to chase dreams, not distractions.
                        </p>
                    </div>

                    {/* Right Side Content */}
                    <div className="hidden md:block absolute top-[40%] right-6 md:right-12 text-right">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[0.9] drop-shadow-lg">
                            Action <br /> School
                        </h1>
                    </div>

                    {/* Bottom Right Scroll Indicator */}
                    <div className="hidden sm:flex absolute bottom-12 right-6 md:right-12 items-center gap-4 text-white drop-shadow-md">
                        <div className="flex flex-col items-center gap-1 animate-bounce">
                            <span className="text-[10px] transform rotate-90">»</span>
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-off-white/80">To Start The Journey</span>
                        </div>
                    </div>

                    {/* Bottom Center CTA */}
                    <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-3 md:gap-4 pointer-events-auto w-[90%] sm:w-auto">
                        <a href="#activities" className="w-full sm:w-auto text-center px-6 md:px-8 py-3 rounded-full bg-aviation-blue text-white font-bold text-xs md:text-sm tracking-wide transition-transform hover:scale-105 shadow-lg">
                            Explore Activities
                        </a>
                        <a href="#contact" className="w-full sm:w-auto text-center px-6 md:px-8 py-3 rounded-full bg-white text-aviation-blue font-bold text-xs md:text-sm tracking-wide transition-transform hover:scale-105 shadow-lg">
                            Join the Movement
                        </a>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
