import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: "PrepPlace AI",
            category: "Full Stack & ML",
            description: "AI-powered placement preparation platform featuring interactive coding practice, aptitude tests, and simulated AI mock interviews to boost employment readiness.",
            tags: ["React", "Node.js", "PostgreSQL", "Groq AI"],
            github: "https://github.com/lokesh-34",
            live: "https://prepplace.netlify.app",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
            color: "#8b5cf6" // primary-500
        },
        {
            title: "WhatsApp Clone",
            category: "Full Stack & WebSockets",
            description: "A secure, real-time messaging platform featuring end-to-end encryption, instant delivery status, and media sharing capabilities.",
            tags: ["React", "Node.js", "Socket.io", "MongoDB"],
            github: "https://github.com/lokesh-34",
            live: "https://neochatt.netlify.app/",
            image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2874&auto=format&fit=crop",
            color: "#25D366" // WhatsApp Green
        },
        {
            title: "CarBuzz",
            category: "Full Stack Web App",
            description: "Advanced car rental management system with self-driving car fleet integration, automated booking workflows, and real-time telemetry.",
            tags: ["React", "Next.js", "Supabase", "Tailwind"],
            github: "https://github.com/lokesh-34",
            live: "https://carbuzz.netlify.app/",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop",
            color: "#f59e0b" // Amber
        },
        {
            title: "Email Spam Analyser",
            category: "Machine Learning / NLP",
            description: "High-precision email classification system utilizing Naive Bayes and TF-IDF vectorization to detect and filter spam content.",
            tags: ["Python", "Scikit-Learn", "NLTK", "Flask"],
            github: "https://github.com/lokesh-34",
            live: "https://github.com/lokesh-34",
            image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2940&auto=format&fit=crop",
            color: "#ef4444" // Red
        },
        {
            title: "RAG System",
            category: "AI & LLM Orchestration",
            description: "Intelligent RAG (Retrieval-Augmented Generation) pipeline built using Flowwise and LangChain for domain-specific AI interactions.",
            tags: ["Python", "Flowwise", "LangChain", "VectorDB"],
            github: "https://github.com/lokesh-34",
            live: "https://github.com/lokesh-34",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
            color: "#3b82f6" // Blue
        }
    ]

    return (
        <SectionWrapper id="projects" className="py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <SectionHeader
                        title="Selected Works"
                        subtitle="Deep dives into complex algorithms and full-stack solutions."
                    />
                    <a href="https://github.com/lokesh-34" className="btn-outline self-start md:self-auto interactive group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid gap-12 lg:gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
                        >

                            {/* Project Image Panel */}
                            <div className="w-full lg:w-3/5 h-[400px] sm:h-[500px] relative rounded-[2rem] overflow-hidden glass-card border-none interactive cursor-pointer">
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                />

                                {/* Glow behind image */}
                                <div
                                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay"
                                    style={{ backgroundColor: project.color }}
                                />

                                {/* Hover overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90 lg:opacity-60" />

                                {/* Mobile view inner text (visible only on small screens or hover on large) */}
                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden lg:flex items-center justify-between">
                                    <a href={project.live} className="flex items-center gap-2 text-white font-bold text-xl hover:underline">
                                        Live Demo <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info Panel */}
                            <div className="w-full lg:w-2/5 flex flex-col justify-center">
                                <span className="text-[7rem] font-display font-black text-white/[0.03] leading-none select-none pointer-events-none">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: project.color }}>
                                    {project.category}
                                </p>

                                <h3 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-500" style={{ backgroundImage: `linear-gradient(45deg, #fff, ${project.color})` }}>
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tech-tag bg-zinc-900 border-zinc-800 backdrop-blur-none">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Mobile Links (visible on small screens) */}
                                <div className="flex lg:hidden items-center gap-6 mt-4">
                                    <a href={project.live} className="flex items-center gap-2 text-white font-bold hover:underline">
                                        Live Demo <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="flex items-center gap-2 text-zinc-400 hover:text-white">
                                        <Github className="w-5 h-5" /> Code
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
