"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [-30, 0]);

    return (
        <div id="contact" ref={containerRef} className="relative min-h-[90vh] md:min-h-[80vh] w-full z-30 overflow-hidden dark-bg text-brand-cream font-sans">
            {/* Background Globe Video (Dark and Blend) */}
            <div className="absolute inset-0 w-full h-full opacity-15 mix-blend-screen pointer-events-none">
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

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-transparent to-black/90 pointer-events-none" />

            {/* Main Footer Container */}
            <motion.div
                style={{ y: yContent }}
                className="relative z-10 flex flex-col justify-between min-h-[90vh] md:min-h-[80vh] max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start w-full">
                    
                    {/* Left Side: Headline & Mission Statement (Span 7) */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full space-y-8 md:space-y-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-px bg-brand-cream/30" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/60">Ready to fly</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-tight max-w-xl">
                                Fly anywhere with total freedom and joy.
                            </h2>
                        </div>
                    </div>

                    {/* Right Side: Contacts (Span 5) */}
                    <div className="md:col-span-5 flex flex-col space-y-8 md:space-y-12 md:pl-8">
                        {/* Title: For Inquiries */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="w-full h-px bg-brand-cream/10 mr-4" />
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-cream/40 whitespace-nowrap">For Inquiries</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40">Direct Contact</p>
                                    <p className="text-xl font-display font-medium text-brand-cream">Mr. Arjun</p>
                                    <p className="text-sm font-light text-brand-cream/70">Thiruvananthapuram, Kerala</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40">Email Us</p>
                                    <a 
                                        href="mailto:info@actionschool.in" 
                                        className="group relative overflow-hidden inline-block h-6 text-xl font-display font-medium text-brand-cream hover:text-brand-cream/80 transition-colors"
                                    >
                                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">info@actionschool.in</span>
                                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 underline decoration-brand-cream/30">info@actionschool.in</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="w-full h-px bg-brand-cream/10 mr-4" />
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-cream/40 whitespace-nowrap">Follow Us</h3>
                            </div>
                            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-brand-cream/60">
                                <a href="#" className="hover:text-brand-cream transition-colors">Instagram</a>
                                <a href="#" className="hover:text-brand-cream transition-colors">Facebook</a>
                                <a href="#" className="hover:text-brand-cream transition-colors">YouTube</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright and Credits */}
                <div className="w-full mt-16 md:mt-24 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                        <span>© {new Date().getFullYear()} Action School. All rights reserved.</span>
                        <a href="#" className="hover:text-brand-cream transition-colors">Privacy Policy</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Made for Kerala</span>
                        <span className="text-brand-cream/20">|</span>
                        <span>Action School Aviation</span>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

