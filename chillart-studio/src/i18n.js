import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    en: {
        translation: {
            nav: {
                home: 'Home',
                services: 'Services',
                portfolio: 'Portfolio',
                about: 'About',
                contact: 'Contact',
            },
            home: {
                heroTitle: 'We Craft Digital Experiences.',
                heroSubtitle:
                    'Chillart Studio is a digital design agency combining strategy, branding, and technology to build brands that matter.',
                heroCta: 'Start Project',
                scroll: 'Scroll',
                expertiseTitle: 'Our Expertise',
                viewAllServices: 'View all services',
                services: {
                    web: { title: 'Web Development', desc: 'Performance-driven websites crafted with modern technologies.' },
                    brand: { title: 'Brand Identity', desc: "Distinctive visual systems that tell your brand's unique story." },
                    strategy: { title: 'Creative Strategy', desc: 'Data-backed strategies to position your brand for growth.' },
                },
                statementTitle: 'Driven by results.\nFueled by passion.',
                pillars: {
                    strategic: { title: 'Strategic', text: "We don't just design pretty things. We build systems that work for your business goals." },
                    creative: { title: 'Creative', text: 'Pushing boundaries to create memorable experiences that stand out in a crowded market.' },
                    technical: { title: 'Technical', text: 'Clean code, fast load times, and flawless performance across all devices.' },
                },
            },
            services: {
                pageTitle: 'Our Services',
                pageSubtitle: 'Comprehensive creative solutions for your business.',
                items: [
                    { title: 'Web Development', description: 'We build modern, responsive, and performance-driven websites to showcase your brand online.' },
                    { title: 'Visual Identity', description: 'Logos, color palettes, and visual guidelines that perfectly represent your company.' },
                    { title: 'Branding', description: 'Complete branding strategies to build a strong and recognizable corporate identity.' },
                    { title: 'UI/UX Design', description: 'Intuitive interfaces and excellent user experiences to maximize engagement.' },
                    { title: 'Social Media Design', description: 'Visual content and graphics for your social media platforms.' },
                    { title: 'Creative Consulting', description: 'Strategic consulting to help you define your creative vision.' },
                ],
            },
            portfolio: {
                pageTitle: 'Our Work',
                pageSubtitle: 'A selection of our recent projects.',
                projects: [
                    { title: 'Fashion E-commerce', category: 'Web Design', description: 'Complete e-commerce solution for a fashion brand with inventory management.' },
                    { title: 'Tech Startup Branding', category: 'Branding', description: 'Full visual identity for an innovative technology startup.' },
                    { title: 'Corporate Renewal', category: 'Web Design', description: 'Complete website redesign for a service sector company.' },
                    { title: 'Restaurant Identity', category: 'Branding', description: 'Logo, color palette, and branding materials for a local restaurant.' },
                    { title: 'Food Delivery App', category: 'UI/UX Design', description: 'User interface design for a mobile food delivery application.' },
                    { title: 'Social Campaign', category: 'Social Media', description: 'Consistent graphics creation for a social network marketing campaign.' },
                ],
            },
            about: {
                pageTitle: 'About Us',
                pageSubtitle: 'The story behind the studio.',
                missionTitle: 'Our Mission',
                missionP1: 'Chillart Studio was born from a simple idea: design should be both beautiful and functional. We believe that every brand has a unique story, and our job is to tell it in the most compelling way possible.',
                missionP2: "For over 5 years, we've partnered with ambitious startups and established companies to build digital products that people love to use.",
                stats: {
                    projects: 'Projects',
                    clients: 'Clients',
                    years: 'Years',
                    awards: 'Awards',
                },
                teamTitle: 'The Team',
                team: [
                    { name: 'Alessandro Vecchiet', role: 'Creative Director' },
                    { name: 'Gabriele Tomasso', role: 'Web Developer' },
                    { name: 'Luca Brigato', role: 'Visual Designer' },
                ],
                valuesTitle: 'Core Values',
                values: [
                    { title: 'Passion', desc: 'We love what we do and it shows in every pixel.' },
                    { title: 'Innovation', desc: 'Always exploring new technologies and trends.' },
                    { title: 'Collaboration', desc: 'We work with you, not just for you.' },
                ],
            },
            contact: {
                pageTitle: 'Contact Us',
                pageSubtitle: 'Come visit us or get in touch.',
                address: 'Address',
                email: 'Email',
                phone: 'Phone',
                hours: 'Hours',
                hoursValue: 'Mon - Fri: 09:00 - 18:00',
            },
            footer: {
                tagline: 'We are a digital agency focused on creating meaningful experiences that connect brands with their audience.',
                navigation: 'Navigation',
                contact: 'Contact',
                followUs: 'Follow Us',
                rights: 'All rights reserved.',
            },
        },
    },
    it: {
        translation: {
            nav: {
                home: 'Home',
                services: 'Servizi',
                portfolio: 'Portfolio',
                about: 'Chi Siamo',
                contact: 'Contatti',
            },
            home: {
                heroTitle: 'Creiamo Esperienze Digitali.',
                heroSubtitle:
                    'Chillart Studio è un\'agenzia di design digitale che unisce strategia, branding e tecnologia per costruire brand che contano.',
                heroCta: 'Inizia il Progetto',
                scroll: 'Scorri',
                expertiseTitle: 'Le Nostre Competenze',
                viewAllServices: 'Vedi tutti i servizi',
                services: {
                    web: { title: 'Web Development', desc: 'Siti web moderni e performanti realizzati con tecnologie all\'avanguardia.' },
                    brand: { title: 'Brand Identity', desc: 'Sistemi visivi distintivi che raccontano la storia unica del tuo brand.' },
                    strategy: { title: 'Strategia Creativa', desc: 'Strategie basate sui dati per posizionare il tuo brand e favorire la crescita.' },
                },
                statementTitle: 'Guidati dai risultati.\nAlimentati dalla passione.',
                pillars: {
                    strategic: { title: 'Strategici', text: 'Non progettiamo solo belle cose. Costruiamo sistemi che funzionano per i tuoi obiettivi di business.' },
                    creative: { title: 'Creativi', text: 'Spingiamo i confini per creare esperienze memorabili che si distinguono in un mercato affollato.' },
                    technical: { title: 'Tecnici', text: 'Codice pulito, tempi di caricamento rapidi e prestazioni impeccabili su tutti i dispositivi.' },
                },
            },
            services: {
                pageTitle: 'I Nostri Servizi',
                pageSubtitle: 'Soluzioni creative complete per il tuo business.',
                items: [
                    { title: 'Web Development', description: 'Realizziamo siti web moderni, responsivi e performanti per presentare il tuo brand online.' },
                    { title: 'Identità Visiva', description: 'Loghi, palette colori e linee guida visive che rappresentano perfettamente la tua azienda.' },
                    { title: 'Branding', description: 'Strategie di branding complete per costruire un\'identità aziendale forte e riconoscibile.' },
                    { title: 'UI/UX Design', description: 'Interfacce intuitive ed eccellenti esperienze utente per massimizzare il coinvolgimento.' },
                    { title: 'Social Media Design', description: 'Contenuti visivi e grafiche per le tue piattaforme social media.' },
                    { title: 'Consulenza Creativa', description: 'Consulenza strategica per aiutarti a definire la tua visione creativa.' },
                ],
            },
            portfolio: {
                pageTitle: 'I Nostri Lavori',
                pageSubtitle: 'Una selezione dei nostri progetti recenti.',
                projects: [
                    { title: 'E-commerce Fashion', category: 'Web Design', description: 'Soluzione e-commerce completa per un brand fashion con gestione dell\'inventario.' },
                    { title: 'Branding Tech Startup', category: 'Branding', description: 'Identità visiva completa per una startup tecnologica innovativa.' },
                    { title: 'Rinnovamento Corporate', category: 'Web Design', description: 'Redesign completo del sito web per un\'azienda del settore servizi.' },
                    { title: 'Identità Ristorante', category: 'Branding', description: 'Logo, palette colori e materiali di branding per un ristorante locale.' },
                    { title: 'App Food Delivery', category: 'UI/UX Design', description: 'Design dell\'interfaccia utente per un\'applicazione mobile di food delivery.' },
                    { title: 'Campagna Social', category: 'Social Media', description: 'Creazione di grafiche coerenti per una campagna di marketing sui social network.' },
                ],
            },
            about: {
                pageTitle: 'Chi Siamo',
                pageSubtitle: 'La storia dietro allo studio.',
                missionTitle: 'La Nostra Missione',
                missionP1: 'Chillart Studio è nato da un\'idea semplice: il design dovrebbe essere allo stesso tempo bello e funzionale. Crediamo che ogni brand abbia una storia unica e il nostro compito è raccontarla nel modo più coinvolgente possibile.',
                missionP2: 'Da oltre 5 anni collaboriamo con startup ambiziose e aziende consolidate per costruire prodotti digitali che le persone amano usare.',
                stats: {
                    projects: 'Progetti',
                    clients: 'Clienti',
                    years: 'Anni',
                    awards: 'Premi',
                },
                teamTitle: 'Il Team',
                team: [
                    { name: 'Alessandro Vecchiet', role: 'Direttore Creativo' },
                    { name: 'Gabriele Tomasso', role: 'Web Developer' },
                    { name: 'Luca Brigato', role: 'Visual Designer' },
                ],
                valuesTitle: 'I Nostri Valori',
                values: [
                    { title: 'Passione', desc: 'Amiamo quello che facciamo e si vede in ogni pixel.' },
                    { title: 'Innovazione', desc: 'Sempre alla ricerca di nuove tecnologie e tendenze.' },
                    { title: 'Collaborazione', desc: 'Lavoriamo con te, non solo per te.' },
                ],
            },
            contact: {
                pageTitle: 'Contattaci',
                pageSubtitle: 'Vieni a trovarci o mettiti in contatto.',
                address: 'Indirizzo',
                email: 'Email',
                phone: 'Telefono',
                hours: 'Orari',
                hoursValue: 'Lun - Ven: 09:00 - 18:00',
            },
            footer: {
                tagline: 'Siamo un\'agenzia digitale focalizzata sulla creazione di esperienze significative che connettono i brand con il loro pubblico.',
                navigation: 'Navigazione',
                contact: 'Contatti',
                followUs: 'Seguici',
                rights: 'Tutti i diritti riservati.',
            },
        },
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
