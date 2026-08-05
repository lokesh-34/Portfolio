import { useEffect, useState } from 'react'
import { SectionWrapper, AnimatedCard } from './SectionWrapper'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedCounter({ value, duration = 2 }) {
    const [count, setCount] = useState(0)
    const [done, setDone] = useState(false)
    const nodeRef = useRef(null)
    const inView = useInView(nodeRef, { once: true, margin: '-50px' })

    useEffect(() => {
        if (!inView) return

        let start = 0
        const end = parseInt(value.substring(0, value.length - 1))
        const suffix = value.charAt(value.length - 1)

        if (isNaN(end)) {
            setCount(value)
            setDone(true)
            return
        }

        const totalSteps = Math.floor(duration * 60)
        const stepValue = end / totalSteps
        let currentStep = 0

        const timer = setInterval(() => {
            currentStep++
            start += stepValue
            if (currentStep >= totalSteps) {
                setCount(`${end}${suffix}`)
                setDone(true)
                clearInterval(timer)
            } else {
                setCount(`${Math.floor(start)}${suffix}`)
            }
        }, 1000 / 60)

        return () => clearInterval(timer)
    }, [inView, value, duration])

    return (
        <motion.span
            ref={nodeRef}
            className="text-4xl md:text-5xl font-display font-bold gradient-text"
            animate={done ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {count}
        </motion.span>
    )
}

export default function Achievements() {
    const stats = [
        { value: "250+", label: "LeetCode Problems", desc: "Data Structures & Algorithms" },
        { value: "10+", label: "Full Stack Projects", desc: "React, Node, DB integrated" },
        { value: "5+", label: "AI Implementations", desc: "Models and Analysis" },
        { value: "100%", label: "Commitment", desc: "Continuous Learning" }
    ]

    return (
        <SectionWrapper id="achievements" className="py-20 relative border-y border-slate-800/50 bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center flex flex-col items-center p-8 glass-card rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] to-transparent pointer-events-none transition-opacity duration-500 group-hover:from-primary-500/[0.12]" />
                            {/* Glow pulse on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(139, 92, 246, 0.08)' }} />
                            <AnimatedCounter value={stat.value} />
                            <div className="mt-4 mb-1 h-1 w-12 bg-gradient-to-r from-primary-500 to-fuchsia-500 rounded-full transition-all duration-300 group-hover:w-16 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.4)]" />
                            <h4 className="text-lg font-semibold text-white mt-2">{stat.label}</h4>
                            <p className="text-sm text-slate-400 mt-2">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
