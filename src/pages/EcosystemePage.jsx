import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, ExternalLink, Zap, BarChart3, PhoneCall, ShoppingCart, CreditCard, GraduationCap, Plus, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/sections/FinalCTA';

// ─── Data ─────────────────────────────────────────────────────────────────────

export const useEcosystemData = () => {
  const { t } = useTranslation();

  const products = [
  {
    id: 'risemanager',
    name: 'RiseManager',
    tagline: t('Le cerveau de votre business.'),
    description: t('Pilotez votre activité commerciale en temps réel. RiseManager centralise toutes vos statistiques, vos équipes et vos performances dans un tableau de bord unifié.'),
    logo: '/ecosystem/risemanager.png',
    icon: BarChart3,
    status: 'Disponible',
    statusColor: 'emerald',
    category: t('Gestion & Pilotage'),
    connection: t('Remonte les revenus, commandes et analytics RiseCart en temps réel.'),
    benefits: [
      t('Dashboard multi-boutiques centralisé'),
      t('Suivi des performances des équipes'),
      t('Alertes et rapports automatisés'),
      t('Vue financière consolidée'),
    ],
    accent: 'from-blue-500/10 to-indigo-500/5',
    border: 'hover:border-blue-400/40',
    badge: 'border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10',
  },
  {
    id: 'riseconfirm',
    name: 'RiseConfirm',
    tagline: t('La confirmation devient automatique.'),
    description: t('Centre d\'appels intelligent et automatisé. RiseConfirm transforme vos agents en super-confirmeurs avec des outils de gestion d\'appels, de scripts dynamiques et de relance automatique.'),
    logo: '/ecosystem/RiseConfirm.jpg',
    icon: PhoneCall,
    status: 'Disponible',
    statusColor: 'emerald',
    category: t('Call Center & Confirmation'),
    connection: t('Récupère automatiquement les commandes non confirmées depuis RiseCart.'),
    benefits: [
      t('File d\'appels automatisée depuis les commandes'),
      t('Scripts de confirmation dynamiques'),
      t('Suivi des agents et performances'),
      t('Relances SMS / WhatsApp intégrées'),
    ],
    accent: 'from-emerald-500/10 to-teal-500/5',
    border: 'hover:border-emerald-400/40',
    badge: 'border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10',
  },
  {
    id: 'fbr',
    name: 'FBR',
    tagline: t('Livrez vite, livrez bien.'),
    description: t('Solution de livraison optimisée pour le commerce en Algérie. FBR connecte votre boutique aux meilleurs transporteurs locaux avec un suivi en temps réel.'),
    logo: '/ecosystem/fbr.jpg',
    icon: ShoppingCart,
    status: 'Intégré',
    statusColor: 'blue',
    category: t('Livraison & Logistique'),
    connection: t('Génère les bons de livraison et met à jour les statuts directement dans RiseCart.'),
    benefits: [
      t('Connexion aux transporteurs locaux'),
      t('Génération automatique des bordereaux'),
      t('Suivi colis en temps réel'),
      t('Retours simplifiés et traçés'),
    ],
    accent: 'from-violet-500/10 to-purple-500/5',
    border: 'hover:border-violet-400/40',
    badge: 'border-violet-200 dark:border-violet-500/30 text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10',
  },
  {
    id: 'risepay',
    name: 'RisePay',
    tagline: t('Encaissez sans friction.'),
    description: t('La solution de paiement conçue pour le e-commerce algérien. Paiements à la livraison, via CCP, ou mobile money — tout depuis une intégration native sans API complexe.'),
    logo: '/ecosystem/risepay.jpg',
    icon: CreditCard,
    status: 'Bientôt',
    statusColor: 'amber',
    category: t('Paiements & Finance'),
    connection: t('Réconciliation automatique des paiements avec chaque commande RiseCart.'),
    benefits: [
      t('Paiement à la livraison tracé'),
      t('CCP et mobile money natifs'),
      t('Réconciliation automatique'),
      t('Taux de conversion optimisé'),
    ],
    accent: 'from-amber-500/10 to-orange-500/5',
    border: 'hover:border-amber-400/40',
    badge: 'border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10',
  },
  {
    id: 'riseacademy',
    name: 'RiseAcademy',
    tagline: t('Apprenez à vendre mieux.'),
    description: t('La formation e-commerce pensée pour les vendeurs algériens. Cours, coaching, et ressources pratiques pour accélérer votre croissance à chaque étape.'),
    logo: '/ecosystem/riseacademy.png',
    icon: GraduationCap,
    status: 'Bientôt',
    statusColor: 'rose',
    category: t('Formation & Croissance'),
    connection: t('Recommandations personnalisées basées sur vos performances RiseCart.'),
    benefits: [
      t('Cours vidéo & tutoriels pratiques'),
      t('Coaching personnalisé'),
      t('Communauté de vendeurs actifs'),
      t('Stratégies testées & validées'),
    ],
    accent: 'from-rose-500/10 to-pink-500/5',
    border: 'hover:border-rose-400/40',
    badge: 'border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10',
  },
];

const statusConfig = {
  'Disponible': { dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/30' },
  'Intégré': { dot: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/30' },
  'Bientôt': { dot: 'bg-amber-400', text: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-200 dark:border-amber-500/30' },
};

  return { products, statusConfig };
};


// ─── Components ────────────────────────────────────────────────────────────────

const ProductCard = ({ product, active, onClick }) => {
  const { t } = useTranslation();
  const { statusConfig } = useEcosystemData();
  const sc = statusConfig[product.status];
  const ProductIcon = product.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl border text-start transition-all duration-300 cursor-pointer ${active
          ? 'bg-white dark:bg-slate-900 border-primary/40 shadow-lg shadow-primary/5'
          : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-900/50 hover:border-slate-200 dark:hover:border-slate-700'
        }`}
    >
      <div className={`w-12 h-12 rounded-2xl overflow-hidden shrink-0 border ${active ? 'border-primary/30' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 shadow-sm`}>
        <img src={product.logo} alt={product.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`font-black text-sm truncate ${active ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{product.name}</span>
        </div>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate block">{product.category}</span>
      </div>
      <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider shrink-0 ${sc.bg} ${sc.border} ${sc.text}`}>
        <div className={`w-1.5 h-1.5 rounded-full ${sc.dot} ${product.status === t('Disponible') ? 'animate-pulse' : ''}`} />
        {t(product.status)}
      </div>
    </button>
  );
};

const ProductDetail = ({ product }) => {
  const { t } = useTranslation();
  const { statusConfig } = useEcosystemData();
  const sc = statusConfig[product.status];
  const ProductIcon = product.icon;
  return (
    <div className={`h-full flex flex-col rounded-[2.5rem] bg-gradient-to-br ${product.accent} dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500`}>
      {/* Header */}
      <div className="p-8 sm:p-10 flex flex-col gap-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 shrink-0">
            <img src={product.logo} alt={product.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${sc.bg} ${sc.border} ${sc.text}`}>
            <div className={`w-2 h-2 rounded-full ${sc.dot} ${product.status === t('Disponible') ? 'animate-pulse' : ''}`} />
            {t(product.status)}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.25em] mb-2">{product.category}</p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">{product.name}</h2>
          <p className="text-base font-bold text-slate-500 dark:text-slate-400 italic mb-4">"{product.tagline}"</p>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{product.description}</p>
        </div>

        {/* Connection with RiseCart */}
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/20 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Zap size={14} className="text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{t("Connexion avec RiseCart")}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{product.connection}</p>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{t("Ce que vous gagnez")}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        <span className="text-xs text-slate-400 font-medium">{t("Partie intégrante de l'écosystème RiseGroup")}</span>
        {product.status !== 'Bientôt' ? (
          <a href="/signup" className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap">
            {t("Connecter")} <ArrowRight size={14} />
          </a>
        ) : (
          <span className="text-xs font-black text-amber-500 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-4 py-2 rounded-xl">{t("Bientôt disponible")}</span>
        )}
      </div>
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const EcosystemePage = () => {
  const { t } = useTranslation();
  const { products, statusConfig } = useEcosystemData();

  const [activeId, setActiveId] = useState('risemanager');
  const active = products.find(p => p.id === activeId);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-8 mx-auto">
            <Zap size={12} className="text-blue-500" />
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">{t("5 outils · 1 galaxie cohérente")}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            {t("RiseCart ne travaille")}<br /><span className="text-primary italic">{t("jamais seul.")}</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-medium mb-0 max-w-2xl mx-auto">
            {t("Chaque produit du RiseGroup a été conçu pour s'intégrer nativement avec RiseCart. Pas d'API douteuse, pas d'export manuel — tout communique en temps réel.")}
          </p>
        </div>
      </section>

      {/* ── Hub Visual ── */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6">

          {/* ── Orbit diagram (fixed absolute positioning) ── */}
          <div className="flex flex-col items-center mb-16">
            {/* 
 Container is 320×320px. Center = 160,160.
 radius = 130px. 5 items, starting from top (-90°):
 angles (deg): -90, -18, 54, 126, 198
 positions (px from top-left, node size = 56px):
 i0 (-90°): x=160, y=30 → left=132, top=2 (top center)
 i1 (-18°): x=284, y=120 → left=256, top=92 (right upper)
 i2 (54°): x=236, y=265 → left=208, top=237 (right lower)
 i3 (126°): x=84, y=265 → left=56, top=237 (left lower)
 i4 (198°): x=36, y=120 → left=8, top=92 (left upper)
 */}
            <div className="relative w-[320px] h-[320px] select-none shrink-0">
              {/* Outer orbit ring */}
              <div className="absolute inset-[16px] rounded-full border border-dashed border-slate-200 dark:border-slate-800" />
              {/* Inner spinning orbit ring */}
              <div className="absolute inset-[48px] rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '25s' }} />

              {/* Center hub */}
              <div className="absolute w-[80px] h-[80px] rounded-[1.5rem] overflow-hidden border-2 border-primary shadow-[0_0_50px_rgba(0,162,255,0.4)] bg-slate-900 z-20"
                style={{ left: '120px', top: '120px' }}>
                <img src="/ecosystem/risecart.jpg" alt="RiseCart" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-[1.5rem] ring-2 ring-primary/40 animate-ping" style={{ animationDuration: '2.5s' }} />
              </div>

              {/* SVG connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                {/* Center = 160,160. Node centers: i0=160,30 i1=284,120 i2=236,265 i3=84,265 i4=36,120 */}
                {[
                  [160, 30],
                  [284, 120],
                  [236, 265],
                  [84, 265],
                  [36, 120],
                ].map(([nx, ny], i) => (
                  <line key={i}
                    x1="160" y1="160"
                    x2={nx} y2={ny}
                    stroke="rgba(0,162,255,0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                  />
                ))}
              </svg>

              // Satellite nodes — absolutely positioned
              {[
                { top: 2, left: 132 }, // top
                { top: 92, left: 256 }, // right-upper
                { top: 237, left: 208 }, // right-lower
                { top: 237, left: 56 }, // left-lower
                { top: 92, left: 8 }, // left-upper
              ].map((pos, i) => {
                const { products, statusConfig } = useEcosystemData();
                const p = products[i];
                const sc = statusConfig[p.status];
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={`absolute w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all duration-300 z-10 bg-white dark:bg-slate-900 shadow-lg ${activeId === p.id
                        ? 'border-primary scale-110 shadow-primary/25 shadow-xl'
                        : 'border-white dark:border-slate-800 hover:border-primary/50 hover:scale-105'
                      }`}
                    style={{ top: pos.top, left: pos.left }}
                    title={p.name}
                  >
                    <img src={p.logo} alt={p.name} className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className={`absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 ${sc.dot}`} />
                  </button>
                );
              })}
            </div>

            {/* Name labels underneath */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {products.map(p => {
                const { statusConfig } = useEcosystemData();
                const sc = statusConfig[p.status];
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold transition-all duration-200 ${activeId === p.id
                        ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary/30 hover:text-primary'
                      }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Side-by-side: nav + detail ── */}
          <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Left nav */}
            <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-slate-100 dark:border-slate-800 p-3 flex flex-col gap-1 lg:self-start lg:sticky lg:top-28">
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 px-4 pt-2 pb-3">{t("Modules")}</p>
              {products.map(p => (
                <ProductCard key={p.id} product={p} active={activeId === p.id} onClick={() => setActiveId(p.id)} />
              ))}
              <div className="flex items-center gap-3 px-4 py-3 mt-2 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <Plus size={16} className="text-slate-400" />
                </div>
                <span className="text-xs font-bold text-slate-400">{t("Et plus à venir…")}</span>
              </div>
            </div>

            {/* Right detail */}
            {active && (
              <div className="min-h-[520px]">
                <ProductDetail key={active.id} product={active} />
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ── Flow / Continuity Section ── */}
      <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{t("Logique de continuité")}</p>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{t("Le parcours d'une")}<br /><span className="text-slate-400 dark:text-slate-500 font-medium">{t("commande de A à Z.")}</span></h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {[
                { step: t('01'), label: t('Commande créée'), tool: 'RiseCart', color: 'blue', desc: t('Le client passe sa commande sur votre boutique RiseCart.') },
                { step: t('02'), label: t('Appel de confirmation'), tool: 'RiseConfirm', color: 'emerald', desc: t('RiseConfirm alerte l\'agent et génère le script d\'appel adapté.') },
                { step: t('03'), label: t('Expédition lancée'), tool: 'FBR / Livreur', color: 'violet', desc: t('Le bon de livraison est généré et transmis au transporteur.') },
                { step: t('04'), label: t('Revenus tracés'), tool: 'RiseManager', color: 'amber', desc: t('Les statistiques remontent en temps réel dans votre dashboard.') },
              ].map((s, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group cursor-default">
                  <div className={`w-20 h-20 rounded-[1.5rem] mb-5 flex items-center justify-center text-2xl font-black relative z-10 shadow-xl transition-transform duration-300 group-hover:-translate-y-1 ${s.color === 'blue' ? 'bg-blue-500 text-white shadow-blue-200 dark:shadow-blue-500/20' :
                      s.color === 'emerald' ? 'bg-emerald-500 text-white shadow-emerald-200 dark:shadow-emerald-500/20' :
                        s.color === 'violet' ? 'bg-violet-500 text-white shadow-violet-200 dark:shadow-violet-500/20' :
                          'bg-amber-500 text-white shadow-amber-200 dark:shadow-amber-500/20'
                    }`}>
                    {s.step}
                  </div>
                  {i < 3 && (
                    <ChevronRight size={20} className="hidden lg:block absolute top-7 -right-4 text-primary/40 z-20" />
                  )}
                  <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-2 ${s.color === 'blue' ? 'text-blue-500' :
                      s.color === 'emerald' ? 'text-emerald-500' :
                        s.color === 'violet' ? 'text-violet-500' : 'text-amber-500'
                    }`}>{s.tool}</p>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">{s.label}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default EcosystemePage;
