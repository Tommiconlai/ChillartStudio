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

    // Close mobile menu on route change
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter">
                    CHILLART<span className="text-accent">.</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            to={item.path}
                            className="text-sm font-medium uppercase tracking-widest text-secondary hover:text-white transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <LanguageSwitcher />
                </nav>

                {/* Mobile: Language switcher + burger */}
                <div className="md:hidden flex items-center gap-3">
                    <LanguageSwitcher />
                    <button
                        className="text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
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
                            className="absolute top-full left-0 right-0 bg-background border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    to={item.path}
                                    className="text-lg font-display font-bold text-white hover:text-accent transition-colors"
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
    );
}

export default Header