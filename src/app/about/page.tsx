"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import StoryTimeline from "@/components/sections/StoryTimeline";
import LeadershipTeam from "@/components/sections/LeadershipTeam";

export default function AboutPage() {
    return (
        <div className="pt-20 lg:pt-12 pb-24">
            <div className="px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="max-w-3xl mb-24">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-brand-primary font-medium tracking-[0.3em] text-xs uppercase block mb-6 font-mono"
                        >
                            Behind the Vision
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-display leading-[1.1] tracking-tight"
                        >
                            A Journey of Purpose, Scale, and <span className="text-gradient italic">Impact.</span>
                        </motion.h1>
                    </div>

                    {/* content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[4/5] glass-card overflow-hidden group shadow-2xl shadow-brand-primary/10"
                        >
                            <NextImage
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                                alt="Dinesh Koyyalamudi"
                                fill
                                className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out"
                                unoptimized
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />
                            <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-700" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-10 text-text-secondary text-lg md:text-xl leading-relaxed"
                        >
                            <h3 className="text-3xl md:text-4xl font-display text-white mb-6 leading-tight">Building Paradigms, <span className="text-brand-primary">Not Just Products.</span></h3>
                            <p>
                                Dinesh Koyyalamudi is a visionary entrepreneur and thinker dedicated to
                                restructuring how we approach innovation and leadership in the 21st century.
                                As the founder of FourSix46, he has spearheaded numerous initiatives aimed
                                at solving complex global challenges through technology and strategic design.
                            </p>
                            <p>
                                His journey began with a simple observation: most systems are designed for
                                maintenance, not transformation. Dinesh pivotally shifted his focus toward
                                building <span className="text-white italic">"resilient systems"</span>—structures that don't just survive change but
                                thrive because of it.
                            </p>

                            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
                                <div>
                                    <span className="text-4xl font-display text-brand-primary block mb-2 font-bold tracking-tighter">12+</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono font-bold">Years of Venture Building</span>
                                </div>
                                <div>
                                    <span className="text-4xl font-display text-brand-primary block mb-2 font-bold tracking-tighter">05</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono font-bold">Global Operations</span>
                                </div>
                            </div>

                            <div className="pt-10">
                                <h4 className="text-white font-display text-xl mb-8 uppercase tracking-widest text-[10px] font-bold opacity-40">Frequency Values</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {["Radical Transparency", "Systems Thinking", "Purpose-Driven Scale", "Infinite Curiosity"].map(item => (
                                        <li key={item} className="flex items-center space-x-4 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(255,90,0,0.5)] group-hover:scale-125 transition-transform" />
                                            <span className="group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* New Sections */}
            <StoryTimeline />
            <LeadershipTeam />
        </div>
    );
}
