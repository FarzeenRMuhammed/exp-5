require('dotenv').config();
const express    = require('express');
const helmet     = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser  = require('cookie-parser');
const cors       = require('cors');
const compression = require('compression');
const mongoose   = require('mongoose');
const path       = require('path');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Security Middlewares (OWASP hardening) ────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      scriptSrc:   ["'self'"],
      styleSrc:    ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc:     ["'self'", 'https://fonts.gstatic.com'],
      imgSrc:      ["'self'", 'data:'],
      connectSrc:  ["'self'", 'https:'],
    },
  },
}));

// Prevent NoSQL injection — strips $ and . from request body/query/params
app.use(mongoSanitize());

// Gzip compression for all responses (performance)
app.use(compression());

app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));       // Limit body size
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

// ── API Routes ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── MongoDB Connection ────────────────────────────────────────────────────
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));
} else {
  console.warn('⚠️  MONGO_URI not set — skipping database connection (dev mode)');
}

// ── Serve React Production Build ──────────────────────────────────────────
const buildPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(buildPath, {
  maxAge: '7d',  // Cache static assets for 7 days (performance)
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// ── Start Server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
