import { useRef } from 'react'
import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, Users } from 'lucide-react'

function TimelineDot() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <div
            ref={ref}
            className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#030014] border-2 border-primary-500 transform -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_20px_rgba(139,92,246,0.6)] ${inView ? 'timeline-dot-animate' : ''}`}
        />
    )
}

export default function Experience() {
    const timelineRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start end', 'end start'],
    })
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    const experiences = [
        {
            title: "B.Tech – Artificial Intelligence & Data Science",
            organization: "Kongu Engineering College",
            date: "Expected Graduation: 2027",
            icon: <GraduationCap className="w-5 h-5 text-accent-400" />,
            points: [
                "Relevant coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, DBMS, OS, CN, AI, and Software Engineering.",
                "Building a strong foundation in both intelligent systems and software development.",
                "Continuously applying classroom concepts through hands-on projects and coding practice."
            ]
        },
        {
            title: "Full Stack & AI Project Work",
            organization: "Academic and Personal Projects",
            date: "Ongoing",
            icon: <Users className="w-5 h-5 text-emerald-400" />,
            points: [
                "Developed responsive MERN applications and AI-powered tools with modern UI patterns.",
                "Worked with AWS, CI/CD, Docker, and deployment workflows for real-world delivery.",
                "Used Git and GitHub to collaborate, iterate quickly, and maintain clean version control."
            ]
        }
    ]

    return (
        <SectionWrapper id="experience">
            <SectionHeader
                title="Experience & Education"
                subtitle="My journey through college, projects, and the tools I use to turn ideas into shipped work."
            />

            <div ref={timelineRef} className="container mx-auto px-6 max-w-4xl relative">
                {/* Static Timeline Track */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] transform md:-translate-x-1/2" />
                {/* Animated Timeline Fill */}
                <motion.div
                    className="absolute left-8 md:left-1/2 top-0 w-px transform md:-translate-x-1/2 origin-top"
                    style={{
                        height: lineHeight,
                        background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.6), rgba(34, 211, 238, 0.6), transparent)',
                    }}
                />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Dot */}
                            <TimelineDot />

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
