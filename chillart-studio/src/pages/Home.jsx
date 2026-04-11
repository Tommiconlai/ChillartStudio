import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Palette, Wand2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRef, useEffect, useCallback } from 'react'
import logo from '../assets/LogoChillart.png'

export default function Home() {
  const { t } = useTranslation()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const serviceIcons = [Globe, Palette, Wand2]
  const serviceKeys = ['web', 'brand', 'strategy']
  const pillarKeys = ['strategic', 'creative', 'technical']

  const heroRef = useRef(null)
  const blobEl = useRef(null)
  const blobPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const mx = (e.clientX - rect.left) / rect.width
      const my = (e.clientY - rect.top) / rect.height
      const clampedMx = Math.max(0, Math.min(1, mx))
      const clampedMy = Math.max(0, Math.min(1, my))
      targetPos.current = {
        x: rect.left + (0.15 + (1 - clampedMx) * 0.70) * rect.width,
        y: rect.top + (0.15 + (1 - clampedMy) * 0.70) * rect.height,
      }
    }
  }, [])

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      blobPos.current.x = lerp(blobPos.current.x, targetPos.current.x, 0.15)
      blobPos.current.y = lerp(blobPos.current.y, targetPos.current.y, 0.15)

      if (blobEl.current) {
        blobEl.current.style.transform = `translate(${blobPos.current.x - 250}px, ${blobPos.current.y - 250}px)`
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <main className="page">
      {/* ── Hero ── */}
      <section ref={heroRef} className="hero">
        <div
          ref={blobEl}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: 500, height: 500,
            background: 'rgba(159, 177, 0, 0.5)',
            borderRadius: '50%',
            filter: 'blur(120px)',
            pointerEvents: 'none',
            willChange: 'transform',
            zIndex: 0,
          }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero__content"
        >
          <img src={logo} alt="Logo Chillart" className="hero__logo" />

          <motion.h1 variants={item} className="hero__title">
            {t('home.heroTitle')}
          </motion.h1>

          <motion.p variants={item} className="hero__subtitle">
            {t('home.heroSubtitle')}
          </motion.p>

          <motion.div variants={item}>
            <Link to="/contact" className="hero__cta">
              {t('home.heroCta')}
              <ArrowRight className="hero__cta-icon" style={{ width: '1rem', height: '1rem' }} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="scroll-indicator"
        >
          <span className="scroll-indicator__label">{t('home.scroll')}</span>
          <div className="scroll-indicator__line" />
        </motion.div>
      </section>

      {/* ── Expertise / Services ── */}
      <section className="section-expertise">
        <div className="container-7xl px-6">
          <div className="section-expertise__header">
            <h2 className="section-expertise__title">{t('home.expertiseTitle')}</h2>
            <Link to="/services" className="section-expertise__link">
              {t('home.viewAllServices')} <ArrowRight style={{ width: '1rem', height: '1rem' }} />
            </Link>
          </div>

          <div className="grid-3">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[index]
              return (
                <div key={key} className="card card--lift">
                  <Icon className="card__icon" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <h3 className="card__title">{t(`home.services.${key}.title`)}</h3>
                  <p className="card__text">{t(`home.services.${key}.desc`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Pillars / Statement ── */}
      <section className="section-pillars">
        <div className="container-7xl px-6 text-center">
          <div className="grid-3">
            {pillarKeys.map((key) => (
              <div key={key} className="pillar">
                <h4 className="pillar__title">{t(`home.pillars.${key}.title`)}</h4>
                <p className="pillar__text">{t(`home.pillars.${key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}