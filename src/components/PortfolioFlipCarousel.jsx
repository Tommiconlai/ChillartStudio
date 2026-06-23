import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Carica automaticamente tutte le immagini dalla cartella portfolio
const imageModules = import.meta.glob(
  '../assets/portfolio/*.{png,jpg,jpeg,webp,gif,svg,PNG,JPG,JPEG,WEBP}',
  { eager: true }
)
const images = Object.values(imageModules).map((m) => m.default)

export default function PortfolioFlipCarousel() {
  const [current, setCurrent] = useState(0)
  const [nextIdx, setNextIdx] = useState(images.length > 1 ? 1 : 0)
  const [flipAngle, setFlipAngle] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const pendingNext = useRef(0)

  if (images.length === 0) {
    return (
      <div className="flip-carousel flip-carousel--empty">
        <p>Aggiungi le immagini nella cartella <code>src/assets/portfolio/</code> per vederle qui.</p>
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div className="flip-carousel">
        <div className="flip-carousel__stage">
          <div className="flip-carousel__single">
            <img src={images[0]} alt="Portfolio 1" className="flip-carousel__img" />
          </div>
        </div>
      </div>
    )
  }

  const goTo = (newIdx, forward) => {
    if (isAnimating) return
    pendingNext.current = newIdx
    setNextIdx(newIdx)
    setFlipAngle(forward ? 180 : -180)
    setIsAnimating(true)
  }

  const handleNext = () => {
    goTo((current + 1) % images.length, true)
  }

  const handlePrev = () => {
    goTo((current - 1 + images.length) % images.length, false)
  }

  const handleDot = (i) => {
    if (i === current || isAnimating) return
    goTo(i, i > current)
  }

  const handleFlipComplete = () => {
    setCurrent(pendingNext.current)
    setNextIdx((pendingNext.current + 1) % images.length)
    setFlipAngle(0)
    setIsAnimating(false)
  }

  return (
    <div className="flip-carousel">
      {/* Freccia sinistra */}
      <button
        className="flip-carousel__btn flip-carousel__btn--prev"
        onClick={handlePrev}
        aria-label="Immagine precedente"
      >
        <ChevronLeft style={{ width: '1.75rem', height: '1.75rem' }} />
      </button>

      {/* Stage con effetto 3D */}
      <div className="flip-carousel__stage">
        <motion.div
          className="flip-carousel__flipper"
          animate={{ rotateY: flipAngle }}
          transition={
            isAnimating
              ? { duration: 0.75, ease: [0.4, 0, 0.2, 1] }
              : { duration: 0 }
          }
          onAnimationComplete={isAnimating ? handleFlipComplete : undefined}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Fronte: immagine corrente */}
          <div className="flip-carousel__face flip-carousel__face--front">
            <img
              src={images[current]}
              alt={`Portfolio ${current + 1}`}
              className="flip-carousel__img"
            />
          </div>

          {/* Retro: immagine successiva */}
          <div className="flip-carousel__face flip-carousel__face--back">
            <img
              src={images[nextIdx]}
              alt={`Portfolio ${nextIdx + 1}`}
              className="flip-carousel__img"
            />
          </div>
        </motion.div>
      </div>

      {/* Freccia destra */}
      <button
        className="flip-carousel__btn flip-carousel__btn--next"
        onClick={handleNext}
        aria-label="Immagine successiva"
      >
        <ChevronRight style={{ width: '1.75rem', height: '1.75rem' }} />
      </button>

      {/* Indicatori + contatore */}
      <div className="flip-carousel__footer">
        <div className="flip-carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`flip-carousel__dot${i === current ? ' active' : ''}`}
              onClick={() => handleDot(i)}
              aria-label={`Immagine ${i + 1}`}
            />
          ))}
        </div>
        <span className="flip-carousel__counter">
          {current + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
