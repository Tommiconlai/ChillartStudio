import { motion } from 'framer-motion'
import { ShoppingBag, Rocket, Building2, Utensils, Smartphone, BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PortfolioFlipCarousel from '../components/PortfolioFlipCarousel'

export default function Portfolio() {
  const { t } = useTranslation()

  const icons = [ShoppingBag, Rocket, Building2, Utensils, Smartphone, BarChart3]
  const projects = t('portfolio.projects', { returnObjects: true })

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="page page--padded">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-7xl px-6"
      >
        <motion.section variants={item} className="page-header">
          <h1 className="page-header__title">{t('portfolio.pageTitle')}</h1>
          <p className="page-header__subtitle">{t('portfolio.pageSubtitle')}</p>
        </motion.section>

        {/* Carosello con flip 3D */}
        <motion.section variants={item} style={{ marginBottom: '6rem' }}>
          <PortfolioFlipCarousel />
        </motion.section>
      </motion.div>
    </main>
  )
}
