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
    <main className="bg-background min-h-screen text-primary pt-32 px-6 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        <motion.section variants={item} className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">{t('services.pageTitle')}</h1>
          <p className="text-xl text-secondary">{t('services.pageSubtitle')}</p>
        </motion.section>

        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group">
                <Icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </motion.section>
      </motion.div>
    </main>
  )
}
