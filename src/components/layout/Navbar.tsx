"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Lightbulb, FileText, Send, Newspaper, Menu, X, ChevronRight } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Blog', url: '/blog', icon: FileText },
    { name: 'Press', url: '/press', icon: Newspaper },
    { name: 'Manifesto', url: '/manifesto', icon: Lightbulb },
    { name: 'Contact', url: '/contact', icon: Send }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Fixed Header Bar (Logo and Mobile Toggle) */}
            <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 pb-4 flex items-center justify-between w-full max-w-7xl mx-auto pointer-events-none md:pb-0">
                <Link href="/" className="group flex items-center pointer-events-auto">
                    <div className="relative h-10 md:h-12 w-auto min-w-[80px]">
                        <Image
                            src="/logo.png"
                            alt="Dinesh Koyyalamudi"
                            width={300}
                            height={90}
                            className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-105"
                            priority
                        />
                    </div>
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden pointer-events-auto text-white hover:text-brand-primary transition-colors p-2 bg-brand-dark/50 backdrop-blur-md rounded-full border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Responsive Tubelight Nav */}
            <div className="hidden md:block">
                <NavBar items={navItems} className="pointer-events-auto" />
            </div>

            {/* Full-screen Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-0 bg-brand-dark z-40 md:hidden overflow-hidden flex flex-col justify-center px-6"
                    >
                        <div className="flex flex-col space-y-8 py-10 mt-16">
                            {navItems.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.url}
                                        className={cn(
                                            "text-4xl font-display flex items-center justify-between group",
                                            pathname === link.url ? "text-brand-primary" : "text-white/70"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <link.icon size={32} className={pathname === link.url ? "text-brand-primary" : "text-white/40"} />
                                            <span>{link.name}</span>
                                        </div>
                                        <ChevronRight size={28} className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-8"
                            >
                                <Link href="/contact" className="btn-premium block py-5 text-center text-lg uppercase tracking-widest font-bold">
                                    Let's Talk
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
