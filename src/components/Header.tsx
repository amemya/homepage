import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
    const location = useLocation()

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">Portfolio</span>
                </Link>
                <nav className="nav">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/works"
                        className={`nav-link ${location.pathname === '/works' ? 'active' : ''}`}
                    >
                        Works
                    </Link>
                    <Link
                        to="/contact"
                        className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
