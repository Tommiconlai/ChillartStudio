import { useRef, useEffect, useState } from 'react'

export default function CursorDot() {
    const dotDomRef = useRef(null)
    const dotPos = useRef({ x: -100, y: -100 })
    const targetPos = useRef({ x: -100, y: -100 })
    const rafRef = useRef(null)
    const isHovering = useRef(false)
    const scalePos = useRef(1)

    // Mostra il cursore solo su device con puntatore preciso e hover reale
    // (mouse/trackpad). Esclude touch/mobile, dove hover non esiste.
    const [hasPointer] = useState(() =>
        typeof window !== 'undefined' &&
        window.matchMedia('(hover: hover) and (pointer: fine)').matches
    )

    useEffect(() => {
        if (!hasPointer) return

        const handleMouseMove = (e) => {
            targetPos.current = { x: e.clientX, y: e.clientY }
        }

        window.addEventListener('mousemove', handleMouseMove)

        const handleMouseOver = (e) => {
            const interactable = e.target.closest('a, button, [role="button"], input, textarea, select, label')
            isHovering.current = !!interactable
        }

        window.addEventListener('mouseover', handleMouseOver)

        const LERP = 0.1
        const lerp = (a, b, t) => a + (b - a) * t

        const animate = () => {
            dotPos.current.x = lerp(dotPos.current.x, targetPos.current.x, LERP)
            dotPos.current.y = lerp(dotPos.current.y, targetPos.current.y, LERP)

            if (dotDomRef.current) {
                const targetScale = isHovering.current ? 1 : 0.8
                scalePos.current = lerp(scalePos.current, targetScale, 0.1)
                dotDomRef.current.style.transform = `translate(${dotPos.current.x - 20}px, ${dotPos.current.y - 20}px) scale(${scalePos.current})`
            }

            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            cancelAnimationFrame(rafRef.current)
        }
    }, [hasPointer])

    if (!hasPointer) return null

    return (
        <div
            ref={dotDomRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(87, 87, 87, 0.5)',
                border: '1.5px solid rgba(255, 255, 255, 0.8)',
                pointerEvents: 'none',
                zIndex: 9999,
                willChange: 'transform',
                backdropFilter: 'blur(2px)',
            }}
        />
    )
}
