import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SITE } from '../config/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const navItems = [
    { key: 'home', label: t('nav.home'), path: '/' },
    { key: 'services', label: t('nav.services'), path: '/services' },
    { key: 'portfolio', label: t('nav.portfolio'), path: '/portfolio' },
    { key: 'about', label: t('nav.about'), path: '/about' },
    { key: 'contact', label: t('nav.contact'), path: '/contact' },
  ]

  return (
    <footer className="bg-zinc-950 text-secondary border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white tracking-tighter">
              CHILLART<span className="text-accent">.</span>
            </h3>
            <p className="text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.navigation')}</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{SITE.city}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-sm text-zinc-600">
          <p>&copy; {currentYear} Chillart Studio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
