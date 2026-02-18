export default function About() {
  return (
    <main className="page-about">
      <section className="hero">
        <h1>Chi Siamo</h1>
        <p>La storia di Chillart Studio</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>La nostra missione</h2>
          <p>
            Chillart Studio è un'agenzia di comunicazione creativa nata dalla passione per il design
            e lo sviluppo web. I nostri founder credono che ogni brand ha una storia unica da raccontare,
            e il nostro lavoro è proprio quello di aiutare a raccontarla nel modo più efficace e affascinante.
          </p>
          <p>
            Da più di 5 anni lavoriamo con aziende di diverse dimensioni, dalle startup alle PMI,
            aiutandole a costruire la loro identità visiva e a crescere online.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>150+</h3>
            <p>Progetti completati</p>
          </div>
          <div className="stat">
            <h3>90+</h3>
            <p>Clienti soddisfatti</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Anni di esperienza</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Il nostro team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h3>Mario Rossi</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💻</div>
            <h3>Anna Bianchi</h3>
            <p>Web Developer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍🎨</div>
            <h3>Luca Verdi</h3>
            <p>Graphic Designer</p>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>I nostri valori</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4>🎯 Passion</h4>
            <p>Amiamo quello che facciamo e si vede nei nostri risultati.</p>
          </div>
          <div className="value-item">
            <h4>💡 Innovazione</h4>
            <p>Restiamo sempre aggiornati sulle ultime tendenze e tecnologie.</p>
          </div>
          <div className="value-item">
            <h4>🤝 Collaborazione</h4>
            <p>Lavoriamo insieme ai nostri clienti come partner nel successo.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
