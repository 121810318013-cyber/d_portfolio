"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PressHeader() {
    return (
        <div className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-end justify-start text-left overflow-hidden border-b border-white/5 -mt-20 pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/press_hero.png"
                    alt="Dinesh Press Mentions & Media"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark Overlays for Text Readability - stronger on the left/bottom */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
            </div>

            {/* Constrain inner content width to match the rest of the page */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24 mt-8 md:mt-12">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm block mb-4 font-mono"
                    >
                        Validation & Visibility
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.0] font-bold mb-6 tracking-tight text-white"
                    >
                        Media & <br /><span className="italic font-light">Mentions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-200 text-lg md:text-xl font-display max-w-xl leading-relaxed"
                    >
                        Insights and features from leading publications on venture building,
                        leadership, and the future of technology.
                    </motion.p>
                </div>
            </div>

            {/* Minimal Bottom Glow (Optional, keeping it subtle) */}
            <div className="absolute bottom-0 left-0 w-1/2 h-[100px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,90,0,0.2)_0%,transparent_70%)] pointer-events-none z-20 blur-2xl" />
        </div>
    );
}
