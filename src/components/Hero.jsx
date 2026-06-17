import dashboardPreview from '../assets/images/dashboard_preview.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">
            🚀 Pronto para Vercel & Mobile
          </div>
          <h1 className="hero-title">
            O futuro do seu <span className="gradient-text-alt">negócio</span> começa aqui.
          </h1>
          <p className="hero-description">
            Uma plataforma de alta performance desenvolvida com React e otimizada para o Vercel. Comece como um site premium e cresça rapidamente para um aplicativo móvel completo.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-glow">Conhecer Plataforma</button>
            <button className="btn btn-secondary">Saiba Mais</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-overlay"></div>
          <div className="mockup-wrapper">
            <div className="mockup-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="mockup-screen">
              <img 
                src={dashboardPreview} 
                alt="Plataforma de Gestão Mockup" 
                className="mockup-image" 
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
