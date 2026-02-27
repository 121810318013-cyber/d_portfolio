// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Calendar, Users, Globe, Briefcase } from "lucide-react";
// import Link from "next/link";
// import CinematicImage from "@/components/ui/CinematicImage";
// import { SparklesCore } from "@/components/ui/sparkles";
// import { GlowingEffect } from "@/components/ui/glowing-effect";

// export default function HomeHero() {
//     return (
//         <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6 overflow-hidden bg-black">
//             {/* Background Effects */}
//             <div className="absolute inset-0 z-0">
//                 <SparklesCore
//                     id="tsparticleshero"
//                     background="transparent"
//                     minSize={0.6}
//                     maxSize={1.4}
//                     particleDensity={100}
//                     className="w-full h-full opacity-50"
//                     particleColor="#FFFFFF"
//                     speed={1}
//                 />
//             </div>

//             <div className="max-w-7xl mx-auto w-full relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

//                     {/* Left Column: Content */}
//                     <div className="flex flex-col space-y-8 md:space-y-12">
//                         <div className="space-y-6">
//                             {/* Profile Badge/Stats Summary */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="flex items-center space-x-4 mb-4"
//                             >
//                                 <div className="flex -space-x-2">
//                                     {[1, 2, 3].map((i) => (
//                                         <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
//                                             <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div>
//                                     <span className="text-white font-bold text-lg block leading-none">120+</span>
//                                     <span className="text-zinc-500 text-xs uppercase tracking-wider">Total Satisfied Clients</span>
//                                 </div>
//                             </motion.div>

//                             <motion.h1
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.8 }}
//                                 className="text-6xl md:text-7xl lg:text-9xl font-display text-white font-bold leading-[0.9] tracking-tighter"
//                             >
//                                 IT'S ME <br />
//                                 <span className="text-brand-primary/80">Dinesh Koyyalamudi</span>
//                             </motion.h1>

//                             <motion.p
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: 0.8, delay: 0.3 }}
//                                 className="max-w-md text-zinc-400 text-lg md:text-xl leading-relaxed"
//                             >
//                                 I've earned the trust of over 250 clients and 40 brands, all of whom are very satisfied with my service!
//                             </motion.p>
//                         </div>

//                         {/* Stats Row */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.5 }}
//                             className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10"
//                         >
//                             <div>
//                                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">600+</h3>
//                                 <p className="text-zinc-500 text-sm uppercase tracking-wide font-medium">Projects Done</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">50+</h3>
//                                 <p className="text-zinc-500 text-sm uppercase tracking-wide font-medium">Brand Partnerships</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">12+</h3>
//                                 <p className="text-zinc-500 text-sm uppercase tracking-wide font-medium">Years Experience</p>
//                             </div>
//                         </motion.div>
//                     </div>

//                     {/* Right Column: Image & Hover Link */}
//                     <div className="relative flex flex-col items-center">
//                         {/* Right Side Navigation Links (Vertical Like Screenshot) */}
//                         <div className="hidden xl:flex flex-col space-y-6 absolute -right-12 top-20 text-right z-20">
//                             <Link href="#works" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide">Works</Link>
//                             <Link href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide">Services</Link>
//                             <Link href="#contact" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide">Contact</Link>
//                         </div>

//                         {/* Image Container with Glowing Effect */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 100 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, ease: "easeOut" }}
//                             className="relative w-full max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden"
//                         >
//                             <GlowingEffect
//                                 spread={60}
//                                 glow={true}
//                                 disabled={false}
//                                 proximity={120}
//                                 inactiveZone={0.05}
//                                 borderWidth={4}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
//                             <CinematicImage
//                                 src="/images/dinesh_hero.png"
//                                 alt="Leo Adam"
//                                 animationType="hero"
//                                 priority
//                                 wrapperClassName="h-full scale-105"
//                                 className="object-cover h-full w-full"
//                             />
//                         </motion.div>

