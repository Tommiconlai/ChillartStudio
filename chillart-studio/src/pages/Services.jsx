import { motion } from 'framer-motion'
import { Globe, Palette, Wand2, Target, Smartphone, Lightbulb } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()

  const icons = [Globe, Palette, Wand2, Target, Smartphone, Lightbulb]
  const serviceItems = t('services.items', { returnObjects: true })

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
          <h1 className="page-header__title">{t('services.pageTitle')}</h1>
          <p className="page-header__subtitle">{t('services.pageSubtitle')}</p>
        </motion.section>

        <motion.section variants={item} className="grid-2-3">
          {serviceItems.map((service, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="card card--lift">
                <Icon className="card__icon" style={{ width: '2.5rem', height: '2.5rem' }} />
                <h3 className="card__title">{service.title}</h3>
                <p className="card__text">{service.description}</p>
              </div>
            )
          })}
        </motion.section>
      </motion.div>
    </main>
  )
}
