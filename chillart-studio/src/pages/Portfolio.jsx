export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Moda',
      category: 'Web Design',
      description: 'Sito e-commerce completo per azienda di moda con sistema di gestione inventario.',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Branding Startup Tech',
      category: 'Branding',
      description: 'Identità visiva completa per una startup di tecnologia innovativa.',
      image: '🚀'
    },
    {
      id: 3,
      title: 'Redesign Sito Aziendale',
      category: 'Web Design',
      description: 'Rinnovamento completo del sito web di un\'azienda di servizi.',
      image: '🏢'
    },
    {
      id: 4,
      title: 'Identità Visiva Ristorante',
      category: 'Branding',
      description: 'Logo, palette colori e materiali di branding per ristorante locale.',
      image: '🍽️'
    },
    {
      id: 5,
      title: 'App Mobile UI/UX',
      category: 'UI/UX Design',
      description: 'Design dell\'interfaccia utente per applicazione mobile di food delivery.',
      image: '📲'
    },
    {
      id: 6,
      title: 'Campagna Social',
      category: 'Social Media',
      description: 'Creazione di grafiche coerenti per campagna marketing su social network.',
      image: '📊'
    }
  ]

  return (
    <main className="page-portfolio">
      <section className="hero">
        <h1>Portfolio</h1>
        <p>I nostri progetti e realizzazioni più recenti</p>
      </section>

      <section className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-image">{project.image}</div>
            <h3>{project.title}</h3>
            <p className="category">{project.category}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
