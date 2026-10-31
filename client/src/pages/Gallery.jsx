import '../App.css';

const events = [
  { id: 1, emoji: '🤖', title: 'AI & ML Showcase', desc: 'Machine learning demos and live model inference.' },
  { id: 2, emoji: '🌐', title: 'Web Dev Arena', desc: 'Full-stack projects from students across departments.' },
  { id: 3, emoji: '🔐', title: 'Cybersecurity CTF', desc: 'Capture-the-flag challenges testing OWASP knowledge.' },
  { id: 4, emoji: '📡', title: 'IoT Exhibition', desc: 'Smart devices and sensor-based automation projects.' },
  { id: 5, emoji: '🎮', title: 'Game Dev Jam', desc: 'Indie games built in 24 hours by student teams.' },
  { id: 6, emoji: '📊', title: 'Data Science Fair', desc: 'Visualisations and predictive analytics on real datasets.' },
  { id: 7, emoji: '🚀', title: 'Startup Pitches', desc: 'Student startups pitching to a panel of mentors.' },
  { id: 8, emoji: '🛠️', title: 'Hardware Hacks', desc: 'Raspberry Pi and Arduino projects solving real problems.' },
];

const Gallery = () => (
  <section className="gallery-page">
    <h1>Event Gallery</h1>
    <p className="subtitle">Highlights from TechFest 2026 — loaded lazily for performance.</p>
    <div className="gallery-grid">
      {events.map(ev => (
        <div className="gallery-card" key={ev.id}>
          {/* Images use loading="lazy" for native browser lazy-loading */}
          <div className="gallery-placeholder" aria-label={ev.title}>
            {ev.emoji}
          </div>
          <div className="gallery-card-body">
            <h3>{ev.title}</h3>
            <p>{ev.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
