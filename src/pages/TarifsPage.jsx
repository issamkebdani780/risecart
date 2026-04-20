import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Minus, Sparkles, Zap, Shield, Crown, ChevronDown, ShieldCheck, Tag, Gift } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/ui/Logo';

// ─── Data ────────────────────────────────────────────────────────────────────

const plans = [
  {
    id: 'risego',
    name: 'RiseGo',
    icon: Zap,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    target: 'Pour les débutants qui veulent se lancer rapidement.',
    monthlyPrice: 1900,
    annualPrice: 1500,
    popular: false,
    badge: null,
    color: 'blue',
    cta: 'Démarrer avec RiseGo',
    features: [
      'Boutique prête à l\'emploi',
      'Base solide pour démarrer',
      'Interface d\'administration simple',
      'Volume de commandes réduit',
      'Démarrage rapide garanti',
    ],
  },
  {
    id: 'risecart',
    name: 'RiseCart',
    icon: Crown,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50 dark:bg-amber-500/10',
    target: 'Pour les vendeurs structurés et ambitieux.',
    monthlyPrice: 7900,
    annualPrice: 5900,
    popular: true,
    badge: 'Choix Premium',
    color: 'amber',
    cta: 'Contacter les ventes',
    features: [
      'Outils d\'optimisation avancés',
      'Capacités d\'hébergement étendues',
      'Logique multi-boutique incluse',
      'Automatisations personnalisées',
      'Intégrations complètes',
      'Support & pilotage premium dédiés',
    ],
  },
  {
    id: 'risebasic',
    name: 'RiseBasic',
    icon: Shield,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    target: 'Pour les vendeurs en pleine croissance.',
    monthlyPrice: 3900,
    annualPrice: 2900,
    popular: false,
    badge: 'Meilleur rapport qualité/prix',
    color: 'primary',
    cta: 'Démarrer l\'essai gratuit',
    features: [
      'Plus grande capacité de traitement',
      'Fonctionnalités marketing poussées',
      'Analytics et rapports enrichis',
      'Gestion des stocks avancée',
      'Meilleure flexibilité de design',
    ],
  }
  
];

const comparisonRows = [
  { category: '🏪 Boutique', features: [
    { label: 'Boutique en ligne',               risego: true,   risebasic: true,    risecart: true    },
    { label: 'Nombre de produits',              risego: '100',  risebasic: '1 000', risecart: 'Illimité' },
    { label: 'Thèmes premium disponibles',      risego: '3',    risebasic: '10',    risecart: 'Tous'  },
    { label: 'Domaine personnalisé',            risego: false,  risebasic: true,    risecart: true    },
    { label: 'Éditeur visuel avancé',           risego: false,  risebasic: true,    risecart: true    },
    { label: 'Multi-boutique',                  risego: false,  risebasic: false,   risecart: true    },
  ]},
  { category: '📦 Commandes & Logistique', features: [
    { label: 'Commandes / mois',                risego: '200',  risebasic: '2 000', risecart: 'Illimitées' },
    { label: 'Gestion des retours',             risego: false,  risebasic: true,    risecart: true    },
    { label: 'Impression de bons / factures',   risego: true,   risebasic: true,    risecart: true    },
    { label: 'Suivi des expéditions',           risego: false,  risebasic: true,    risecart: true    },
    { label: 'Gestion multi-entrepôts',         risego: false,  risebasic: false,   risecart: true    },
  ]},
  { category: '📊 Analytics', features: [
    { label: 'Tableau de bord basique',         risego: true,   risebasic: true,    risecart: true    },
    { label: 'Rapports de ventes avancés',      risego: false,  risebasic: true,    risecart: true    },
    { label: 'Analyse du comportement client',  risego: false,  risebasic: false,   risecart: true    },
    { label: 'Export des données (CSV/PDF)',     risego: false,  risebasic: true,    risecart: true    },
  ]},
  { category: '🔗 Intégrations & Écosystème', features: [
    { label: 'Connexion RiseConfirm',           risego: false,  risebasic: true,    risecart: true    },
    { label: 'Connexion RiseManager',           risego: false,  risebasic: false,   risecart: true    },
    { label: 'Paiement RisePay (à venir)',       risego: true,   risebasic: true,    risecart: true    },
    { label: 'API ouverte',                     risego: false,  risebasic: false,   risecart: true    },
    { label: 'Webhooks & automatisations',      risego: false,  risebasic: false,   risecart: true    },
  ]},
  { category: '🛡️ Sécurité & Support', features: [
    { label: 'Support par email',               risego: true,   risebasic: true,    risecart: true    },
    { label: 'Support prioritaire',             risego: false,  risebasic: true,    risecart: true    },
    { label: 'Gestionnaire dédié',              risego: false,  risebasic: false,   risecart: true    },
    { label: 'Sauvegardes automatiques',        risego: false,  risebasic: true,    risecart: true    },
    { label: 'Infrastructure dédiée',           risego: false,  risebasic: false,   risecart: true    },
  ]},
];

