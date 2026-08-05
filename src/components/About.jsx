import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'
import { Code, Brain, Target, Zap, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
    const resumeText = `Lokesh N
Final Year AI & Data Science Student | Full Stack MERN Developer | AI & Machine Learning Enthusiast | AWS Cloud & DevOps Learner

Profile Summary
Final Year Artificial Intelligence & Data Science student at Kongu Engineering College with a passion for building AI-powered applications and full-stack web solutions.

Skills
Java
Python
JavaScript
React
Node.js
MongoDB
Machine Learning
Deep Learning
AWS
CI/CD
Docker
`

    const highlights = [
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            desc: 'Final Year AI & Data Science student at Kongu Engineering College with a focus on intelligent systems.',
            color: 'text-primary-400',
            hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]',
        },
        {
            icon: Code,
            title: 'Full Stack Development',
            desc: 'Building modern MERN applications with React, Node.js, and production-ready APIs.',
            color: 'text-accent-400',
            hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]',
        },
        {
            icon: Target,
            title: 'Problem Solving',
            desc: 'Strong DSA fundamentals, coding practice in Java and Python, and a LeetCode-driven mindset.',
            color: 'text-emerald-400',
            hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]',
        },
        {
            icon: Zap,
            title: 'Cloud & DevOps',
            desc: 'Comfortable collaborating on project planning, backend architecture, and team delivery.',
            color: 'text-yellow-400',
            hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]',
        },
    ]

    const interests = [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Full Stack Development',
        'Cloud Computing',
        'DevOps',
        'Data Structures & Algorithms',
        'Software Engineering',
    ]

    const handleDownloadResume = () => {
        const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')

        link.href = url
        link.download = 'Lokesh_N_Resume.txt'
        link.click()

        URL.revokeObjectURL(url)
    }

    return (
        <SectionWrapper id="about">
            <SectionHeader
                title="About Me"
                subtitle="Bridging the gap between intelligent algorithms and user-centric applications."
            />

            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
                    <AnimatedCard className="relative overflow-hidden p-8 sm:p-10 border-primary-500/20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_30%)]" />
                        <div className="relative z-10 space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-400">
                                Lokesh N
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
                                    I enjoy transforming ideas into practical applications that solve real-world problems.
                                </h3>
                                <p className="text-zinc-400 text-base sm:text-lg leading-8">
                                    I am a Final Year Artificial Intelligence & Data Science student at Kongu Engineering College with a passion for building AI-powered applications and full-stack web solutions.
                                </p>
                                <p className="text-zinc-400 text-base sm:text-lg leading-8">
                                    I specialize in MERN Stack development, Machine Learning, Deep Learning, Java, Python, and DevOps. I enjoy solving real-world problems through software engineering while continuously learning AWS, CI/CD, Docker, and modern AI systems.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 mb-4">Interests</p>
                                <motion.div
                                    className="flex flex-wrap gap-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.04 } },
                                    }}
                                >
                                    {interests.map((interest) => (
                                        <motion.span
                                            key={interest}
                                            className="tech-tag"
                                            variants={{
                                                hidden: { opacity: 0, y: 10, scale: 0.95 },
                                                visible: { opacity: 1, y: 0, scale: 1 },
                                            }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            {interest}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="pt-4 flex flex-wrap gap-4">
                                <motion.button
                                    type="button"
                                    onClick={handleDownloadResume}
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary justify-center gap-3"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Resume
                                </motion.button>
                                <a href="#contact" className="btn-outline justify-center">
                                    Let's Collaborate
                                </a>
                                <a href="#projects" className="btn-primary justify-center">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </AnimatedCard>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <AnimatedCard key={index} delay={index * 0.1} className="p-6 group">
                                    <div className={`w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-4 border border-white/[0.06] transition-all duration-300 ${item.hoverGlow} group-hover:border-primary-500/30`}>
                                        <Icon className={`w-6 h-6 ${item.color} transition-all duration-300 group-hover:scale-110`} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </AnimatedCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
