import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { navItems } from '../nav'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useTranslation()
    const items = navItems(t)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="header__inner">

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    {items.map((item) => (
                        <NavLink key={item.key} to={item.path} end={item.path === '/'} className="nav-link">
                            {item.label}
                        </NavLink>
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
                                <NavLink
                                    key={item.key}
                                    to={item.path}
                                    end={item.path === '/'}
                                    className="mobile-menu__link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header