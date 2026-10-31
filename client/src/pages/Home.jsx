import '../App.css';

const Home = () => (
  <main className="home">
    <span className="home-badge">🚀 TechFest 2026 — Now Live</span>
    <h1>Secure. Scalable.<br />Spectacular.</h1>
    <p>
      A fully secured MERN stack portal demonstrating OWASP best practices,
      Git version control, CI/CD pipelines, and cloud deployment.
    </p>
    <div className="btn-group">
      <a href="/gallery" className="btn btn-primary">View Gallery</a>
      <a href="/about" className="btn btn-outline">Learn More</a>
    </div>

    <div className="home-features">
      <div className="feature-card">
        <div className="feature-icon">🛡️</div>
        <h3>OWASP Security</h3>
        <p>Helmet, CSP headers, NoSQL injection prevention, and XSS mitigation built-in.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">⚡</div>
        <h3>Lazy Loading</h3>
        <p>React Suspense and lazy() split the Gallery page into a separate bundle for faster loads.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔄</div>
        <h3>CI / CD Pipeline</h3>
        <p>GitHub Actions automatically runs tests and builds the app on every push.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">☁️</div>
        <h3>Cloud Ready</h3>
        <p>Deployed on Render (backend) with MongoDB Atlas and Netlify (frontend).</p>
      </div>
    </div>
  </main>
);

export default Home;
