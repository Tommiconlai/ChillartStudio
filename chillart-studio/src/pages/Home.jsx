import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Palette, Wand2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const serviceIcons = [Globe, Palette, Wand2]
  const serviceKeys = ['web', 'brand', 'strategy']
  const pillarKeys = ['strategic', 'creative', 'technical']

  return (
    <main className="bg-background min-h-screen text-primary selection:bg-accent selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient/blob */}
        <div className="absolute top-3/7 left-3/5 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
          >
            {t('home.heroTitle')}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-light"
          >
            {t('home.heroSubtitle')}
          </motion.p>

          <motion.div variants={item}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-zinc-200 transition-all duration-300"
            >
              {t('home.heroCta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500">{t('home.scroll')}</span>
          <div className="w-px h-12 bg-linear-to-b from-zinc-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{t('home.expertiseTitle')}</h2>
            <Link to="/services" className="text-accent hover:text-white transition-colors flex items-center gap-2">
              {t('home.viewAllServices')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[index]
              return (
                <div key={key} className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-2">
                  <Icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display">{t(`home.services.${key}.title`)}</h3>
                  <p className="text-secondary leading-relaxed">{t(`home.services.${key}.desc`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Us / Statement */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 whitespace-pre-line">{t('home.statementTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {pillarKeys.map((key) => (
              <div key={key} className="border-t border-zinc-800 pt-8">
                <h4 className="text-xl font-bold mb-4 text-white">{t(`home.pillars.${key}.title`)}</h4>
                <p className="text-secondary">{t(`home.pillars.${key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
