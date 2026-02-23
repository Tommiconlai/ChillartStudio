import { useRef, useEffect } from 'react'

export default function CursorDot() {
    const dotDomRef = useRef(null)
    const dotPos = useRef({ x: -100, y: -100 })
    const targetPos = useRef({ x: -100, y: -100 })
    const rafRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetPos.current = { x: e.clientX, y: e.clientY }
        }

        window.addEventListener('mousemove', handleMouseMove)

        const LERP = 0.1
        const lerp = (a, b, t) => a + (b - a) * t

        const animate = () => {
            dotPos.current.x = lerp(dotPos.current.x, targetPos.current.x, LERP)
            dotPos.current.y = lerp(dotPos.current.y, targetPos.current.y, LERP)

            if (dotDomRef.current) {
                dotDomRef.current.style.transform = `translate(${dotPos.current.x - 10}px, ${dotPos.current.y - 10}px)`
            }

            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <div
            ref={dotDomRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'rgba(160, 160, 160, 0.35)',
                border: '1.5px solid rgba(200, 200, 200, 0.6)',
                pointerEvents: 'none',
                zIndex: 9999,
                willChange: 'transform',
                backdropFilter: 'blur(2px)',
            }}
        />
    )
}
