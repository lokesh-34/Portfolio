import { useState, useEffect, useRef, useCallback } from 'react'

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)
    const [isTouch, setIsTouch] = useState(false)
    const rafRef = useRef(null)
    const targetRef = useRef({ x: -100, y: -100 })

    useEffect(() => {
        // Detect touch-only devices
        const mq = window.matchMedia('(hover: none)')
        setIsTouch(mq.matches)

        const handleChange = (e) => setIsTouch(e.matches)
        mq.addEventListener('change', handleChange)
        return () => mq.removeEventListener('change', handleChange)
    }, [])

    const animateTrail = useCallback(() => {
        setPosition(prev => ({
            x: prev.x + (targetRef.current.x - prev.x) * 0.15,
            y: prev.y + (targetRef.current.y - prev.y) * 0.15,
        }))
        rafRef.current = requestAnimationFrame(animateTrail)
    }, [])

    useEffect(() => {
        if (isTouch) return

        const handleMouseMove = (e) => {
            setDotPosition({ x: e.clientX, y: e.clientY })
            targetRef.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseOver = (e) => {
            const target = e.target
            const isClickable = target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('interactive')
            setIsHovering(isClickable)
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseOver)

        rafRef.current = requestAnimationFrame(animateTrail)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [isTouch, animateTrail])

    // Don't render custom cursor on touch devices
    if (isTouch) return null

    return (
        <>
            <style>
                {`@media (hover: hover) { body { cursor: none; } }`}
            </style>
            {/* Center Dot */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
                style={{
                    transform: `translate3d(${dotPosition.x - 4}px, ${dotPosition.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
                    transition: 'transform 0.1s ease-out',
                    willChange: 'transform',
                }}
            />
            {/* Outer Ring / Glow */}
            <div
                className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[99] flex items-center justify-center backdrop-invert backdrop-opacity-20"
                style={{
                    transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 1.5 : 1})`,
                    backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'transparent',
                    mixBlendMode: 'difference',
                    transition: 'background-color 0.3s ease, transform 0.05s linear',
                    willChange: 'transform',
                }}
            />
        </>
    )
}
