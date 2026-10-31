import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from './pages/Home.jsx';
import './App.css';

// Gallery is lazy-loaded (code splitting) as per the performance requirement.
// The nav bar still shows it as plain "Gallery" — not "Gallery (lazy)".
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const About   = lazy(() => import('./pages/About.jsx'));

const Loading = () => (
  <div className="loading">
    <span className="spinner" />
    Loading…
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/"       element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about"   element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
