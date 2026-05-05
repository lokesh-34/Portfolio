import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Minimal scrollspy equivalent
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.name.toLowerCase())
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 250) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
                {/* Floating Pill Container */}
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-pill px-6 py-3 flex items-center justify-between gap-8 md:gap-16 w-full max-w-4xl"
                >
                    {/* Logo */}
                    <a href="#home" className="text-xl font-display font-bold text-white flex items-center gap-2 group flex-shrink-0">
                        <Code2 className="text-primary-500 w-6 h-6 group-hover:rotate-12 transition-transform" />
                        <span className="hidden sm:block">Lokesh<span className="text-primary-500">.</span></span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.name.toLowerCase()
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-white/10 rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Connect Button / Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
                        >
                            Let's Talk
                        </a>

                        <button
                            className="md:hidden text-zinc-300 hover:text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-4 top-24 z-40 glass-card p-6 flex flex-col md:hidden items-center justify-center gap-6"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-display font-medium text-zinc-300 hover:text-white transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex gap-6 mt-8 pt-8 border-t border-white/10 w-full justify-center">
                            <a href="https://github.com/lokesh-34" className="text-zinc-400 hover:text-white"><Github /></a>
                            <a href="https://linkedin.com" className="text-zinc-400 hover:text-white"><Linkedin /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
