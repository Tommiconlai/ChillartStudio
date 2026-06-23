import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { container, item } from '../motion'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main className="page page--padded" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-4xl px-6 text-center"
      >
        <motion.p variants={item} className="notfound__code">404</motion.p>
        <motion.h1 variants={item} className="page-header__title">{t('notFound.title')}</motion.h1>
        <motion.p variants={item} className="page-header__subtitle" style={{ marginBottom: '2.5rem' }}>
          {t('notFound.text')}
        </motion.p>
        <motion.div variants={item}>
          <Link to="/" className="hero__cta">
            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            {t('notFound.cta')}
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
