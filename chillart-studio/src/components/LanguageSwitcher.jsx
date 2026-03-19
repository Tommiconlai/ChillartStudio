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
            className="lang-switcher"
            aria-label="Switch language"
        >
            <span className={currentLang === 'en' ? 'lang-switcher__active' : ''}>EN</span>
            <span className="lang-switcher__sep">/</span>
            <span className={currentLang === 'it' ? 'lang-switcher__active' : ''}>IT</span>
        </button>
    )
}
