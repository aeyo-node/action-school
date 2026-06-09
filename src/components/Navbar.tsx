"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 text-off-white mix-blend-difference pointer-events-auto">
            {/* Logo */}
            <div className="text-xl font-bold tracking-tight uppercase">
                <Link href="/">Action School</Link>
            </div>

            {/* Center Links */}
            <div className="hidden lg:flex gap-6 text-xs md:text-sm font-medium tracking-wide">
                <a href="#home" className="hover:text-aviation-blue transition-colors uppercase">Home</a>
                <a href="#about" className="hover:text-aviation-blue transition-colors uppercase">About Us</a>
                <a href="#activities" className="hover:text-aviation-blue transition-colors uppercase">Activities</a>
                <a href="#future" className="hover:text-aviation-blue transition-colors uppercase">The Future</a>
                <a href="#contact" className="hover:text-aviation-blue transition-colors uppercase">Contact Us</a>
            </div>

            {/* Right CTA */}
            <div className="flex text-xs md:text-sm font-medium tracking-wide">
                <a href="#contact" className="px-6 py-2 rounded-full bg-aviation-blue text-white font-bold tracking-wide transition-transform hover:scale-105 shadow-md shadow-aviation-blue/20">
                    Fly With Us
                </a>
            </div>
        </nav>
    );
}
