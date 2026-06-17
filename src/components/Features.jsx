export default function Features() {
  const featuresList = [
    {
      title: "Pronto para Mobile",
      desc: "Arquitetura limpa preparada para ser empacotada com Capacitor ou PWA. Transforme seu site em aplicativo com poucos cliques.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: "Deploy Instantâneo",
      desc: "Desenvolvido com Vite e React, proporcionando builds super rápidas e compatibilidade nativa com o ecossistema Vercel.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "Performance Extrema",
      desc: "Carregamento quase instantâneo graças ao Vite. SEO otimizado, HTML5 semântico e CSS de ponta ultra responsivo.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="6" x2="12" y2="12" />
          <line x1="12" y1="12" x2="16" y2="14" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Recursos Principais</span>
          <h2 className="section-title">Por que escolher nossa tecnologia?</h2>
        </div>

        <div className="features-grid">
          {featuresList.map((feat, index) => (
            <div key={index} className="glass-card feature-card">
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
