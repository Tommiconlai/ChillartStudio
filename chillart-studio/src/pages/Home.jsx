import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="page-home">
      <section className="hero-home">
        <div className="hero-content">
          <h1>Trasforma la tua idea in realtà</h1>
          <p>Soluzioni creative e innovative per il tuo brand</p>
          <Link to="/contact" className="cta-button">Inizia il tuo progetto</Link>
        </div>
      </section>

      <section className="services-preview">
        <h2>Cosa possiamo fare per te</h2>
        <div className="preview-grid">
          <div className="preview-card">
            <h3>🌐 Siti Web</h3>
            <p>Creiamo siti moderni e performanti che catturano l'essenza del tuo brand.</p>
          </div>
          <div className="preview-card">
            <h3>🎨 Identità Visiva</h3>
            <p>Loghi, palette colori e linee guida che rendono il tuo brand riconoscibile.</p>
          </div>
          <div className="preview-card">
            <h3>✨ Branding</h3>
            <p>Strategie complete per costruire un'identità aziendale forte e duratura.</p>
          </div>
        </div>
        <Link to="/services" className="link-button">Vedi tutti i servizi →</Link>
      </section>

      <section className="why-us">
        <h2>Perché sceglierci</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>Creatività</h4>
            <p>Team di designer e sviluppatori appassionati che amano quello che fanno.</p>
          </div>
          <div className="why-item">
            <h4>Qualità</h4>
            <p>Lavoriamo con attenzione ai dettagli e passion for excellence.</p>
          </div>
          <div className="why-item">
            <h4>Risultati</h4>
            <p>I nostri progetti sono pensati per raggiungere gli obiettivi del tuo business.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
