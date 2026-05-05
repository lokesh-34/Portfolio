import { useState, useEffect } from 'react'

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setDotPosition({ x: e.clientX, y: e.clientY })
            // Delay the outer ring slightly for a smooth trailing effect
            setTimeout(() => {
                setPosition({ x: e.clientX, y: e.clientY })
            }, 50)
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

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            <style>
                {`body { cursor: none; }`}
            </style>
            {/* Center Dot */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] transition-transform duration-100 mix-blend-difference"
                style={{
                    transform: `translate3d(${dotPosition.x - 4}px, ${dotPosition.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
                }}
            />
            {/* Outer Ring / Glow */}
            <div
                className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[99] transition-all duration-300 ease-out flex items-center justify-center backdrop-invert backdrop-opacity-20"
                style={{
                    transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 1.5 : 1})`,
                    backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'transparent',
                    mixBlendMode: 'difference'
                }}
            />
        </>
    )
}
