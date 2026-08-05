import React, { useState } from 'react';
import lawyer1 from '../assets/images/lawyer1.png';
import lawyer2 from '../assets/images/lawyer2.png';
import lawyer3 from '../assets/images/lawyer3.png';
import zatsLogo from '../assets/Zats.jpeg';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState('quem-somos');
  const [lang, setLang] = useState('pt'); // 'pt' | 'en'

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const content = {
    pt: {
      nav: {
        home: 'Home',
        servicos: 'Serviços',
        noticias: 'Notícias & Artigos',
        contato: 'Contato'
      },
      hero: {
        tagline: 'ADVOGADOS ASSOCIADOS'
      },
      servicos: {
        heading: 'Nossos Serviços',
        items: [
          {
            id: 'quem-somos',
            label: 'QUEM SOMOS',
            title: 'Quem Somos',
            paragraphs: [
              'Zatz & Simonacci Advogados Associados é um escritório boutique, especializado em oferecer atendimento jurídico personalizado e de excelência.',
              'Atuamos nas áreas cível, família, sucessões, imobiliária, empresarial e trabalhista, com foco na prevenção e solução de conflitos através de estratégias sob medida para cada cliente.',
              'Nosso objetivo precípuo é o sucesso integral de nossos clientes. Para isso, não medimos esforços para alcançar resultados excepcionais em cada demanda. Combinamos proximidade, entendimento profundo das necessidades, agilidade e expertise técnica para garantir soluções jurídicas de alto impacto, sempre com acompanhamento dedicado em todas as etapas do processo.'
            ]
          },
          {
            id: 'familia',
            label: 'FAMÍLIA E SUCESSÕES',
            title: 'Direito de Família e Sucessões',
            paragraphs: [
              'Oferecemos assessoria jurídica completa e sensível para questões familiares e patrimoniais, como divórcios, inventários, partilha de bens, planejamento sucessório e pactos antenupciais.',
              'Nossa atuação prioriza a prevenção de conflitos, garantindo a proteção do patrimônio familiar e a tranquilidade das partes envolvidas em cada fase da vida.'
            ]
          },
          {
            id: 'imobiliario',
            label: 'IMOBILIÁRIO',
            title: 'Direito Imobiliário',
            paragraphs: [
              'Atuação especializada em regularização de imóveis, elaboração e análise de contratos de compra e venda, locações residenciais e comerciais, usucapião e estruturação de empreendimentos.',
              'Oferecemos segurança jurídica completa para investidores, proprietários e empresas do setor imobiliário.'
            ]
          },
          {
            id: 'consumidor',
            label: 'CONSUMIDOR',
            title: 'Direito do Consumidor',
            paragraphs: [
              'Defesa estratégica de direitos em relações de consumo, atenuando litígios e atuando na reparação de danos morais e materiais, cobranças indevidas e vícios de produtos ou serviços.',
              'Prestamos consultoria preventiva para empresas visando a total adequação às normas do Código de Defesa do Consumidor.'
            ]
          },
          {
            id: 'empresarial',
            label: 'EMPRESARIAL',
            title: 'Direito Empresarial',
            paragraphs: [
              'Consultoria e assessoria corporativa estratégica para empresas de todos os portes: constituição de sociedades, governança corporativa, planejamento tributário, fusões e aquisições (M&A).',
              'Protegemos o desenvolvimento e a estabilidade da sua empresa através da mitigação de riscos jurídicos e elaboração de contratos comerciais de alta complexidade.'
            ]
          },
          {
            id: 'trabalhista',
            label: 'TRABALHISTA',
            title: 'Direito Trabalhista',
            paragraphs: [
              'Assessoria trabalhista preventiva e contenciosa, focada na redução de passivos trabalhistas, negociações coletivas e representação em processos trabalhistas.',
              'Garantimos a conformidade com a legislação vigente e as melhores práticas de recursos humanos e compliance corporativo.'
            ]
          },
          {
            id: 'contratos',
            label: 'RESPONSABILIDADE CIVIL E CONTRATOS',
            title: 'Responsabilidade Civil e Contratos',
            paragraphs: [
              'Elaboração, análise e negociação de contratos nacionais e internacionais, bem como atuação em ações de reparação de danos morais, materiais e estéticos.',
              'Buscamos defender e resguardar os interesses de nossos clientes com rigor técnico e estratégias ágeis de ressarcimento e proteção contratual.'
            ]
          }
        ]
      },
      noticias: {
        heading: 'Notícias & Artigos',
        readMore: 'Ler Artigo Integral →',
        articles: [
          {
            title: 'Planejamento Sucessório Familiar em 2026',
            category: 'Direito de Família e Sucessões',
            date: '15 de Junho, 2026',
            desc: 'Entenda os impactos das novas regras jurídicas e como proteger o patrimônio da sua família de forma estratégica e legal.'
          },
          {
            title: 'Reestruturação Tributária pós-Reforma',
            category: 'Direito Tributário',
            date: '08 de Junho, 2026',
            desc: 'Uma análise detalhada sobre a transição de tributos e as oportunidades legais de elisão fiscal para o setor industrial brasileiro.'
          },
          {
            title: 'LGPD e a Responsabilidade dos Sócios',
            category: 'Compliance Digital',
            date: '28 de Maio, 2026',
            desc: 'Como as recentes decisões judiciais responsabilizam administradores pela segurança da informação e proteção de dados nas empresas.'
          }
        ]
      },
      contato: {
        heading: 'Fale Conosco',
        subtitle: 'Agende uma consulta presencial ou remota com nossa equipe de especialistas jurídicos.',
        address: 'Al. Tangará, 80, Sala 1, The Point Office, Cotia-SP, CEP 06711-020',
        phone: '+55 (11) 98899-4871',
        email: 'contato@zatzsimonacci.adv.br',
        hours: 'Segunda a Sexta - 09:00 às 18:00',
        labels: {
          name: 'Nome Completo',
          email: 'E-mail Corporativo',
          phone: 'Telefone',
          message: 'Mensagem / Assunto',
          submit: 'Enviar via WhatsApp'
        }
      },
      footer: 'Zatz Simonacci Advogados Associados.',
      langBtn: 'English'
    },
    en: {
      nav: {
        home: 'Home',
        servicos: 'Services',
        noticias: 'News & Articles',
        contato: 'Contact'
      },
      hero: {
        tagline: 'ATTORNEYS AT LAW'
      },
      servicos: {
        heading: 'Our Services',
        items: [
          {
            id: 'quem-somos',
            label: 'ABOUT US',
            title: 'About Us',
            paragraphs: [
              'Zatz & Simonacci Advogados Associados is a boutique law firm, specializing in delivering personalized, high-excellence legal services.',
              'We operate in civil, family, probate, real estate, corporate, and labor law, focusing on conflict prevention and resolution through tailored strategies for each client.',
              'Our primary goal is the integral success of our clients. To achieve this, we spare no effort to deliver exceptional results in every demand, combining proximity, deep understanding of needs, agility, and technical expertise to ensure high-impact legal solutions, always with dedicated follow-up at every stage.'
            ]
          },
          {
            id: 'familia',
            label: 'FAMILY & PROBATE',
            title: 'Family & Probate Law',
            paragraphs: [
              'We offer comprehensive and compassionate legal counsel for family and estate matters, such as divorces, probate, asset division, estate planning, and prenuptial agreements.',
              'Our practice prioritizes conflict prevention, safeguarding family wealth and peace of mind at every stage of life.'
            ]
          },
          {
            id: 'imobiliario',
            label: 'REAL ESTATE',
            title: 'Real Estate Law',
            paragraphs: [
              'Specialized legal services in property regularization, drafting and reviewing purchase/sale and lease agreements, adverse possession (usucapion), and real estate development structuring.',
              'We provide full legal security for investors, property owners, and real estate companies.'
            ]
          },
          {
            id: 'consumidor',
            label: 'CONSUMER LAW',
            title: 'Consumer Defense Law',
            paragraphs: [
              'Strategic defense of consumer rights, mitigating litigation and pursuing compensation for moral and material damages, improper charges, and product or service defects.',
              'We provide preventive consulting for companies seeking full compliance with consumer defense regulations.'
            ]
          },
          {
            id: 'empresarial',
            label: 'CORPORATE LAW',
            title: 'Corporate & Business Law',
            paragraphs: [
              'Strategic corporate legal advisory for companies of all sizes: business entity formation, corporate governance, tax planning, mergers and acquisitions (M&A).',
              'We protect your company growth and stability by mitigating legal risks and drafting high-complexity commercial contracts.'
            ]
          },
          {
            id: 'trabalhista',
            label: 'LABOR & EMPLOYMENT',
            title: 'Labor & Employment Law',
            paragraphs: [
              'Preventive and contentious labor advisory, focused on reducing labor liabilities, collective bargaining, and representation in labor lawsuits.',
              'We ensure full compliance with current labor legislation and corporate HR best practices.'
            ]
          },
          {
            id: 'contratos',
            label: 'CIVIL LIABILITY & CONTRACTS',
            title: 'Civil Liability & Contracts',
            paragraphs: [
              'Drafting, analysis, and negotiation of national and international contracts, as well as representation in claims for moral, material, and aesthetic damages.',
              'We aim to protect our clients interests with technical rigor and swift protective strategies.'
            ]
          }
        ]
      },
      noticias: {
        heading: 'News & Articles',
        readMore: 'Read Full Article →',
        articles: [
          {
            title: 'Family Estate Planning in 2026',
            category: 'Family & Probate Law',
            date: 'June 15, 2026',
            desc: 'Understand the impacts of new legal regulations and how to protect your family wealth strategically and legally.'
          },
          {
            title: 'Post-Reform Tax Restructuring',
            category: 'Tax Law',
            date: 'June 08, 2026',
            desc: 'A detailed analysis of the tax transition and legal opportunities for tax efficiency for the Brazilian industrial sector.'
          },
          {
            title: 'LGPD & Partners Liability',
            category: 'Digital Compliance',
            date: 'May 28, 2026',
            desc: 'How recent judicial decisions hold administrators responsible for information security and data protection in companies.'
          }
        ]
      },
      contato: {
        heading: 'Contact Us',
        subtitle: 'Schedule an in-person or remote consultation with our team of legal experts.',
        address: 'Al. Tangará, 80, Suite 1, The Point Office, Cotia-SP, Brazil, CEP 06711-020',
        phone: '+55 (11) 98899-4871',
        email: 'contato@zatzsimonacci.adv.br',
        hours: 'Monday to Friday - 09:00 AM to 06:00 PM',
        labels: {
          name: 'Full Name',
          email: 'Corporate E-mail',
          phone: 'Phone Number',
          message: 'Message / Subject',
          submit: 'Send via WhatsApp'
        }
      },
      footer: 'Zatz Simonacci Attorneys at Law.',
      langBtn: 'Português'
    }
  };

  const t = content[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "5511988994871";
    const text = `*${lang === 'pt' ? 'Novo Contato via Site Zatz & Simonacci' : 'New Contact via Zatz & Simonacci Website'}*\n\n` +
                 `👤 *${t.contato.labels.name}:* ${formData.name}\n` +
                 `✉️ *${t.contato.labels.email}:* ${formData.email}\n` +
                 `📞 *${t.contato.labels.phone}:* ${formData.phone}\n\n` +
                 `💬 *${t.contato.labels.message}:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

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
          <img src={zatsLogo} alt="Zatz & Simonacci Logo" className="site-logo-img" />
        </div>

        {/* Desktop Inline Navigation */}
        <nav className="desktop-nav">
          <button className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>{t.nav.home}</button>
          <button className={`nav-btn ${currentPage === 'servicos' ? 'active' : ''}`} onClick={() => navigateTo('servicos')}>{t.nav.servicos}</button>
          <button className={`nav-btn ${currentPage === 'noticias' ? 'active' : ''}`} onClick={() => navigateTo('noticias')}>{t.nav.noticias}</button>
          <button className={`nav-btn ${currentPage === 'contato' ? 'active' : ''}`} onClick={() => navigateTo('contato')}>{t.nav.contato}</button>
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
            {t.nav.home}
          </button>
          <button 
            className={`drawer-link ${currentPage === 'servicos' ? 'active' : ''}`}
            onClick={() => navigateTo('servicos')}
          >
            {t.nav.servicos}
          </button>
          <button 
            className={`drawer-link ${currentPage === 'noticias' ? 'active' : ''}`}
            onClick={() => navigateTo('noticias')}
          >
            {t.nav.noticias}
          </button>
          <button 
            className={`drawer-link ${currentPage === 'contato' ? 'active' : ''}`}
            onClick={() => navigateTo('contato')}
          >
            {t.nav.contato}
          </button>
        </nav>
      </div>

      {/* Overlay backdrop when menu is open */}
      {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)}></div>}

      {/* Dynamic Screen Content Wrapper */}
      <div className="app-screen-content">
        {/* Screen: Home Hero (ZATS SIMONACCI) */}
        {currentPage === 'home' && (
          <section className="screen-section home-hero-view">
            <div className="brand-block">
              <h1 className="brand-subtitle">
                <span className="brand-row">ZATS</span>
                <span className="brand-row ampersand-row">&amp;</span>
                <span className="brand-row">SIMONACCI</span>
              </h1>
              <div className="brand-tagline">{t.hero.tagline}</div>
            </div>
            <footer className="footer-bar">
              <span>&copy; {new Date().getFullYear()} {t.footer}</span>
            </footer>
          </section>
        )}

        {/* Screen: Serviços */}
        {currentPage === 'servicos' && (
          <section className="screen-section scrollable-view">
            <div className="section-inner-container">
              <h2 className="section-heading">{t.servicos.heading}</h2>
              <div className="section-divider"></div>

              <div className="services-layout">
                {/* Left Sidebar Menu */}
                <div className="services-sidebar">
                  {t.servicos.items.map((service) => (
                    <button
                      key={service.id}
                      className={`service-tab-btn ${activeServiceId === service.id ? 'active' : ''}`}
                      onClick={() => setActiveServiceId(service.id)}
                    >
                      <span className="tab-indicator"></span>
                      {service.label}
                    </button>
                  ))}
                </div>

                {/* Right Content Panel */}
                <div className="services-content-card animate-fade">
                  {t.servicos.items.find(s => s.id === activeServiceId) && (
                    <div className="service-details">
                      <h3 className="service-detail-title">
                        {t.servicos.items.find(s => s.id === activeServiceId).title}
                      </h3>
                      <div className="service-detail-divider"></div>
                      <div className="service-paragraphs">
                        {t.servicos.items.find(s => s.id === activeServiceId).paragraphs.map((p, idx) => (
                          <p key={idx} className="service-paragraph">{p}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <footer className="footer-bar inner-footer">
              <span>&copy; {new Date().getFullYear()} {t.footer}</span>
            </footer>
          </section>
        )}

        {/* Screen: Noticias & Artigos */}
        {currentPage === 'noticias' && (
          <section className="screen-section scrollable-view">
            <div className="section-inner-container">
              <h2 className="section-heading">{t.noticias.heading}</h2>
              <div className="section-divider"></div>
              <div className="articles-grid">
                {t.noticias.articles.map((article, index) => (
                  <article key={index} className="article-card animate-fade">
                    <span className="article-category">{article.category}</span>
                    <h3 className="article-title">{article.title}</h3>
                    <span className="article-date">{article.date}</span>
                    <p className="article-desc">{article.desc}</p>
                    <a href={`#article-${index}`} className="article-link" onClick={(e) => e.preventDefault()}>
                      {t.noticias.readMore}
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <footer className="footer-bar inner-footer">
              <span>&copy; {new Date().getFullYear()} {t.footer}</span>
            </footer>
          </section>
        )}

        {/* Screen: Contato */}
        {currentPage === 'contato' && (
          <section className="screen-section scrollable-view">
            <div className="section-inner-container">
              <h2 className="section-heading">{t.contato.heading}</h2>
              <div className="section-divider"></div>
              <div className="contact-grid">
                <div className="contact-info animate-fade">
                  <h3 className="contact-info-title">ZATZ & SIMONACCI ADVOGADOS ASSOCIADOS</h3>
                  <p className="contact-info-text">{t.contato.subtitle}</p>
                  <div className="contact-details">
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span>{t.contato.address}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📞</span>
                      <span>{t.contato.phone}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">✉️</span>
                      <span>{t.contato.email}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🕒</span>
                      <span>{t.contato.hours}</span>
                    </div>
                  </div>
                </div>
                
                <form className="contact-form animate-fade" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">{t.contato.labels.name}</label>
                    <input className="form-input" type="text" id="name" value={formData.name} onChange={handleFormChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">{t.contato.labels.email}</label>
                    <input className="form-input" type="email" id="email" value={formData.email} onChange={handleFormChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">{t.contato.labels.phone}</label>
                    <input className="form-input" type="tel" id="phone" value={formData.phone} onChange={handleFormChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">{t.contato.labels.message}</label>
                    <textarea className="form-textarea" id="message" rows="4" value={formData.message} onChange={handleFormChange} required></textarea>
                  </div>
                  <button className="form-submit-btn" type="submit">{t.contato.labels.submit}</button>
                </form>
              </div>
            </div>
            <footer className="footer-bar inner-footer">
              <span>&copy; {new Date().getFullYear()} {t.footer}</span>
            </footer>
          </section>
        )}
      </div>

      {/* Discreet Floating Language Switcher */}
      <button 
        className="lang-switcher-btn" 
        onClick={toggleLanguage} 
        aria-label="Toggle Language"
      >
        <span className="lang-icon">🌐</span>
        <span>{t.langBtn}</span>
      </button>
    </div>
  );
}
