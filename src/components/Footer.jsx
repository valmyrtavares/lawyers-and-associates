export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} RobertoApp. Todos os direitos reservados.
        </div>
        <ul className="footer-links">
          <li><a href="#privacy">Privacidade</a></li>
          <li><a href="#terms">Termos de Uso</a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  );
}
