import { motion } from 'framer-motion'
import { ShoppingBag, Rocket, Building2, Utensils, Smartphone, BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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

        <motion.section variants={item} className="grid-2-3">
          {projects.map((project, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="project-card">
                <div className="project-card__body">
                  <div className="project-card__icon-wrap">
                    <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <p className="project-card__category">{project.category}</p>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                </div>
                <div className="project-card__bar" />
              </div>
            )
          })}
        </motion.section>
      </motion.div>
    </main>
  )
}
