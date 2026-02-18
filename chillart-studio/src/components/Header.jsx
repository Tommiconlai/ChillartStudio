import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">Chillart Studio</h1>
                <nav className="nav-menu">
                    <Link to="/">Home</Link>
                    <Link to="/services">Servizi</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/about">Chi Siamo</Link>
                    <Link to="/contact">Contatti</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header