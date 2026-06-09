"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div id="contact" ref={containerRef} className="relative min-h-screen w-full z-30 overflow-hidden bg-rich-black text-white">
            {/* Background Globe Video (Dark) */}
            <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale"
                >
                    <source src="/action-school/globe.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Huge Background Text - hidden on mobile, too large */}
            <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
                <h1 className="text-[15vw] font-bold tracking-tighter text-aviation-navy opacity-30 translate-y-[-10%] whitespace-nowrap text-center w-full">Ready to Touch the Sky?</h1>
            </div>

            {/* Content */}
            <motion.div
                style={{ y: yContent }}
                className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 py-20"
            >
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12 md:gap-8">

                    {/* Left */}
                    <div className="max-w-md space-y-6 text-center md:text-left z-20">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-md">
                            Ready to <span className="text-aviation-blue">Touch the Sky?</span>
                        </h2>
                        <p className="text-metallic-gray text-sm md:text-lg">Join Action School and chase dreams, not distractions. Discover Kerala from a completely new perspective.</p>
                    </div>

                    {/* Center: CTA */}
                    <div className="flex flex-col items-center z-20">
                        <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
                            <a href="mailto:info@actionschool.in" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-aviation-blue text-white font-bold tracking-wide transition-transform hover:scale-105 shadow-lg shadow-aviation-blue/30">
                                Fly With Us
                            </a>
                            <a href="mailto:info@actionschool.in" className="hidden sm:flex w-12 h-12 rounded-full bg-white items-center justify-center text-aviation-blue text-xl hover:scale-110 transition-transform shadow-lg shadow-white/10">
                                ✈️
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="text-center md:text-right space-y-6 z-20">
                        <div>
                            <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-3 text-metallic-gray">Contact Us</p>
                            <p className="text-lg font-medium mb-1">Mr. Arjun</p>
                            <p className="text-sm font-light text-off-white/80 mb-3">Thiruvananthapuram, Kerala</p>
                            <a href="mailto:info@actionschool.in" className="text-lg font-medium text-aviation-blue hover:text-white transition-colors">info@actionschool.in</a>
                        </div>
                        
                        <div className="flex gap-4 justify-center md:justify-end text-xs font-bold uppercase tracking-widest text-metallic-gray">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white transition-colors">Facebook</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white transition-colors">YouTube</a>
                        </div>
                        <div className="w-12 h-px bg-white/30 mx-auto md:ml-auto md:mr-0" />
                    </div>

                </div>

            </motion.div>
        </div>
    );
}
