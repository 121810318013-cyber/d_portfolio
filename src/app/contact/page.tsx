"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Mic2, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactTypes = [
    {
        id: "general",
        title: "General Inquiry",
        icon: <MessageSquare size={20} />,
        description: "For general questions, collaborations, or just to say hello.",
    },
    {
        id: "speaking",
        title: "Speaking Request",
        icon: <Mic2 size={20} />,
        description: "For keynotes, panels, and workshop invitations.",
    },
    {
        id: "media",
        title: "Media Inquiry",
        icon: <Mail size={20} />,
        description: "For interviews, press quotes, and podcast features.",
    },
];

import { contactAction } from "@/app/actions/contact";

export default function ContactPage() {
    const [selectedType, setSelectedType] = useState("general");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setLocalFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("email", formData.email);
        fd.append("message", formData.message);
        fd.append("type", selectedType);

        try {
            const result = await contactAction(fd);
            if (result.success) {
                setStatus("success");
                setLocalFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="pt-20 lg:pt-12 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Column: Info */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-brand-primary font-medium tracking-widest text-sm uppercase block mb-6"
                        >
                            Get in Touch
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display leading-tight mb-8"
                        >
                            Let’s Start a <span className="text-gradient italic">Conversation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-text-secondary text-xl mb-12 max-w-lg"
                        >
                            Whether you have a visionary project in mind or just want to
                            exchange ideas, I’m always open to connecting with fellow thinkers.
                        </motion.p>

                        <div className="space-y-6">
                            {contactTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={cn(
                                        "w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start space-x-4",
                                        selectedType === type.id
                                            ? "bg-brand-primary/10 border-brand-primary/50 shadow-lg shadow-brand-primary/5"
                                            : "bg-brand-muted/50 border-white/5 hover:border-white/20"
                                    )}
                                >
                                    <div className={cn(
                                        "p-3 rounded-xl transition-colors",
                                        selectedType === type.id ? "bg-brand-primary text-white" : "bg-white/5 text-white/40"
                                    )}>
                                        {type.icon}
                                    </div>
                                    <div>
                                        <h3 className={cn(
                                            "font-display text-xl mb-1",
                                            selectedType === type.id ? "text-brand-primary" : "text-white"
                                        )}>
                                            {type.title}
                                        </h3>
                                        <p className="text-sm text-text-muted leading-relaxed">{type.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 md:p-12 relative overflow-hidden"
                    >
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <CheckCircle2 size={64} className="text-brand-primary mb-6" />
                                <h2 className="text-3xl font-display mb-4">Message Sent</h2>
                                <p className="text-text-secondary max-w-sm mx-auto">
                                    Thank you for reaching out. I’ve received your inquiry and will
                                    get back to you within 48 hours.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-10 text-brand-primary font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-widest text-text-muted ml-1">Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setLocalFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-widest text-text-muted ml-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setLocalFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-text-muted ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setLocalFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full btn-premium py-5 text-lg group"
                                >
                                    {status === "loading" ? "Sending..." : (
                                        <>
                                            Send Message
                                            <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                {status === "error" && (
                                    <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        )}

                        {/* Decorative element */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </div>
        </div>

    );
}

