import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'
import { Code, Brain, Target, Zap } from 'lucide-react'

export default function About() {
    const highlights = [
        {
            icon: <Brain className="w-6 h-6 text-primary-400" />,
            title: "AI & Data Science",
            desc: "B.Tech from Kongu Engineering College with strong fundamentals in ML algorithms."
        },
        {
            icon: <Code className="w-6 h-6 text-accent-400" />,
            title: "Full Stack Dev",
            desc: "Building scalable web applications using React, Node.js, and modern databases."
        },
        {
            icon: <Target className="w-6 h-6 text-emerald-400" />,
            title: "Problem Solving",
            desc: "Strong DSA skills with 250+ LeetCode problems solved."
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            title: "Leadership",
            desc: "Led backend architecture & task coordination in diverse academic projects."
        }
    ]

    return (
        <SectionWrapper id="about">
            <SectionHeader
                title="About Me"
                subtitle="Bridging the gap between intelligent algorithms and user-centric applications."
            />

            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-display font-semibold text-white mb-4">
                            I'm a passionate developer focused on building intelligent solutions.
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Currently pursuing my B.Tech in Artificial Intelligence and Data Science. I specialize in merging analytical data processing with robust full-stack web development.
                        </p>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            My approach to software engineering centers on writing clean, efficient code and architecting scalable systems. Whether it's training an AI model or designing a REST API, I enjoy the entire lifecycle of product development.
                        </p>
                        <div className="pt-6 border-t border-slate-800">
                            <a href="#contact" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-2 transition-colors">
                                Let's collaborate
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <AnimatedCard key={index} delay={index * 0.1} className="p-6">
                                <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </AnimatedCard>
                        ))}
                    </div>

                </div>
            </div>
        </SectionWrapper>
    )
}
