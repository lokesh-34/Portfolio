import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Code } from 'lucide-react'

export default function Hero() {
    const roles = [
        "Final Year AI & Data Science Student",
        "Full Stack MERN Developer",
        "AI & Machine Learning Enthusiast"
    ]

    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-left w-full mt-10 lg:mt-0">
                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-pill text-primary-400 text-sm font-medium mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500 shadow-[0_0_8px_#8b5cf6]"></span>
                            </span>
                            Available for new opportunities
                        </motion.div>

                        {/* Huge Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-6 font-display font-black uppercase tracking-tighter leading-[0.9] text-transparent bg-clip-text gradient-text-animated"
                        >
                            <div className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]">
                                LOKESH N<span className="text-white">.</span>
                            </div>
                        </motion.div>

                        {/* Dynamic Role */}
                        <div className="h-10 md:h-14 mb-8 overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentRole}
                                    initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-medium tracking-wide flex items-center"
                                >
                                    {roles[currentRole]}
                                    <span className="inline-block w-[3px] h-[0.9em] bg-primary-500 ml-2 animate-pulse rounded-full" />
                                </motion.div>
                            </AnimatePresence>
                            {/* Animated gradient underline */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-[2px] rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, transparent)',
                                    width: '50%',
                                }}
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mb-10 sm:mb-12 leading-relaxed"
                        >
                            I'm a Final Year Artificial Intelligence & Data Science student at Kongu Engineering College, focused on building AI-powered applications, modern full-stack web solutions, and practical cloud-ready systems.
                        </motion.p>

                        {/* Actions & Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
                        >
                            <a href="#projects" className="btn-primary w-full sm:w-auto interactive group">
                                <span>Explore Work</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>

                            <div className="flex items-center gap-6 sm:ml-2">
                                <a href="https://github.com/lokesh-34" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white interactive transition-all hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transform duration-300" aria-label="GitHub">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white interactive transition-all hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transform duration-300" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white interactive transition-all hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transform duration-300" aria-label="LeetCode">
                                    <Code className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Geometric Orbiting Element & Portrait */}
                    <div className="flex flex-1 justify-center items-center w-full mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]"
                        >
                            {/* Ambient glow */}
                            <div className="absolute inset-[-20%] bg-gradient-to-tr from-primary-600/20 via-fuchsia-500/10 to-accent-500/20 rounded-full blur-[60px] sm:blur-[80px] animate-pulse" style={{ willChange: 'opacity' }} />

                            {/* Ring 1 — Outer */}
                            <div className="hero-ring hero-ring-1">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500 shadow-[0_0_20px_#8b5cf6,0_0_40px_rgba(139,92,246,0.3)]" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-500 shadow-[0_0_15px_#06b6d4]" />
                            </div>

                            {/* Ring 2 — Middle */}
                            <div className="hero-ring hero-ring-2">
                                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 sm:w-2.5 sm:h-2.5 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#d946ef]" />
                                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1 sm:w-1.5 sm:h-1.5 h-1 rounded-full bg-primary-400 shadow-[0_0_10px_#a78bfa]" />
                            </div>

                            {/* Ring 3 — Inner */}
                            <div className="hero-ring hero-ring-3">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-400 shadow-[0_0_12px_#22d3ee]" />
                            </div>

                            {/* Center core - Portrait Image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden border border-white/[0.08] shadow-[0_0_50px_rgba(139,92,246,0.25)] bg-[#0f0a1e]/80 group">
                                <img 
                                    src="/lokesh-portrait.png" 
                                    alt="Lokesh N" 
                                    className="w-full h-full object-cover object-top scale-[1.02] transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Soft inner shadow & vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4"
            >
                <span className="text-xs text-zinc-500 uppercase tracking-widest rotate-[-90deg] origin-left">Scroll Down</span>
                <div className="w-px h-16 bg-zinc-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-500 animate-[slide-down_2s_ease-in-out_infinite]" />
                </div>
            </motion.div>
        </section>
    )
}
