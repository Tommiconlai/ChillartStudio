import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setErrorMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore nell\'invio del messaggio')
      }

      setSuccessMessage('✅ Messaggio inviato con successo! Ti contatteremo presto.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Nascondi il messaggio di successo dopo 5 secondi
      setTimeout(() => setSuccessMessage(''), 5000)
    } catch (error) {
      console.error('Errore:', error)
      setErrorMessage(`❌ ${error.message}. Assicurati che il server sia in esecuzione (npm run server)`)
    } finally {
      setLoading(false)
    }
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
            <p><a href="mailto:grafichenelchill@gmail.com">grafichenelchill@gmail.com</a></p>
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
          
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Invio in corso...' : 'Invia Messaggio'}
          </button>
        </form>
      </section>
    </main>
  )
}
