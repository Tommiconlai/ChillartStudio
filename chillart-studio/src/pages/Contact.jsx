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
    <main className="page page--padded" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-4xl w-full px-6 text-center"
      >
        <motion.section variants={item} className="page-header">
          <h1 className="page-header__title">{t('contact.pageTitle')}</h1>
          <p className="page-header__subtitle">{t('contact.pageSubtitle')}</p>
        </motion.section>

        <motion.div variants={item} className="contact-grid">
          {contactItems.map((info, i) => (
            <div key={i} className="contact-item">
              <div className="contact-icon-wrap">
                <info.icon style={{ width: '2rem', height: '2rem' }} />
              </div>
              <div>
                <h3 className="contact-item__title">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-item__link">{info.content}</a>
                ) : (
                  <p className="contact-item__text">{info.content}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
