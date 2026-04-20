import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

import FonctionnalitesPage from './pages/FonctionnalitesPage';
import TarifsPage from './pages/TarifsPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder pages for structure
const Placeholder = ({ title }) => (
  <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 flex items-center justify-center text-center px-6">
    <div>
      <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-4">{title}</h1>
      <p className="text-body text-xl">Page en cours de développement.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FonctionnalitesPage />} />
        <Route path="/pricing" element={<TarifsPage />} />
        <Route path="/ecosystem" element={<Placeholder title="Écosystème" />} />
        <Route path="/demo" element={<Placeholder title="Démonstration" />} />
        <Route path="/faq" element={<Placeholder title="FAQ" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="/login" element={<Placeholder title="Connexion" />} />
        <Route path="/signup" element={<Placeholder title="Essai Gratuit" />} />
        {/* Additional pages mentioned in spec */}
        <Route path="/blog" element={<Placeholder title="Blog & Ressources" />} />
        <Route path="/cgv" element={<Placeholder title="CGV" />} />
        <Route path="/privacy" element={<Placeholder title="Confidentialité" />} />
        <Route path="/legal" element={<Placeholder title="Mentions Légales" />} />
        <Route path="/cookies" element={<Placeholder title="Cookies" />} />
      </Routes>
    </Router>
  );
}

export default App;
