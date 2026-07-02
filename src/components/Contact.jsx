import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check } from 'lucide-react'
import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'

const EMAIL_ADDRESS = 'lokesh28nm@gmail.com'
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_ADDRESS)}&su=Portfolio%20Contact`

export default function Contact() {
    const [showToast, setShowToast] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        if (!showToast) {
            return undefined
        }

        const timeout = window.setTimeout(() => {
            setShowToast(false)
        }, 2200)

        return () => window.clearTimeout(timeout)
    }, [showToast])

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL_ADDRESS)
            setIsCopied(true)
            setShowToast(true)

            window.setTimeout(() => {
                setIsCopied(false)
            }, 1400)
        } catch {
            setShowToast(false)
        }
    }

    return (
        <SectionWrapper id="contact">
            <SectionHeader
                title="Let's Connect"
                subtitle="I'm always open to internships, full-time opportunities, collaborations, or discussing interesting projects. Feel free to reach out."
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <AnimatedCard className="relative overflow-hidden rounded-[2rem] border-primary-500/20 p-1">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.1),transparent_30%)]" />
                    <div className="absolute inset-0 bg-white/[0.01]" />

                    <div className="relative z-10 rounded-[1.75rem] border border-white/[0.06] bg-[#0a0520]/70 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(139,92,246,0.35)]">
                        <div className="flex flex-col items-center text-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.04 }}
                                className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-primary-500/20 bg-primary-500/10 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
                            >
                                <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative"
                                >
                                    <Mail className="h-8 w-8 text-primary-300 drop-shadow-[0_0_14px_rgba(167,139,250,0.45)]" />
                                </motion.div>
                            </motion.div>

                            <div className="max-w-2xl space-y-4">
                                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Let's Connect
                                </h3>
                                <p className="text-base sm:text-lg leading-8 text-zinc-400">
                                    I'm always open to internships, full-time opportunities, collaborations, or discussing interesting projects. Feel free to reach out.
                                </p>
                            </div>

                            <div className="w-full max-w-2xl">
                                <motion.a
                                    href={GMAIL_COMPOSE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="group flex w-full items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-left transition-all duration-300 hover:border-primary-500/40 hover:bg-primary-500/10 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
                                >
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-primary-500/15 bg-primary-500/10 text-primary-300 transition-transform duration-300 group-hover:scale-105">
                                        <Mail className="h-6 w-6" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Email Address</p>
                                        <p className="mt-1 break-all text-lg font-medium text-white transition-colors group-hover:text-primary-200">
                                            {EMAIL_ADDRESS}
                                        </p>
                                    </div>

                                    <div className="hidden rounded-full border border-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-400 sm:block">
                                        Compose in Gmail
                                    </div>
                                </motion.a>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-2xl">
                                <motion.button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary w-full sm:w-auto justify-center gap-3"
                                >
                                    {isCopied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                                    <span>{isCopied ? 'Copied' : 'Copy Email'}</span>
                                </motion.button>

                                <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-zinc-400">
                                    Fastest response for collaborations and opportunities.
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedCard>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-full border border-emerald-400/20 bg-[#0a0520]/95 px-5 py-3 text-sm font-medium text-emerald-200 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.45)] backdrop-blur-xl transition-all duration-300 ${showToast ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'}`}
            >
                Email copied!
            </motion.div>
        </SectionWrapper>
    )
}
