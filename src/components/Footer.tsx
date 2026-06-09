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
        <div id="contact" ref={containerRef} className="relative h-screen w-full z-30 overflow-hidden bg-rich-black text-white">
            {/* Background Globe Video (Dark) */}
            <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale" // Grayscale for dark mode feel
                >
                    <source src="/action-school/globe.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Huge Background Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
                <h1 className="text-[20vw] font-bold tracking-tighter text-aviation-navy opacity-30 translate-y-[-10%] whitespace-nowrap text-center w-full">Ready to Touch the Sky?</h1>
            </div>

            {/* Content */}
            <motion.div
                style={{ y: yContent }}
                className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12"
            >
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto pt-32 md:pt-32 pb-16">

                    {/* Left */}
                    <div className="max-w-md space-y-6 text-center md:text-left z-20">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-md">
                            Ready to <br className="md:hidden" /><span className="text-aviation-blue">Touch the Sky?</span>
                        </h2>
                        <p className="text-metallic-gray text-base md:text-lg">Join Action School and chase dreams, not distractions. Discover Kerala from a completely new perspective.</p>
                    </div>

                    {/* Center Globe Interaction Area */}
                    <div className="relative w-full md:w-96 flex flex-col items-center justify-center z-20 mt-12 md:mt-0">
                        {/* CTA centered on globe */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto w-[90%] sm:w-auto">
                            <a href="mailto:info@actionschool.in" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-aviation-blue text-white font-bold tracking-wide transition-transform hover:scale-105 shadow-lg shadow-aviation-blue/30">
                                Fly With Us
                            </a>
                            <a href="mailto:info@actionschool.in" className="hidden sm:flex w-12 h-12 rounded-full bg-white items-center justify-center text-aviation-blue text-xl hover:scale-110 transition-transform shadow-lg shadow-white/10">
                                ✈️
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="text-center md:text-right space-y-8 z-20 mt-12 md:mt-0">
                        <div>
                            <p className="text-sm font-bold opacity-70 uppercase tracking-widest mb-4 text-metallic-gray">Contact Us</p>
                            <p className="block text-xl font-medium mb-1">Mr. Arjun</p>
                            <p className="block text-lg font-light text-off-white/80 mb-4">Thiruvananthapuram, Kerala</p>
                            <a href="mailto:info@actionschool.in" className="block text-xl font-medium text-aviation-blue hover:text-white transition-colors mb-8">info@actionschool.in</a>
                            
                            <div className="flex gap-4 justify-center md:justify-end text-sm font-bold uppercase tracking-widest text-metallic-gray">
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <span>|</span>
                                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                                <span>|</span>
                                <a href="#" className="hover:text-white transition-colors">YouTube</a>
                            </div>
                        </div>
                        <div className="w-12 h-px bg-white/30 mx-auto md:ml-auto md:mr-0" />
                    </div>

                </div>

            </motion.div>
        </div>
    );
}
