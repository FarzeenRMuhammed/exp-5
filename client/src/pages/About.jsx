import '../App.css';

const About = () => (
  <section className="about-page">
    <h1>About This Project</h1>

    <div className="about-section">
      <h2>🎯 Experiment Aim</h2>
      <p>
        To secure a MERN application against common OWASP vulnerabilities, manage it with
        Git/GitHub, configure a CI/CD pipeline, deploy it to the cloud, and analyse and improve its performance.
      </p>
    </div>

    <div className="about-section">
      <h2>🛡️ Security Measures</h2>
      <ul>
        <li><strong>Helmet.js</strong> — Sets secure HTTP headers including Content-Security-Policy (CSP), X-Frame-Options, and HSTS.</li>
        <li><strong>express-mongo-sanitize</strong> — Prevents NoSQL injection by stripping <code>$</code> and <code>.</code> from user input.</li>
        <li><strong>express-validator</strong> — Server-side input validation to prevent injection attacks.</li>
        <li><strong>CORS</strong> — Restricts cross-origin requests to trusted origins only.</li>
        <li><strong>CSP Meta Tag</strong> — Client-side XSS mitigation via <code>Content-Security-Policy</code> in HTML.</li>
        <li><strong>SameSite Cookies</strong> — CSRF protection via <code>sameSite: 'strict'</code> and <code>httpOnly: true</code> cookie flags.</li>
      </ul>
    </div>

    <div className="about-section">
      <h2>📦 Version Control</h2>
      <ul>
        <li>Git repository initialised with a <code>.gitignore</code> excluding <code>node_modules/</code> and <code>.env</code>.</li>
        <li>Remote linked to <code>github.com/FarzeenRMuhammed/exp-5</code>.</li>
        <li>Feature branches used to isolate work; merged into <code>main</code> via pull requests.</li>
      </ul>
    </div>

    <div className="about-section">
      <h2>🔄 CI/CD Pipeline</h2>
      <ul>
        <li>GitHub Actions workflow runs on every push to <code>main</code>.</li>
        <li>Pipeline steps: checkout → Node.js setup → install → test → build.</li>
        <li>Ensures no broken code reaches the main branch.</li>
      </ul>
    </div>

    <div className="about-section">
      <h2>☁️ Cloud Deployment</h2>
      <ul>
        <li><strong>Backend</strong>: Express server deployed to Render with environment variables set in the dashboard.</li>
        <li><strong>Database</strong>: MongoDB Atlas free-tier cluster; connection string stored as a secret.</li>
        <li><strong>Frontend</strong>: React + Vite build deployed to Netlify with a <code>_redirects</code> file for SPA routing.</li>
      </ul>
    </div>

    <div className="about-section">
      <h2>⚡ Performance Optimisations</h2>
      <ul>
        <li><strong>React.lazy / Suspense</strong> — Gallery page is code-split into its own chunk, reducing initial bundle size.</li>
        <li><strong>compression</strong> middleware — Gzip compression on all API responses.</li>
        <li><strong>Cache-Control headers</strong> — Static assets cached by the browser to reduce repeat requests.</li>
        <li><strong>Vite production build</strong> — Tree-shaking and minification for the smallest possible bundle.</li>
      </ul>
    </div>

    <div className="about-section">
      <h2>🏗️ Tech Stack</h2>
      <ul>
        <li><strong>M</strong>ongoDB — NoSQL document database</li>
        <li><strong>E</strong>xpress.js — Node.js web framework</li>
        <li><strong>R</strong>eact — Frontend UI library (with Vite)</li>
        <li><strong>N</strong>ode.js — JavaScript runtime</li>
      </ul>
    </div>
  </section>
);

export default About;
