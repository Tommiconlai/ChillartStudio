import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const currentLang = i18n.language?.startsWith('it') ? 'it' : 'en'

    const toggle = () => {
        i18n.changeLanguage(currentLang === 'en' ? 'it' : 'en')
    }

    return (
        <button
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors border border-zinc-700 hover:border-zinc-500 rounded-full px-3 py-1.5"
            aria-label="Switch language"
        >
            <span className={currentLang === 'en' ? 'text-white' : ''}>EN</span>
            <span className="text-zinc-600">/</span>
            <span className={currentLang === 'it' ? 'text-white' : ''}>IT</span>
        </button>
    )
}
