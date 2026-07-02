import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Github } from 'lucide-react'
import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'

const GITHUB_USERNAME = 'lokesh-34'
const LEETCODE_USERNAME = 'lokesh-33'
const GITHUB_STATS_URL = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=0a0520&title_color=a78bfa&text_color=e4e4e7&icon_color=a78bfa&border_color=ffffff10&count_private=true&include_all_commits=true`
const LEETCODE_STATUS_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=baloo&extension=activity`

const profileCards = [
    {
        title: 'GitHub Stats',
        description: 'Open source activity',
        icon: Github,
        accentClass: 'border-primary-500/15 bg-primary-500/10 text-primary-300',
        hoverClass: 'hover:border-primary-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.16)]',
        href: `https://github.com/${GITHUB_USERNAME}`,
        image: GITHUB_STATS_URL,
        alt: 'GitHub stats card',
        imageBg: 'bg-[#060312]',
        arrowHoverClass: 'group-hover:text-primary-300',
    },
    {
        title: 'LeetCode Status',
        description: 'Problem solving streak',
        icon: Code2,
        accentClass: 'border-accent-500/15 bg-accent-500/10 text-accent-300',
        hoverClass: 'hover:border-primary-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.16)]',
        href: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
        image: LEETCODE_STATUS_URL,
        alt: 'LeetCode status card',
        imageBg: 'bg-[#060312]',
        arrowHoverClass: 'group-hover:text-accent-300',
    },
]

export default function Profiles() {
    return (
        <SectionWrapper id="profiles">
            <SectionHeader
                title="Profiles"
                subtitle="A quick look at my coding activity and problem-solving progress across the platforms I use most."
            />

            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid gap-4 lg:grid-cols-2">
                    {profileCards.map((card, index) => {
                        const Icon = card.icon

                        return (
                            <AnimatedCard key={card.title} delay={index * 0.12} className={`group overflow-hidden border-white/[0.08] bg-white/[0.03] p-5 text-left transition-all duration-300 ${card.hoverClass}`}>
                                <motion.a
                                    href={card.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -2 }}
                                    className="block"
                                >
                                    <div className="mb-4 flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${card.accentClass}`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{card.title}</p>
                                                <h4 className="mt-1 text-lg font-semibold text-white">{card.description}</h4>
                                            </div>
                                        </div>
                                        <ArrowUpRight className={`h-5 w-5 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${card.arrowHoverClass}`} />
                                    </div>

                                    <div className={`overflow-hidden rounded-2xl border border-white/[0.06] ${card.imageBg} p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]`}>
                                        <img
                                            src={card.image}
                                            alt={card.alt}
                                            className="h-full w-full rounded-xl object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.a>
                            </AnimatedCard>
                        )
                    })}
                </div>
            </div>
        </SectionWrapper>
    )
}
