import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Code } from 'lucide-react'

export default function Hero() {
    const roles = [
        "AI & Data Science Engineer",
        "Full Stack Developer",
        "Creative Problem Solver"
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
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-left w-full mt-10 lg:mt-0">
                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-pill border-primary-500/30 text-primary-400 text-sm font-medium mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500 shadow-[0_0_8px_#8b5cf6]"></span>
                            </span>
                            Available for new opportunities
                        </motion.div>

                        {/* Huge Name */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { staggerChildren: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                            className="mb-6 font-display font-black uppercase tracking-tighter leading-[0.9] text-transparent bg-clip-text gradient-text-animated"
                        >
                            <motion.div className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem]">
                                LOKESH N<span className="text-white">.</span>
                            </motion.div>
                        </motion.div>

                        {/* Dynamic Role */}
                        <div className="h-10 md:h-14 mb-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentRole}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-medium tracking-wide"
                                >
                                    {roles[currentRole]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed"
                        >
                            Architecting scalable intelligent systems. I bridge the gap between complex data algorithms and elegant, modern user experiences.
                        </motion.p>

                        {/* Actions & Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <a href="#projects" className="btn-primary w-full sm:w-auto interactive group">
                                <span>Explore Work</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>

                            <div className="flex items-center gap-6 sm:ml-6">
                                <a href="https://github.com/lokesh-34" className="text-zinc-500 hover:text-white interactive transition-colors hover:-translate-y-1 transform duration-300">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com" className="text-zinc-500 hover:text-white interactive transition-colors hover:-translate-y-1 transform duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://leetcode.com" className="text-zinc-500 hover:text-white interactive transition-colors hover:-translate-y-1 transform duration-300">
                                    <Code className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Abstract Element */}
                    <div className="hidden lg:flex flex-1 justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-96 h-96"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 via-fuchsia-500 to-accent-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
                            <div className="absolute inset-0 glass-card border-none rounded-3xl overflow-hidden interactive group">
                                <img
                                    src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2938&auto=format&fit=crop"
                                    alt="Abstract tech"
                                    className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] opacity-80" />
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

// Ensure AnimatePresence is imported correctly
import { AnimatePresence } from 'framer-motion'
