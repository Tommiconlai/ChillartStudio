export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Creazione Siti Web',
      description: 'Sviluppiamo siti web moderni, responsivi e performanti per presentare al meglio il tuo brand online.',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Identità Visiva',
      description: 'Creiamo loghi, palette colori e linee guida visive che rappresentano perfettamente la tua azienda.',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Branding',
      description: 'Sviluppiamo strategie di branding complete per costruire un\'identità aziendale forte e riconoscibile.',
      icon: '✨'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Progettiamo interfacce intuitive e esperienze utente eccellenti per massimizzare l\'engagement.',
      icon: '🎯'
    },
    {
      id: 5,
      title: 'Social Media Design',
      description: 'Creiamo contenuti visivi e grafiche per le tue piattaforme social media.',
      icon: '📱'
    },
    {
      id: 6,
      title: 'Consulenza Creativa',
      description: 'Forniamo consulenza strategica per aiutarti a definire la tua visione creativa.',
      icon: '💡'
    }
  ]

  return (
    <main className="page-services">
      <section className="hero">
        <h1>I Nostri Servizi</h1>
        <p>Soluzioni creative complete per il tuo business</p>
      </section>

      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
