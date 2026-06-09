"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-auto">
            <div className="flex items-center justify-between px-6 py-5 md:py-6 md:px-12 text-off-white">
                {/* Logo */}
                <div className="text-lg md:text-xl font-bold tracking-tight uppercase">
                    <Link href="/">Action School</Link>
                </div>

                {/* Center Links - Desktop */}
                <div className="hidden lg:flex gap-6 text-xs md:text-sm font-medium tracking-wide">
                    <a href="#home" className="hover:text-aviation-blue transition-colors uppercase">Home</a>
                    <a href="#about" className="hover:text-aviation-blue transition-colors uppercase">About Us</a>
                    <a href="#activities" className="hover:text-aviation-blue transition-colors uppercase">Activities</a>
                    <a href="#future" className="hover:text-aviation-blue transition-colors uppercase">The Future</a>
                    <a href="#contact" className="hover:text-aviation-blue transition-colors uppercase">Contact Us</a>
                </div>

                {/* Right: CTA + Hamburger */}
                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden sm:block px-5 py-2 rounded-full bg-aviation-blue text-white font-bold text-xs tracking-wide transition-transform hover:scale-105 shadow-md shadow-aviation-blue/20">
                        Fly With Us
                    </a>
                    {/* Hamburger - Mobile/Tablet */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col items-center gap-6 py-8 bg-rich-black/90 backdrop-blur-xl border-t border-white/10 text-white">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-sm font-medium tracking-widest uppercase hover:text-aviation-blue transition-colors">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-medium tracking-widest uppercase hover:text-aviation-blue transition-colors">About Us</a>
                    <a href="#activities" onClick={() => setIsOpen(false)} className="text-sm font-medium tracking-widest uppercase hover:text-aviation-blue transition-colors">Activities</a>
                    <a href="#future" onClick={() => setIsOpen(false)} className="text-sm font-medium tracking-widest uppercase hover:text-aviation-blue transition-colors">The Future</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium tracking-widest uppercase hover:text-aviation-blue transition-colors">Contact Us</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 px-8 py-3 rounded-full bg-aviation-blue text-white font-bold text-sm tracking-wide shadow-lg">
                        Fly With Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
