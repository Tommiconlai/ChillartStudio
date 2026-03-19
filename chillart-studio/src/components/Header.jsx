import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useTranslation()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    const navItems = [
        { key: 'home', label: t('nav.home'), path: '/' },
        { key: 'services', label: t('nav.services'), path: '/services' },
        { key: 'portfolio', label: t('nav.portfolio'), path: '/portfolio' },
        { key: 'about', label: t('nav.about'), path: '/about' },
        { key: 'contact', label: t('nav.contact'), path: '/contact' },
    ]

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="header__inner">
                <Link to="/" className="header__logo">
                    CHILLART<span className="accent">.</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    {navItems.map((item) => (
                        <Link key={item.key} to={item.path} className="nav-link">
                            {item.label}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                </nav>

                {/* Mobile: Language switcher + burger */}
                <div className="header__mobile-controls">
                    <LanguageSwitcher />
                    <button className="btn-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mobile-menu"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    to={item.path}
                                    className="mobile-menu__link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header