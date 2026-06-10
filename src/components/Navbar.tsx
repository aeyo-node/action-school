"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-transparent border-none">
            <div className="flex items-center justify-between px-6 py-4 md:py-5 md:px-12 max-w-7xl mx-auto w-full">
                {/* Logo - Wide display style */}
                <div className="text-lg md:text-xl font-bold tracking-widest uppercase text-white mix-blend-difference font-display">
                    <Link href="/">Action School</Link>
                </div>

                {/* Center Links - Desktop (Jesko style double-text hover, mix-blend-difference for contrast) */}
                <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white mix-blend-difference">
                    <a href="#home" className="group relative overflow-hidden h-4 block">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">Home</span>
                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">Home</span>
                    </a>
                    <a href="#about" className="group relative overflow-hidden h-4 block">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">About</span>
                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">About</span>
                    </a>
                    <a href="#activities" className="group relative overflow-hidden h-4 block">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">Activities</span>
                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">Activities</span>
                    </a>
                    <a href="#advantages" className="group relative overflow-hidden h-4 block">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">Advantages</span>
                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">Advantages</span>
                    </a>
                    <a href="#future" className="group relative overflow-hidden h-4 block">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">The Future</span>
                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">The Future</span>
                    </a>
                </div>

                {/* Right: Contact info + Hamburger */}
                <div className="flex items-center gap-6">
                    <a href="mailto:info@actionschool.in" className="hidden sm:block group relative overflow-hidden h-4 text-[11px] font-bold tracking-[0.15em] uppercase text-white mix-blend-difference">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">info@actionschool.in</span>
                        <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">info@actionschool.in</span>
                    </a>
                    {/* Hamburger - Mobile/Tablet */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2 text-white mix-blend-difference"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown - Keep opaque background when opened so links are readable */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col items-center gap-6 py-8 bg-brand-cream border-t border-brand-charcoal/10 text-brand-charcoal">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-brand-charcoal/70 transition-colors">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-brand-charcoal/70 transition-colors">About Us</a>
                    <a href="#activities" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-brand-charcoal/70 transition-colors">Activities</a>
                    <a href="#advantages" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-brand-charcoal/70 transition-colors">Advantages</a>
                    <a href="#future" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-brand-charcoal/70 transition-colors">The Future</a>
                    <a href="mailto:info@actionschool.in" onClick={() => setIsOpen(false)} className="mt-2 text-xs font-bold tracking-widest uppercase text-brand-charcoal underline">
                        info@actionschool.in
                    </a>
                </div>
            </div>
        </nav>
    );
}

