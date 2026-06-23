import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PortfolioFlipCarousel from '../components/PortfolioFlipCarousel'
import { container, item } from '../motion'

export default function Portfolio() {
  const { t } = useTranslation()

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
