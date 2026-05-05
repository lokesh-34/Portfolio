import { useEffect, useState } from 'react'
import { SectionWrapper, AnimatedCard } from './SectionWrapper'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedCounter({ value, duration = 2 }) {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)
    const inView = useInView(nodeRef, { once: true, margin: '-50px' })

    useEffect(() => {
        if (!inView) return

        let start = 0
        const end = parseInt(value.substring(0, value.length - 1))
        const suffix = value.charAt(value.length - 1)

        if (isNaN(end)) {
            setCount(value)
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
                clearInterval(timer)
            } else {
                setCount(`${Math.floor(start)}${suffix}`)
            }
        }, 1000 / 60)

        return () => clearInterval(timer)
    }, [inView, value, duration])

    return (
        <span ref={nodeRef} className="text-4xl md:text-5xl font-display font-bold gradient-text">
            {count}
        </span>
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
                            className="text-center flex flex-col items-center p-6 glow-border glass-card rounded-2xl"
                        >
                            <AnimatedCounter value={stat.value} />
                            <div className="mt-4 mb-1 h-1 w-12 bg-primary-500 rounded-full" />
                            <h4 className="text-lg font-semibold text-white mt-2">{stat.label}</h4>
                            <p className="text-sm text-slate-400 mt-2">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
