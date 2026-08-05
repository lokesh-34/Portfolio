import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { motion } from 'framer-motion'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const row1Skills = [
    { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
    { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
    { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
    { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
    { name: 'Java', icon: `${DEVICON}/java/java-original.svg` },
    { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
    { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
    { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
    { name: 'Tailwind', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
]

const row2Skills = [
    { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
    { name: 'Express', icon: `${DEVICON}/express/express-original.svg`, invert: true },
    { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg` },
    { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
    { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
    { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg`, invert: true },
    { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
    { name: 'Linux', icon: `${DEVICON}/linux/linux-original.svg` },
    { name: 'TensorFlow', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
    { name: 'Pandas', icon: `${DEVICON}/pandas/pandas-original.svg` },
    { name: 'NumPy', icon: `${DEVICON}/numpy/numpy-original.svg` },
    { name: 'Vite', icon: `${DEVICON}/vitejs/vitejs-original.svg` },
]

const additionalSkills = [
    'Machine Learning', 'Deep Learning', 'CNN', 'Transfer Learning',
    'AWS EC2', 'AWS S3', 'GitHub Actions', 'CI/CD Pipelines',
    'Linux', 'Nginx', 'PM2', 'MongoDB Atlas',
    'Figma', 'Postman', 'Scikit-Learn', 'TensorFlow'
]

export default function Skills() {
    const renderSkillCard = (skill, index) => (
        <div
            key={`${skill.name}-${index}`}
            className="skill-logo-card"
        >
            <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                style={skill.invert ? { filter: 'invert(1)' } : undefined}
            />
            <span>{skill.name}</span>
        </div>
    )

    return (
        <SectionWrapper id="skills">
            <SectionHeader
                title="Technical Arsenal"
                subtitle="Programming, AI, cloud, and frontend tools I use to build and ship modern applications."
            />

            <div className="space-y-8 max-w-7xl mx-auto">
                {/* Row 1 — Scrolls Left */}
                <div className="marquee-container">
                    <div className="marquee-track">
                        {[...row1Skills, ...row1Skills].map(renderSkillCard)}
                    </div>
                </div>

                {/* Row 2 — Scrolls Right */}
                <div className="marquee-container">
                    <div className="marquee-track-reverse">
                        {[...row2Skills, ...row2Skills].map(renderSkillCard)}
                    </div>
                </div>

                {/* Additional Skills (text-only) */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {additionalSkills.map((skill) => (
                        <motion.span
                            key={skill}
                            className="tech-tag"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    )
}
