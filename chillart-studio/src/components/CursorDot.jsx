import { useRef, useEffect } from 'react'

export default function CursorDot() {
    const dotDomRef = useRef(null)
    const dotPos = useRef({ x: -100, y: -100 })
    const targetPos = useRef({ x: -100, y: -100 })
    const rafRef = useRef(null)
    const isHovering = useRef(false)
    const scalePos = useRef(1)

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetPos.current = { x: e.clientX, y: e.clientY }
        }

        window.addEventListener('mousemove', handleMouseMove)

        const handleMouseOver = (e) => {
            const interactable = e.target.closest('a, button, [role="button"], input, textarea, select, label')
            isHovering.current = !!interactable
            if (dotDomRef.current) {
                dotDomRef.current.style.borderColor = interactable ? '#0059af' : 'rgba(200, 200, 200, 0.6)'
            }
        }

        window.addEventListener('mouseover', handleMouseOver)

        const LERP = 0.1
        const lerp = (a, b, t) => a + (b - a) * t

        const animate = () => {

            dotPos.current.x = lerp(dotPos.current.x, targetPos.current.x, LERP)
            dotPos.current.y = lerp(dotPos.current.y, targetPos.current.y, LERP)

            if (dotDomRef.current) {
                const targetScale = isHovering.current ? 0.8 : 1
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
    }, [])

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
                background: 'rgba(160, 160, 160, 0.1)',
                border: '1.5px solid rgba(200, 200, 200, 0.6)',
                pointerEvents: 'none',
                zIndex: 9999,
                willChange: 'transform',
                backdropFilter: 'blur(2px)',
            }}
        />
    )
}