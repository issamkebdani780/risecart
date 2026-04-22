import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

import FonctionnalitesPage from './pages/FonctionnalitesPage';
import TarifsPage from './pages/TarifsPage';
import EcosystemePage from './pages/EcosystemePage';
import DemoPage from './pages/DemoPage';
import BlogPage from './pages/BlogPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { t } = useTranslation();

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
 <p className="text-body text-xl">{t("Page en cours de développement.")}</p>
 </div>
 </div>
);

function App() {
  const { t } = useTranslation();

 return (
 <Router>
 <ScrollToTop />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/features" element={<FonctionnalitesPage />} />
 <Route path="/pricing" element={<TarifsPage />} />
 <Route path="/ecosystem" element={<EcosystemePage />} />
 <Route path="/demo" element={<DemoPage />} />
 <Route path="/faq" element={<Placeholder title={t("FAQ")} />} />
 <Route path="/contact" element={<Placeholder title={t("Contact")} />} />
 <Route path="/login" element={<Placeholder title={t("Connexion")} />} />
 <Route path="/signup" element={<Placeholder title={t("Essai Gratuit")} />} />
 {/* Additional pages mentioned in spec */}
 <Route path="/blog" element={<BlogPage />} />
 <Route path="/cgv" element={<Placeholder title={t("CGV")} />} />
 <Route path="/privacy" element={<Placeholder title={t("Confidentialité")} />} />
 <Route path="/legal" element={<Placeholder title={t("Mentions Légales")} />} />
 <Route path="/cookies" element={<Placeholder title={t("Cookies")} />} />
 </Routes>
 </Router>
 );
}

export default App;
