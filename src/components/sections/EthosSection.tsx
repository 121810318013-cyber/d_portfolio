"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const principles = [
    {
        id: "01",
        label: "PRINCIPLE 01",
        title: "NEO-BRUTALISM",
        description: "Structural clarity and raw honesty in every venture.",
        color: "#E22D2D" // Red accent from image
    },
    {
        id: "02",
        label: "PRINCIPLE 02",
        title: "QUIET LUXURY",
        description: "Sophistication through absolute precision and poise.",
        color: "#E22D2D"
    },
    {
        id: "03",
        label: "PRINCIPLE 03",
        title: "SOVEREIGN SCALE",
        description: "Distributed, secure, and sovereign infrastructure nodes.",
        color: "#00AEFF" // Blue accent from image
    },
    {
        id: "04",
        label: "PRINCIPLE 04",
        title: "GLOBAL SYNERGY",
        description: "Unifying cross-border ventures for maximum impact.",
        color: "#00AEFF"
    }
];

export default function EthosSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const phrase = "We do not just build companies. We engineer ecosystems. FourSix46 is a parent brand dedicated to shaping the future of global logistics, sovereign data, and biophilic tech.";
    const words = phrase.split(" ");

    return (
        <section ref={containerRef} className="relative h-[200vh] md:h-[300vh] bg-brand-dark transition-all duration-300">
            <div className="sticky top-0 h-screen flex items-center px-6 lg:px-24 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-24 items-center">

                    {/* Left Column: Mission & Manifesto */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-12"
                        >
                            <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4 font-mono">
                                OUR PURPOSE
                            </span>
                            <h2 className="text-5xl md:text-7xl font-display text-white leading-none">
                                MISSION
                            </h2>
                        </motion.div>

                        <p className="max-w-2xl text-2xl md:text-4xl lg:text-5xl font-display leading-[1.1] flex flex-wrap text-left">
                            {words.map((word, i) => {
                                const start = i / words.length;
                                const end = start + 1 / words.length;
                                return (
                                    <Word key={i} progress={scrollYProgress} range={[0.1 + (start * 0.4), 0.1 + (end * 0.4)]}>
                                        {word}
                                    </Word>
                                );
                            })}
                        </p>
                    </div>

                    {/* Right Column: Principle Cards */}
                    <div className="grid grid-cols-1 gap-6 pt-12 md:pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            {principles.map((p, idx) => (
                                <PrincipleCard
                                    key={p.id}
                                    principle={p}
                                    index={idx}
                                    scrollProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { GlowingEffect } from "@/components/ui/glowing-effect";

function PrincipleCard({ principle, index, scrollProgress }: { principle: any; index: number; scrollProgress: any }) {
    // staggered appearances based on scroll
    const start = 0.2 + (index * 0.1);
    const end = start + 0.2;
    const opacity = useTransform(scrollProgress, [start, end], [0, 1]);
    const y = useTransform(scrollProgress, [start, end], [40, 0]);

    return (
        <motion.div
            className={`glass-card p-8 border-l-2 relative group overflow-hidden transition-all duration-500 hover:bg-white/5 h-full`}
            style={{
                borderLeftColor: principle.color,
                opacity,
                y
            }}
        >
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />

            <div className="relative z-10 flex flex-col h-full">
                <span
                    className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase block mb-4"
                    style={{ color: principle.color }}
                >
                    {principle.label}
                </span>
                <h4 className="text-xl md:text-2xl font-display text-white mb-3 tracking-tight">
                    {principle.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                    {principle.description}
                </p>
            </div>
        </motion.div>
    );
}

interface WordProps {
    children: string;
    progress: any;
    range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="relative mr-3 mt-3">
            <span className="absolute opacity-15">{children}</span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    );
}
