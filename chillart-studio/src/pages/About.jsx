import { motion } from 'framer-motion'
import { Users, Target, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import tommiPhoto from '../assets/Tommi_CV.png'

export default function About() {
  const { t } = useTranslation()

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const stats = [
    { label: t('about.stats.projects'), value: '150+' },
    { label: t('about.stats.clients'), value: '90+' },
    { label: t('about.stats.years'), value: '5+' },
    { label: t('about.stats.awards'), value: '12' },
  ]

  const team = t('about.team', { returnObjects: true })
  const teamPhotos = [tommiPhoto, tommiPhoto, tommiPhoto]

  const valueIcons = [Target, Zap, Users]
  const values = t('about.values', { returnObjects: true })

  return (
    <main className="bg-background min-h-screen text-primary pt-32 px-6 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <motion.section variants={item} className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">{t('about.pageTitle')}</h1>
          <p className="text-xl text-secondary">{t('about.pageSubtitle')}</p>
        </motion.section>

        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">{t('about.missionTitle')}</h2>
            <p className="text-secondary leading-relaxed">{t('about.missionP1')}</p>
            <p className="text-secondary leading-relaxed">{t('about.missionP2')}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-32">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">{t('about.teamTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center hover:border-zinc-700 transition-colors">
                <img
                  src={teamPhotos[i]}
                  alt={member.name}
                  className="w-26 h-30 object-cover mx-auto mb-4"
                />
                <h3 className="font-display font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-secondary text-sm uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item}>
          <h2 className="font-display text-3xl font-bold mb-12 text-center">{t('about.valuesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const Icon = valueIcons[i]
              return (
                <div key={i} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-900">
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-bold mb-2">{val.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}
