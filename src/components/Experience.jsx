import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, Users, Cpu } from 'lucide-react'

export default function Experience() {
    const experiences = [
        {
            title: "B.Tech AI & Data Science",
            organization: "Kongu Engineering College",
            date: "2022 - 2026",
            icon: <GraduationCap className="w-5 h-5 text-accent-400" />,
            points: [
                "Focus on core AI algorithms, data analytics, and modern software engineering.",
                "Active participant in technical symposiums and coding competitions.",
                "Strong academic performance with focus on practical implementations."
            ]
        },
        {
            title: "Collaborative Development",
            organization: "Open Source / Team Projects",
            date: "Ongoing",
            icon: <Users className="w-5 h-5 text-emerald-400" />,
            points: [
                "Collaborated via Git and GitHub for seamless version control.",
                "Participated in multiple hackathons building innovative solutions.",
                "Mentored peers in fundamental DSA concepts."
            ]
        }
    ]

    return (
        <SectionWrapper id="experience">
            <SectionHeader
                title="Experience & Education"
                subtitle="My journey in academic and collaborative software development."
            />

            <div className="container mx-auto px-6 max-w-4xl relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-400/50 to-transparent transform md:-translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#030014] border-2 border-primary-500 transform -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_20px_rgba(139,92,246,0.6)]" />

                            {/* Empty Space for layout */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Content Card */}
                            <AnimatedCard delay={index * 0.2} className="w-full md:w-1/2 ml-16 md:ml-0 p-6 md:p-8 hover:border-primary-500/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-slate-800/80">
                                        {exp.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                </div>

                                <h4 className="text-primary-400 font-medium mb-2 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    {exp.organization}
                                </h4>

                                <p className="text-slate-500 text-sm flex items-center gap-2 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    {exp.date}
                                </p>

                                <ul className="space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedCard>

                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
