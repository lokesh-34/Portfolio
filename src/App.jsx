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

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className={`relative min-h-screen noise-bg transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
        </div>
    )
}

export default App
