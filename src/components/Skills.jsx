import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'
import { motion } from 'framer-motion'

export default function Skills() {
    const categories = [
        {
            title: "Programming",
            skills: ["Java", "Python", "JavaScript", "C++", "TypeScript"]
        },
        {
            title: "Frontend Development",
            skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Vite JS"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Linux"]
        },
        {
            title: "AI & Machine Learning",
            skills: ["Generative AI", "LLM", "RAG", "Scikit-Learn", "Pandas", "NumPy", "TensorFlow Basics", "Data Analysis"]
        }
    ]

    return (
        <SectionWrapper id="skills">
            <SectionHeader
                title="Technical Arsenal"
                subtitle="A comprehensive toolkit for full-stack and data-driven development."
            />

            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <AnimatedCard key={index} delay={index * 0.1} className="p-6">
                            <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        className="tech-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
