import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Chillart Studio</h3>
          <p>Agenzia di comunicazione specializzata in creazione web e identità visiva.</p>
        </div>

        <div className="footer-section">
          <h4>Navigazione</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Servizi</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">Chi Siamo</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contatti</h4>
          <ul>
            <li><a href="mailto:info@chillart.com">info@chillart.com</a></li>
            <li><a href="tel:+39061234567">+39 06 1234567</a></li>
            <li>Via Esempio 123, Roma</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Seguici</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Chillart Studio. Tutti i diritti riservati.</p>
      </div>
    </footer>
  )
}
