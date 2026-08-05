import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionWrapper({ children, id, className = '' }) {
    const ref = useRef(null)
    const dividerRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const dividerInView = useInView(dividerRef, { once: true, margin: '-20px' })

    return (
        <section id={id} ref={ref} className={`section-padding relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
            <div
                ref={dividerRef}
                className={`section-divider mt-16 ${dividerInView ? 'visible' : ''}`}
            />
        </section>
    )
}

export function SectionHeader({ title, subtitle }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <div ref={ref} className="text-center mb-16">
            <h2 className="section-title">
                <span className="gradient-text">{title}</span>
            </h2>
            <div className={`section-accent-bar ${isInView ? 'visible' : ''}`} />
            {subtitle && <p className="section-subtitle mt-4">{subtitle}</p>}
        </div>
    )
}

export function AnimatedCard({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            className={`glass-card rounded-2xl ${className}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
        >
            {children}
        </motion.div>
    )
}
