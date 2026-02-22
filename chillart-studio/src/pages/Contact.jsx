import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SITE } from '../config/siteConfig'

export default function Contact() {
  const { t } = useTranslation()

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const contactItems = [
    { icon: MapPin, title: t('contact.address'), content: SITE.city },
    { icon: Mail, title: t('contact.email'), content: SITE.email, link: `mailto:${SITE.email}` },
    { icon: Phone, title: t('contact.phone'), content: SITE.phone, link: `tel:${SITE.phone}` },
    { icon: Clock, title: t('contact.hours'), content: t('contact.hoursValue') },
  ]

  return (
    <main className="bg-background min-h-screen text-primary pt-32 px-6 pb-20 flex flex-col items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-center"
      >
        <motion.section variants={item} className="mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">{t('contact.pageTitle')}</h1>
          <p className="text-xl text-secondary">{t('contact.pageSubtitle')}</p>
        </motion.section>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center bg-zinc-900/50 p-12 rounded-2xl border border-zinc-800">
          {contactItems.map((info, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-accent text-2xl mb-2 border border-zinc-800">
                <info.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-secondary hover:text-accent transition-colors text-lg">{info.content}</a>
                ) : (
                  <p className="text-secondary text-lg">{info.content}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
