import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { navItems } from '../nav'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useTranslation()
    const location = useLocation()
    const items = navItems(t)

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

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="header__inner">

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    {items.map((item) => (
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
                            {items.map((item) => (
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