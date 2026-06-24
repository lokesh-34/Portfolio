import { Code2, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="py-8 relative bg-[#030014]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo / Brand */}
                    <div className="flex items-center gap-2 font-display text-lg font-bold">
                        <Code2 className="text-primary-500 w-6 h-6" />
                        <span className="text-slate-300">Lokesh<span className="text-primary-500">.</span></span>
                    </div>

                    {/* Copyright text */}
                    <p className="text-slate-500 text-sm flex items-center gap-2 text-center">
                        Designed & Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> by Lokesh N © {new Date().getFullYear()}
                    </p>

                    {/* Scroll to Top */}
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>

                </div>
            </div>
        </footer>
    )
}
