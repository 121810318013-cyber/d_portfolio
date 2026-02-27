"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    User,
    PenTool,
    Mic2,
    ScrollText,
    Mail,
    Settings,
    ChevronRight,
    Menu,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const sidebarLinks = [
    { name: "Dashboard", href: "/", icon: <LayoutDashboard size={20} /> },
    { name: "My Story", href: "/about", icon: <User size={20} /> },
    { name: "The Journal", href: "/blog", icon: <PenTool size={20} /> },
    { name: "Press Desk", href: "/press", icon: <Mic2 size={20} /> },
    { name: "Manifesto", href: "/manifesto", icon: <ScrollText size={20} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-brand-dark/50 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div className="relative h-12 w-auto">
                        <Image
                            src="/logo.png"
                            alt="Dinesh Koyyalamudi"
                            width={160}
                            height={40}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
                    {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className={cn(
                "hidden lg:flex fixed left-0 top-0 bottom-0 z-50 bg-brand-dark border-r border-white/5 flex-col py-10 transition-all duration-500",
                isCollapsed ? "w-20" : "w-64"
            )}>
                {/* Logo Section */}
                <div className="px-6 mb-16 flex items-center justify-center">
                    <Link href="/" className="flex items-center">
                        <div className={cn("relative transition-all duration-500", isCollapsed ? "h-10 w-10" : "h-16 w-auto")}>
                            <Image
                                src="/logo.png"
                                alt="Dinesh Koyyalamudi"
                                width={200}
                                height={60}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "flex items-center space-x-4 px-4 py-3 rounded-lg transition-all group relative overflow-hidden",
                                    isActive
                                        ? "text-brand-primary"
                                        : "text-text-muted hover:text-text-primary"
                                )}
                            >
                                <div className={cn(
                                    "transition-colors relative z-10",
                                    isActive ? "text-brand-primary" : "text-text-muted group-hover:text-text-primary"
                                )}>
                                    {link.icon}
                                </div>
                                {!isCollapsed && (
                                    <span className="font-semibold text-sm tracking-wide relative z-10">
                                        {link.name}
                                        {/* Underline Animation */}
                                        <motion.div
                                            initial={false}
                                            animate={{ width: isActive ? "100%" : "0%" }}
                                            className="absolute -bottom-1 left-0 h-[2px] bg-brand-primary/40 rounded-full"
                                        />
                                    </span>
                                )}

                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active-pill"
                                        className="absolute inset-0 bg-brand-primary/5 rounded-lg z-0"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="px-4 mt-auto">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-text-muted hover:text-text-primary hover:bg-white/5 transition-all"
                    >
                        <ChevronRight className={cn("transition-transform duration-500", isCollapsed ? "" : "rotate-180")} size={18} />
                        {!isCollapsed && <span className="text-sm font-medium">Minimize View</span>}
                    </button>
                </div>
            </aside>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="lg:hidden fixed inset-0 z-[55] bg-brand-dark/90 p-10 pt-32"
                    >
                        <nav className="space-y-6">
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={cn(
                                        "flex items-center space-x-6 p-4 rounded-2xl text-2xl font-display transition-all",
                                        pathname === link.href
                                            ? "text-brand-primary translate-x-3"
                                            : "text-text-muted hover:text-text-primary"
                                    )}
                                >
                                    <span className={cn(pathname === link.href ? "text-brand-primary" : "text-text-muted")}>
                                        {link.icon}
                                    </span>
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

