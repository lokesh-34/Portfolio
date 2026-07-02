import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BackgroundEffects from './components/BackgroundEffects'
import CursorGlow from './components/CursorGlow'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const LoadingFallback = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
)

const BootScreen = ({ progress }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] overflow-hidden">
        <div className="absolute inset-0 opacity-70 boot-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_top,rgba(6,182,212,0.1),transparent_28%)]" />
        <div className="absolute inset-0 boot-scanlines" />

        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent boot-pulse-line" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent boot-pulse-line-reverse" />

        <div className="relative flex flex-col items-center gap-6 text-center px-6">
            <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_62%)] blur-2xl" />
                <div className="absolute inset-2 rounded-full border border-white/10 bg-white/[0.02]" />
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
                <div className="absolute inset-5 rounded-[2rem] border border-primary-500/25 rotate-45 animate-spin-slow-reverse" />
                <div className="absolute inset-10 rounded-full border border-accent-400/20" />
                <div className="absolute inset-[38%] rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.85)]" />

                <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent animate-[boot-pulse-line_2.8s_ease-in-out_infinite]" />
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[boot-pulse-line_2.8s_ease-in-out_infinite_reverse]" />
                </div>

                <div className="relative flex flex-col items-center justify-center gap-1">
                    <span className="text-[0.6rem] uppercase tracking-[0.7em] text-zinc-500">Entry</span>
                    <span className="text-3xl sm:text-4xl font-black text-white leading-none">{String(progress).padStart(3, '0')}</span>
                </div>
            </div>

            <div>
                <p className="text-xs uppercase tracking-[0.7em] text-zinc-500 mb-4">Initializing experience</p>
                <p className="text-2xl sm:text-4xl font-display font-semibold gradient-text-animated">Lokesh N.</p>
                <p className="mt-3 text-sm sm:text-base text-zinc-400 tracking-[0.3em] uppercase">Design / Code / Motion</p>
            </div>

            <div className="w-72 sm:w-[30rem] h-px bg-white/10 overflow-hidden rounded-full shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                <div className="loading-bar h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] sm:text-xs uppercase tracking-[0.65em] text-zinc-600">
            {progress < 100 ? 'Calibrating interface' : 'Ready'}
        </div>
    </div>
)

function App() {
    const [isBooting, setIsBooting] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 2200
        const startedAt = performance.now()

        const interval = window.setInterval(() => {
            const elapsed = performance.now() - startedAt
            const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100))

            setProgress(nextProgress)

            if (elapsed >= duration) {
                window.clearInterval(interval)
                setIsBooting(false)
            }
        }, 16)

        return () => window.clearInterval(interval)
    }, [])

    return (
        <div className="relative min-h-screen noise-bg">
            <CursorGlow />
            <BackgroundEffects />
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Suspense fallback={<LoadingFallback />}>
                    <About />
                    <Skills />
                    <Projects />
                    <Achievements />
                    <Experience />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={<LoadingFallback />}>
                <Footer />
            </Suspense>
            {isBooting && <BootScreen progress={progress} />}
        </div>
    )
}

export default App
