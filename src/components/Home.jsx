import React, { useState } from 'react';
import lawyer1 from '../assets/images/lawyer1.png';
import lawyer2 from '../assets/images/lawyer2.png';
import lawyer3 from '../assets/images/lawyer3.png';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const lawyers = [
    {
      name: "Dr. Roberto Zatz",
      role: "Sócio Fundador | Direito Tributário & Societário",
      desc: "Especialista em planejamento sucessório e reestruturação societária com mais de 20 anos de atuação em litígios de alta complexidade.",
      img: lawyer1
    },
    {
      name: "Dra. Letícia Simonacci",
      role: "Sócia | Direito Civil & Contratos",
      desc: "Mestre em Direito de Família e Sucessões, com foco em negociações estratégicas de contratos corporativos internacionais.",
      img: lawyer2
    },
    {
      name: "Dr. Arthur Simonacci",
      role: "Sócio | Direito Empresarial & LGPD",
      desc: "Referência em privacidade de dados e implementação de programas de compliance digital para multinacionais do setor de tecnologia.",
      img: lawyer3
    }
  ];

  const articles = [
    {
      title: "Planejamento Sucessório Familiar em 2026",
      category: "Direito de Família e Sucessões",
      date: "15 de Junho, 2026",
      desc: "Entenda os impactos das novas regras jurídicas e como proteger o patrimônio da sua família de forma estratégica e legal."
    },
    {
      title: "Reestruturação Tributária pós-Reforma",
      category: "Direito Tributário",
      date: "08 de Junho, 2026",
      desc: "Uma análise detalhada sobre a transição de tributos e as oportunidades legais de elisão fiscal para o setor industrial brasileiro."
    },
    {
      title: "LGPD e a Responsabilidade dos Sócios",
      category: "Compliance Digital",
      date: "28 de Maio, 2026",
      desc: "Como as recentes decisões judiciais responsabilizam administradores pela segurança da informação e proteção de dados nas empresas."
    }
  ];

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <div className="home-container">
      {/* Background Overlay for readability */}
      <div className="background-overlay"></div>

      {/* Top Header Section */}
      <header className="home-header">
        <div className="logo-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-box">
            <span className="logo-letter left">Z</span>
            <div className="logo-divider"></div>
            <span className="logo-letter right">S</span>
          </div>
        </div>

        {/* Desktop Inline Navigation */}
        <nav className="desktop-nav">
          <button className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>Home</button>
          <button className={`nav-btn ${currentPage === 'advogados' ? 'active' : ''}`} onClick={() => navigateTo('advogados')}>Advogados</button>
          <button className={`nav-btn ${currentPage === 'noticias' ? 'active' : ''}`} onClick={() => navigateTo('noticias')}>Notícias & Artigos</button>
          <button className={`nav-btn ${currentPage === 'contato' ? 'active' : ''}`} onClick={() => navigateTo('contato')}>Contato</button>
        </nav>

        {/* Hamburger Menu Toggle Button */}
        <button 
          className="hamburger-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></div>
        </button>
      </header>

      {/* Slide-out Menu Drawer */}
      <div className={`menu-drawer glass ${menuOpen ? 'open' : ''}`}>
        <nav className="drawer-nav">
          <button 
            className={`drawer-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => navigateTo('home')}
          >
            Home
          </button>
          <button 
            className={`drawer-link ${currentPage === 'advogados' ? 'active' : ''}`}
            onClick={() => navigateTo('advogados')}
          >
            Advogados
          </button>
          <button 
            className={`drawer-link ${currentPage === 'noticias' ? 'active' : ''}`}
            onClick={() => navigateTo('noticias')}
          >
            Notícias & Artigos
          </button>
          <button 
            className={`drawer-link ${currentPage === 'contato' ? 'active' : ''}`}
            onClick={() => navigateTo('contato')}
          >
            Contato
          </button>
        </nav>
      </div>

      {/* Overlay backdrop when menu is open */}
      {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)}></div>}

      {/* Dynamic Screen Content Wrapper */}
      <div className="app-screen-content">
        {/* Screen: Home Hero (ZATZ SIMONACCI) */}
        {currentPage === 'home' && (
          <section className="screen-section home-hero-view">
            <div className="brand-block">
              <div className="brand-title">ZATZ</div>
              <h1 className="brand-subtitle">SIMONACCI</h1>
              <div className="brand-tagline">ADVOGADOS ASSOCIADOS</div>
            </div>
            <footer className="footer-bar">
              <span>&copy; {new Date().getFullYear()} Zatz Simonacci Advogados Associados.</span>
            </footer>
          </section>
        )}

        {/* Screen: Advogados */}
        {currentPage === 'advogados' && (
          <section className="screen-section scrollable-view">
            <div className="section-inner-container">
              <h2 className="section-heading">Nossos Advogados</h2>
              <div className="section-divider"></div>
              <div className="lawyers-grid">
                {lawyers.map((lawyer, index) => (
                  <div key={index} className="lawyer-card animate-fade">
                    <div className="lawyer-image-wrapper">
                      <img src={lawyer.img} alt={lawyer.name} className="lawyer-image" />
                    </div>
                    <h3 className="lawyer-name">{lawyer.name}</h3>
                    <div className="lawyer-role">{lawyer.role}</div>
                    <p className="lawyer-desc">{lawyer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <footer className="footer-bar inner-footer">
              <span>&copy; {new Date().getFullYear()} Zatz Simonacci Advogados Associados.</span>
            </footer>
          </section>
        )}

        {/* Screen: Noticias & Artigos */}
        {currentPage === 'noticias' && (
          <section className="screen-section scrollable-view">
            <div className="section-inner-container">
              <h2 className="section-heading">Notícias & Artigos</h2>
              <div className="section-divider"></div>
              <div className="articles-grid">
                {articles.map((article, index) => (
                  <article key={index} className="article-card animate-fade">
                    <span className="article-category">{article.category}</span>
                    <h3 className="article-title">{article.title}</h3>
                    <span className="article-date">{article.date}</span>
                    <p className="article-desc">{article.desc}</p>
                    <a href={`#article-${index}`} className="article-link" onClick={(e) => e.preventDefault()}>
                      Ler Artigo Integral &rarr;
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <footer className="footer-bar inner-footer">
              <span>&copy; {new Date().getFullYear()} Zatz Simonacci Advogados Associados.</span>
            </footer>
          </section>
        )}

        {/* Screen: Contato */}
        {currentPage === 'contato' && (
          <section className="screen-section scrollable-view">
            <div className="section-inner-container">
              <h2 className="section-heading">Fale Conosco</h2>
              <div className="section-divider"></div>
              <div className="contact-grid">
                <div className="contact-info animate-fade">
                  <h3 className="contact-info-title">Zatz Simonacci Advogados</h3>
                  <p className="contact-info-text">Agende uma consulta presencial ou remota com nossa equipe de especialistas jurídicos.</p>
                  <div className="contact-details">
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📞</span>
                      <span>+55 (11) 3255-9000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">✉️</span>
                      <span>contato@zatzsimonacci.adv.br</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🕒</span>
                      <span>Segunda a Sexta - 09:00 às 18:00</span>
                    </div>
                  </div>
                </div>
                
                <form className="contact-form animate-fade" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Nome Completo</label>
                    <input className="form-input" type="text" id="name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">E-mail Corporativo</label>
                    <input className="form-input" type="email" id="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Telefone</label>
                    <input className="form-input" type="tel" id="phone" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="msg">Mensagem / Assunto</label>
                    <textarea className="form-textarea" id="msg" rows="4" required></textarea>
                  </div>
                  <button className="form-submit-btn" type="submit">Enviar Mensagem</button>
                </form>
              </div>
            </div>
            <footer className="footer-bar inner-footer">
              <span>&copy; {new Date().getFullYear()} Zatz Simonacci Advogados Associados.</span>
            </footer>
          </section>
        )}
      </div>
    </div>
  );
}