//                         {/* Schedule Call Button Floating Over Image */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.8 }}
//                             className="absolute bottom-10 right-0 lg:-right-8 z-20"
//                         >
//                             <Link
//                                 href="/contact"
//                                 className="group flex items-center space-x-3 bg-brand-primary text-white px-8 py-5 rounded-full shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.4)] hover:shadow-[0_0_50px_rgba(var(--brand-primary-rgb),0.6)] transition-all duration-300 hover:scale-105"
//                                 style={{
//                                     backgroundColor: 'var(--brand-primary)'
//                                 }}
//                             >
//                                 <div className="bg-white/20 p-2 rounded-lg">
//                                     <Calendar className="w-5 h-5" />
//                                 </div>
//                                 <span className="text-lg font-bold">Schedule a Call</span>
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             {/* Overall Ambient Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.15)_0%,transparent_60%)] -z-10 rounded-full pointer-events-none" />
//         </section>
//     );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// Defer heavy effects (tsparticles/glow) to after initial paint.
const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((m) => m.SparklesCore),
  { ssr: false },
);

const GlowingEffect = dynamic(
  () => import("@/components/ui/glowing-effect").then((m) => m.GlowingEffect),
  { ssr: false },
);

export default function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const [enableFx, setEnableFx] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Mount effects after the page becomes idle (reduces TBT during startup). [page:0]
    const ric =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (window as any).requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 350);

    const cancel =
      typeof window !== "undefined" && "cancelIdleCallback" in window
        ? (window as any).cancelIdleCallback
        : (id: any) => window.clearTimeout(id);

    const id = ric(() => setEnableFx(true));
    return () => cancel(id);
  }, [prefersReducedMotion]);

  const avatars = useMemo(() => [11, 12, 13], []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6 overflow-hidden bg-black">
      {/* Background effects: deferred */}
      <div className="absolute inset-0 z-0">
        {enableFx ? (
          <SparklesCore
            id="tsparticleshero"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full opacity-40"
            particleColor="#FFFFFF"
            speed={0.8}
          />
        ) : (
          // Cheap fallback: no extra JS
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div className="space-y-6">
              {/* Badge */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.45 }}
                className="flex items-center space-x-4 mb-4"
              >
                <div className="flex -space-x-2">
                  {avatars.map((img) => (
                    <div
                      key={img}
                      className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?img=${img}`}
                        alt="Client"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <span className="text-white font-bold text-lg block leading-none">
                    120+
                  </span>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider">
                    Total Satisfied Clients
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
                animate={
                  prefersReducedMotion ? undefined : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.55 }}
                className="text-6xl md:text-7xl lg:text-9xl font-display text-white font-bold leading-[0.9] tracking-tighter"
              >
                IT&apos;S ME <br />
                <span className="text-brand-primary/80">
                  Dinesh Koyyalamudi
                </span>
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : 0.15,
                }}
                className="max-w-md text-zinc-400 text-lg md:text-xl leading-relaxed"
              >
                I&apos;ve earned the trust of over 250 clients and 40 brands,
                all of whom are very satisfied with my service!
              </motion.p>
            </div>

            {/* Stats row: keep it simple; no expensive effects */}
            <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  600+
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide font-medium">
                  Projects Done
                </p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  50+
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide font-medium">
                  Brand Partnerships
                </p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  12+
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide font-medium">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden"
            >
              {/* Defer glow effect */}
              {enableFx && (
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={120}
                  inactiveZone={0.05}
                  borderWidth={4}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />

              {/* Make the hero image clearly discoverable + prioritized for LCP. [page:1][page:2] */}
              <Image
                src="/images/dinesh_hero.png"
                alt="Dinesh hero"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : 0.15,
              }}
              className="absolute bottom-10 right-0 lg:-right-8 z-20"
            >
              <Link
                href="/contact"
                className="group flex items-center space-x-3 bg-brand-primary text-white px-8 py-5 rounded-full shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.4)] hover:shadow-[0_0_50px_rgba(var(--brand-primary-rgb),0.6)] transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold">Schedule a Call</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.15)_0%,transparent_60%)] -z-10 rounded-full pointer-events-none" />
    </section>
  );
}
