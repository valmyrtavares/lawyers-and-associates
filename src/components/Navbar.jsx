import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-header glass">
      <div className="container navbar-container">
        <a href="#" className="logo-link">
          <span className="logo-dot"></span>
          <span className="gradient-text">RobertoApp</span>
        </a>

        {/* Mobile menu toggle */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links glass ${isOpen ? 'active' : ''}`}>
          <li><a href="#features" onClick={() => setIsOpen(false)}>Recursos</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contato</a></li>
          <li>
            <a 
              href="#get-started" 
              className="btn btn-primary btn-glow"
              onClick={() => setIsOpen(false)}
            >
              Baixar App
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
