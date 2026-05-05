import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'
import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })

            setTimeout(() => setSubmitStatus(null), 3000)
        }, 1500)
    }

    return (
        <SectionWrapper id="contact">
            <SectionHeader
                title="Get in Touch"
                subtitle="Looking for an AI engineer or full-stack developer? Let's connect."
            />

            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
                        <p className="text-slate-400 mb-8">
                            Don't like forms? Send me an email. 👋
                        </p>

                        <AnimatedCard className="p-6 flex items-center gap-4 hover:border-primary-500/40">
                            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Email</p>
                                <a href="mailto:lokesh@example.com" className="text-white font-medium hover:text-primary-400 transition-colors">lokeshn.tech@gmail.com</a>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.1} className="p-6 flex items-center gap-4 hover:border-[#0077b5]/50">
                            <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] flex-shrink-0">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-[#0077b5] transition-colors">linkedin.com/in/lokesh-n</a>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2} className="p-6 flex items-center gap-4 hover:border-white/40">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                                <a href="https://github.com/lokesh-34" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-slate-300 transition-colors">github.com/lokesh-34</a>
                            </div>
                        </AnimatedCard>
                    </div>

                    {/* Contact Form */}
                    <AnimatedCard delay={0.3} className="lg:col-span-3 p-8 border-primary-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary-400" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-slate-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary-400" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-slate-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-primary-400" /> Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-slate-500 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : submitStatus === 'success' ? (
                                    <span className="text-white">Message Sent! ✓</span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </AnimatedCard>

                </div>
            </div>
        </SectionWrapper>
    )
}
