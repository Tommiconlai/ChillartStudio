import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Grazie per il tuo messaggio! Ti contatteremo presto.')
  }

  return (
    <main className="page-contact">
      <section className="hero">
        <h1>Contattaci</h1>
        <p>Siamo pronti ad ascoltare la tua idea</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Indirizzo</h3>
            <p>Via Esempio 123, 00100<br />Roma, Italia</p>
          </div>
          <div className="info-item">
            <h3>📧 Email</h3>
            <p><a href="mailto:info@chillart.com">info@chillart.com</a></p>
          </div>
          <div className="info-item">
            <h3>📞 Telefono</h3>
            <p><a href="tel:+39061234567">+39 06 1234567</a></p>
          </div>
          <div className="info-item">
            <h3>🕐 Orari</h3>
            <p>Lun - Ven: 09:00 - 18:00<br />Sab - Dom: Chiuso</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Inviaci un messaggio</h2>
          
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Oggetto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Invia Messaggio</button>
        </form>
      </section>
    </main>
  )
}
