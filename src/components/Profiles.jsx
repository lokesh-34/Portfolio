import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Github, GitCommitHorizontal, Star, GitFork, AlertCircle } from 'lucide-react'
import { SectionWrapper, SectionHeader, AnimatedCard } from './SectionWrapper'

const GITHUB_USERNAME = 'lokesh-34'
const LEETCODE_USERNAME = 'lokesh-33'
const LEETCODE_STATUS_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=baloo&extension=activity`

function GitHubFallback() {
    return (
        <div className="rounded-xl bg-[#0a0520] p-6 space-y-5">
            <div className="flex items-center gap-3">
                <Github className="w-6 h-6 text-primary-400" />
                <div>
                    <p className="text-white font-semibold text-lg">{GITHUB_USERNAME}</p>
                    <p className="text-zinc-500 text-xs">github.com/{GITHUB_USERNAME}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { icon: Star, label: 'Stars', value: '—' },
                    { icon: GitCommitHorizontal, label: 'Commits', value: '—' },
                    { icon: GitFork, label: 'Repos', value: '10+' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <stat.icon className="w-4 h-4 text-primary-400 mx-auto mb-2" />
                        <p className="text-white font-bold text-lg">{stat.value}</p>
                        <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 pt-1 text-zinc-600 text-xs">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Live stats temporarily unavailable — visit GitHub for details</span>
            </div>
        </div>
    )
}

function GitHubStatsCard() {
    const [status, setStatus] = useState('loading')
    const [stats, setStats] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function loadGitHubStats() {
            try {
                const [userResponse, reposResponse] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
                        signal: controller.signal,
                        headers: {
                            Accept: 'application/vnd.github+json',
                        },
                    }),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc&visibility=public`, {
                        signal: controller.signal,
                        headers: {
                            Accept: 'application/vnd.github+json',
                        },
                    }),
                ])

                if (!userResponse.ok || !reposResponse.ok) {
                    throw new Error('Unable to load GitHub stats')
                }

                const user = await userResponse.json()
                const repos = await reposResponse.json()

                let totalCommits = null

                try {
                    const commitResponse = await fetch(`https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}+is:public`, {
                        signal: controller.signal,
                        headers: {
                            Accept: 'application/vnd.github.cloak-preview+json',
                        },
                    })

                    if (commitResponse.ok) {
                        const commitSearch = await commitResponse.json()
                        totalCommits = commitSearch.total_count
                    }
                } catch (commitError) {
                    if (commitError.name !== 'AbortError') {
                        totalCommits = null
                    }
                }

                const totalStars = repos.reduce((count, repo) => count + repo.stargazers_count, 0)
                const topLanguage = repos
                    .reduce((languages, repo) => {
                        if (repo.language) {
                            languages[repo.language] = (languages[repo.language] || 0) + 1
                        }

                        return languages
                    }, {})

                const mostUsedLanguage = Object.entries(topLanguage).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Mixed'

                setStats({
                    followers: user.followers,
                    following: user.following,
                    publicRepos: user.public_repos,
                    totalCommits,
                    totalStars,
                    mostUsedLanguage,
                    profileUrl: user.html_url,
                    avatarUrl: user.avatar_url,
                })
                setStatus('loaded')
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setStatus('error')
                }
            }
        }

        loadGitHubStats()

        return () => controller.abort()
    }, [])

    if (status === 'error') {
        return <GitHubFallback />
    }

    return (
        <div className="rounded-xl bg-[#0a0520] p-6 space-y-5">
            <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {stats?.avatarUrl ? (
                        <img
                            src={stats.avatarUrl}
                            alt={GITHUB_USERNAME}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 animate-pulse bg-white/5" />
                    )}
                </div>
                <div>
                    <p className="text-white font-semibold text-lg">{GITHUB_USERNAME}</p>
                    <p className="text-zinc-500 text-xs">github.com/{GITHUB_USERNAME}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                    { icon: GitCommitHorizontal, label: 'Commits', value: stats?.totalCommits ?? '—' },
                    { icon: GitFork, label: 'Repos', value: stats?.publicRepos ?? '—' },
                    { icon: Star, label: 'Stars', value: stats?.totalStars ?? '—' },
                    { icon: Github, label: 'Followers', value: stats?.followers ?? '—' },
                    { icon: Github, label: 'Following', value: stats?.following ?? '—' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <stat.icon className="w-4 h-4 text-primary-400 mx-auto mb-2" />
                        <p className="text-white font-bold text-lg">{stat.value}</p>
                        <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-xs text-zinc-400">
                <span>Most used language</span>
                <span className="text-white font-medium">{stats?.mostUsedLanguage ?? 'Loading...'}</span>
            </div>

            <div className="flex items-center gap-2 pt-1 text-zinc-600 text-xs">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Live stats from the GitHub API</span>
            </div>
        </div>
    )
}

function ProfileImage({ src, alt, fallback: Fallback }) {
    const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'error'

    return (
        <div className="relative min-h-[140px]">
            {/* Skeleton while loading */}
            {status === 'loading' && (
                <div className="absolute inset-0 rounded-xl project-image-skeleton" />
            )}

            {/* Error fallback */}
            {status === 'error' && Fallback && <Fallback />}

            {/* Actual image */}
            {status !== 'error' && (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full rounded-xl object-cover transition-all duration-500 ${
                        status === 'loaded'
                            ? 'opacity-100 blur-0'
                            : 'opacity-0 blur-sm'
                    }`}
                    loading="lazy"
                    onLoad={() => setStatus('loaded')}
                    onError={() => setStatus('error')}
                />
            )}
        </div>
    )
}

const profileCards = [
    {
        title: 'GitHub Stats',
        description: 'Open source activity',
        icon: Github,
        accentClass: 'border-primary-500/15 bg-primary-500/10 text-primary-300',
        hoverClass: 'hover:border-primary-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.16)]',
        href: `https://github.com/${GITHUB_USERNAME}`,
        arrowHoverClass: 'group-hover:text-primary-300',
        content: GitHubStatsCard,
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
        fallback: null,
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

                                    {card.content ? (
                                        <card.content />
                                    ) : (
                                        <div className={`overflow-hidden rounded-2xl border border-white/[0.06] ${card.imageBg} p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]`}>
                                            <ProfileImage
                                                src={card.image}
                                                alt={card.alt}
                                                fallback={card.fallback}
                                            />
                                        </div>
                                    )}
                                </motion.a>
                            </AnimatedCard>
                        )
                    })}
                </div>
            </div>
        </SectionWrapper>
    )
}
