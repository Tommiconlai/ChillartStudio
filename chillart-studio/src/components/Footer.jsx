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
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <h3 className="footer__brand-title">
              CHILLART<span className="accent">.</span>
            </h3>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer__col-title">{t('footer.navigation')}</h4>
            <ul className="footer__nav-list">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link to={item.path} className="footer__nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__col-title">{t('footer.contact')}</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Mail className="footer__contact-icon" />
                <a href={`mailto:${SITE.email}`} className="footer__contact-link">{SITE.email}</a>
              </li>
              <li className="footer__contact-item">
                <Phone className="footer__contact-icon" />
                <a href={`tel:${SITE.phone}`} className="footer__contact-link">{SITE.phone}</a>
              </li>
              <li className="footer__contact-item">
                <MapPin className="footer__contact-icon" />
                <span>{SITE.city}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="footer__col-title">{t('footer.followUs')}</h4>
            <div className="footer__socials">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="social-icon">
                  <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Chillart Studio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
