"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ManifestoBlockProps {
    type: "text" | "principle" | "quote" | "stats";
    content: any;
    index: number;
}

export default function ManifestoContent({ blocks }: { blocks: any[] }) {
    return (
        <div className="space-y-32 md:space-y-48">
            {blocks.map((block, index) => (
                <ManifestoBlock key={index} block={block} index={index} />
            ))}
        </div>
    );
}

function ManifestoBlock({ block, index }: { block: any; index: number }) {
    switch (block.type) {
        case "text":
            return (
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-3xl mx-auto px-6 relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-10 leading-tight">
                            {block.heading}
                        </h2>
                        <div className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                            {block.body.split('\n\n').map((para: string, i: number) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            );
        case "quote":
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto px-6 py-24 relative"
                >
                    <Quote className="absolute top-0 left-0 text-brand-primary/10 w-32 h-32 -translate-x-12 -translate-y-12" />
                    <blockquote className="text-4xl md:text-6xl font-display text-white text-center leading-[1.1] tracking-tighter">
                        <span className="text-gradient italic">"{block.text}"</span>
                    </blockquote>
                    {block.author && (
                        <div className="mt-12 text-center">
                            <div className="w-12 h-[1px] bg-brand-primary/50 mx-auto mb-6" />
                            <cite className="text-brand-primary font-mono text-[10px] uppercase tracking-[0.5em] not-italic">
                                {block.author}
                            </cite>
                        </div>
                    )}
                </motion.div>
            );
        case "principle":
            return (
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {block.principles.map((principle: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-12 border-l-2 border-brand-primary hover:bg-white/5 transition-all duration-500 group"
                            >
                                <span className="text-brand-primary font-mono text-[10px] uppercase tracking-[0.3em] block mb-6">
                                    Principle 0{i + 1}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display text-white mb-6 group-hover:text-gradient transition-all duration-700">
                                    {principle.title}
                                </h3>
                                <p className="text-text-secondary text-lg leading-relaxed">
                                    {principle.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case "vision_grid":
            return (
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-6">{block.heading}</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{block.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {block.items.map((item: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 group relative overflow-hidden flex flex-col items-center text-center hover:border-brand-primary/30 transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[40px] group-hover:bg-brand-primary/20 transition-all duration-500 -z-10" />
                                <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-2xl font-bold font-mono mb-6 border border-brand-primary/20 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-display text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        default:
            return null;
    }
}
