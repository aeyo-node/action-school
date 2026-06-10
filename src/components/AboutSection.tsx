"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-white text-rich-black relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                
                {/* Left side: Heading */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 space-y-4 md:space-y-6"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 md:w-12 h-px bg-aviation-blue" />
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-aviation-blue">Our Mission</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        Flying High,<br />Staying Grounded.
                    </h2>
                </motion.div>

                {/* Right side: Body */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2"
                >
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-dim font-medium">
                        Based in Thiruvananthapuram, Action School is more than just a flying club—it is a mission to transform the energy of Kerala's youth. 
                        <br /><br />
                        Today, our youngsters often fall prey to negative influences and drugs simply due to a lack of thrilling, constructive, and futuristic opportunities within the state. We want to change that. By bringing aviation to their doorstep, we provide an adrenaline-pumping, disciplined, and rewarding alternative that opens up global horizons.
                    </p>
                </motion.div>
                
            </div>
        </section>
    );
}