const faqItems = [
  {
    q: 'L\'essai gratuit inclut-il toutes les fonctionnalités ?',
    a: 'Oui ! Pendant votre période d\'essai de 7 jours, vous accédez à l\'intégralité des fonctionnalités du plan RiseCart, sans engagement ni carte bancaire requise.',
  },
  {
    q: 'Puis-je changer de plan après mon inscription ?',
    a: 'Absolument. Vous pouvez monter en gamme ou changer de plan à tout moment depuis votre espace administration. Le changement est effectif immédiatement, au prorata de votre abonnement.',
  },
  {
    q: 'Y a-t-il des frais de transaction sur les ventes ?',
    a: 'Non. RiseCart ne prélève aucun frais de commission sur vos ventes. Vous conservez 100% de vos revenus. Seul votre prestataire de paiement peut appliquer ses propres commissions.',
  },
  {
    q: 'Comment fonctionne la facturation annuelle ?',
    a: 'En optant pour l\'abonnement annuel, vous payez en une seule fois pour 12 mois et profitez d\'une réduction d\'environ 20% par rapport au tarif mensuel.',
  },
  {
    q: 'Y a-t-il une réduction de lancement ?',
    a: 'Oui ! Pour les premiers inscrits, nous offrons 2 mois offerts sur tout abonnement annuel. Cette offre est limitée, ne la ratez pas.',
  },
  {
    q: 'Puis-je annuler à tout moment ?',
    a: 'Bien entendu. Aucun engagement à long terme. Vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord, sans frais supplémentaire.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const CellIcon = ({ value }) => {
  if (value === true)  return <CheckCircle2 size={18} className="text-emerald-500 mx-auto" />;
  if (value === false) return <X size={16} className="text-slate-300 dark:text-slate-700 mx-auto" />;
  return <span className="text-[11px] font-black text-slate-700 dark:text-slate-300">{value}</span>;
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50 transition-all hover:border-primary/30">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-primary' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const TarifsPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const formatPrice = (p) => p.toLocaleString('fr-FR');

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 mb-8 mx-auto">
            <Gift size={14} className="text-emerald-500" />
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">7 jours d'essai gratuit · Aucune carte requise</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Des tarifs <span className="text-primary italic">simples</span>,<br className="hidden sm:block" /> une croissance réelle.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-medium mb-14 max-w-2xl mx-auto">
            Choisissez l'offre adaptée à votre étape et évoluez à votre rythme. Pas de surprise, pas de commission sur vos ventes.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Annuel
              <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-500/20">-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              const PlanIcon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-slate-900 dark:bg-slate-900 border-2 border-primary shadow-2xl shadow-primary/15 lg:-translate-y-6 text-white'
                      : 'bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg ${plan.popular ? 'bg-primary text-white shadow-primary/30' : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'}`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${plan.popular ? 'bg-white/10' : plan.iconBg} flex items-center justify-center shrink-0`}>
                      <PlanIcon size={22} className={plan.popular ? 'text-white' : plan.iconColor} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-black tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h2>
                      <p className={`text-xs font-medium mt-0.5 ${plan.popular ? 'text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>{plan.target}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className={`rounded-2xl p-5 mb-7 ${plan.popular ? 'bg-white/5 border border-white/10' : 'bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800'}`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-5xl font-black tracking-tighter tabular-nums ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {formatPrice(price)}
                      </span>
                      <span className={`text-sm font-bold ${plan.popular ? 'text-slate-400' : 'text-slate-400'}`}>DA/mois</span>
                    </div>
                    {isAnnual ? (
                      <p className="text-xs text-emerald-400 font-bold mt-1.5">Facturé annuellement · Économie de 20%</p>
                    ) : (
                      <p className={`text-xs mt-1.5 font-medium ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>Facturé mensuellement</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 flex-1 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-emerald-500'}`} />
                        <span className={`text-sm font-medium ${plan.popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.popular ? '/contact' : '/signup'}
                    className={`w-full py-4 px-6 rounded-2xl font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                    }`}
                  >
                    {plan.cta} <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Lancement offer banner */}
          <div className="mt-16 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 p-5 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl text-center sm:text-left">
            <Tag size={20} className="text-amber-500 shrink-0" />
            <p className="text-sm font-bold text-amber-800 dark:text-amber-300">
              🎉 <strong>Offre de lancement :</strong> Obtenez <strong>2 mois offerts</strong> sur tout abonnement annuel pour les 100 premiers inscrits. Valable jusqu'à épuisement des places.
            </p>
            <a href="/signup" className="shrink-0 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-amber-500/20">
              En profiter
            </a>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Comparatif complet</p>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Ce que chaque plan<br/><span className="text-slate-400 dark:text-slate-500 font-medium">inclut exactement.</span></h2>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <th className="text-left px-6 py-5 w-[40%]">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fonctionnalité</span>
                  </th>
                  {plans.map(p => (
                    <th key={p.id} className={`text-center px-4 py-5 ${p.popular ? 'bg-primary/5 dark:bg-primary/10' : ''}`}>
                      <span className={`text-sm font-black ${p.popular ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{p.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((group, gi) => (
                  <React.Fragment key={gi}>
                    <tr className="bg-slate-50/70 dark:bg-slate-900/50">
                      <td colSpan={4} className="px-6 py-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">{group.category}</span>
                      </td>
                    </tr>
                    {group.features.map((row, fi) => (
                      <tr key={fi} className="border-t border-slate-100 dark:border-slate-800/60 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{row.label}</td>
                        {[row.risego, row.risebasic, row.risecart].map((val, ci) => (
                          <td key={ci} className={`text-center px-4 py-4 ${plans[ci].popular ? 'bg-primary/5 dark:bg-primary/5' : ''}`}>
                            <CellIcon value={val} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Free Trial Banner ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.18)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 mx-auto">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-400 tracking-tight">100% gratuit · Sans carte bancaire</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">Testez RiseCart<br/><span className="text-primary">7 jours gratuitement.</span></h2>
              <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto text-base sm:text-lg">Accédez à l'intégralité des fonctionnalités premium, sans engagement, sans limite. Votre boutique en ligne peut être prête ce soir.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-primary/25">
                  Commencer l'essai gratuit <ArrowRight size={16} />
                </a>
                <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95">
                  Parler à un expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Tarifaire ── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Questions fréquentes</p>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Tout savoir sur nos tarifs<br/><span className="text-slate-400 dark:text-slate-500 font-medium">avant de vous lancer.</span></h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TarifsPage;
