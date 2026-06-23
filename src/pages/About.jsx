import { motion } from 'framer-motion'
import { Users, Target, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import tommiPhoto from '../assets/Tommi_CV.png'
import { container, item } from '../motion'

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { label: t('about.stats.projects'), value: '150+' },
    { label: t('about.stats.clients'), value: '90+' },
    { label: t('about.stats.years'), value: '5+' },
    { label: t('about.stats.awards'), value: '12' },
  ]

  const team = t('about.team', { returnObjects: true })
  const teamPhotos = Array(3).fill(tommiPhoto)

  const valueIcons = [Target, Zap, Users]
  const values = t('about.values', { returnObjects: true })

  return (
    <main className="page page--padded">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-4xl px-6"
      >
        {/* Page Header */}
        <motion.section variants={item} className="page-header">
          <h1 className="page-header__title">{t('about.pageTitle')}</h1>
          <p className="page-header__subtitle">{t('about.pageSubtitle')}</p>
        </motion.section>

        {/* Mission + Stats */}
        <motion.section variants={item} className="about-section grid-2" style={{ alignItems: 'center' }}>
          <div className="about-mission__text">
            <h2 className="font-display" style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              {t('about.missionTitle')}
            </h2>
            <p className="about-mission__p">{t('about.missionP1')}</p>
            <p className="about-mission__p" style={{ marginTop: '1.5rem' }}>{t('about.missionP2')}</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-card__value">{stat.value}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section variants={item} className="about-section">
          <h2 className="page-header__title" style={{ marginBottom: '3rem' }}>{t('about.teamTitle')}</h2>
          <div className="grid-3">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <img src={teamPhotos[i]} alt={member.name} className="team-card__img" />
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section variants={item}>
          <h2 className="page-header__title" style={{ marginBottom: '3rem' }}>{t('about.valuesTitle')}</h2>
          <div className="grid-3">
            {values.map((val, i) => {
              const Icon = valueIcons[i]
              return (
                <div key={i} className="card card--lift">
                  <Icon className="card__icon" style={{ width: '2rem', height: '2rem' }} />
                  <h4 className="card__title" style={{ fontSize: '1rem' }}>{val.title}</h4>
                  <p className="card__text" style={{ fontSize: '0.875rem' }}>{val.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}
