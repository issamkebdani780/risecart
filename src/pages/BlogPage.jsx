import React, { useState } from 'react';
import { ArrowRight, Search, Clock, Tag, BookOpen, TrendingUp, Package, PhoneCall, Truck, ShoppingCart, BarChart3, Zap, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  { id: 'all',          label: 'Tous',              icon: BookOpen     },
  { id: 'ecommerce',    label: 'E-commerce',         icon: ShoppingCart },
  { id: 'conversion',   label: 'Conversion',         icon: TrendingUp   },
  { id: 'logistique',   label: 'Logistique & COD',   icon: Truck        },
  { id: 'marketing',    label: 'Marketing Digital',  icon: Zap          },
  { id: 'analytics',    label: 'Analytics',          icon: BarChart3    },
  { id: 'confirmation', label: 'Confirmation',       icon: PhoneCall    },
];

const articles = [
  {
    id: 1,
    title: 'Comment lancer sa boutique e-commerce en Algérie en 2025',
    excerpt: 'Guide complet pour créer, configurer et lancer votre boutique en ligne dès aujourd\'hui. De la sélection du nom de domaine à votre première vente.',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    readTime: '8 min',
    date: '12 Avril 2025',
    featured: true,
    tags: ['Lancement', 'Guide', 'Débutant'],
    color: 'blue',
  },
  {
    id: 2,
    title: '10 techniques pour augmenter votre taux de confirmation COD',
    excerpt: 'Le paiement à la livraison domine le marché algérien. Découvrez les méthodes éprouvées pour confirmer plus de commandes et réduire les retours.',
    category: 'confirmation',
    categoryLabel: 'Confirmation',
    readTime: '6 min',
    date: '8 Avril 2025',
    featured: true,
    tags: ['COD', 'Scripts', 'Agents'],
    color: 'emerald',
  },
  {
    id: 3,
    title: 'Optimiser sa page produit pour booster les conversions',
    excerpt: 'Les visiteurs décident en 3 secondes. Apprenez à structurer vos fiches produit pour maximiser les ajouts au panier et réduire les abandons.',
    category: 'conversion',
    categoryLabel: 'Conversion',
    readTime: '5 min',
    date: '5 Avril 2025',
    featured: false,
    tags: ['UX', 'Fiches produit', 'CRO'],
    color: 'violet',
  },
  {
    id: 4,
    title: 'Livraison express vs standard : quelle stratégie pour votre boutique ?',
    excerpt: 'Le choix de votre stratégie logistique impacte directement votre satisfaction client et vos marges. Comparatif complet des offres disponibles.',
    category: 'logistique',
    categoryLabel: 'Logistique & COD',
    readTime: '7 min',
    date: '2 Avril 2025',
    featured: false,
    tags: ['Livraison', 'Logistique', 'Marge'],
    color: 'amber',
  },
  {
    id: 5,
    title: 'Facebook Ads pour le e-commerce algérien : guide pratique 2025',
    excerpt: 'Ciblage, budgets, créatifs et audiences — tout ce qu\'il faut savoir pour rentabiliser vos campagnes Meta Ads dans le marché local.',
    category: 'marketing',
    categoryLabel: 'Marketing Digital',
    readTime: '10 min',
    date: '30 Mars 2025',
    featured: false,
    tags: ['Facebook', 'Publicité', 'ROI'],
    color: 'rose',
  },
  {
    id: 6,
    title: 'Comment lire vos analytics e-commerce et prendre les bonnes décisions',
    excerpt: 'Taux de conversion, panier moyen, LTV client — comprendre ses données pour piloter sa boutique avec précision et anticiper les tendances.',
    category: 'analytics',
    categoryLabel: 'Analytics',
    readTime: '9 min',
    date: '28 Mars 2025',
    featured: false,
    tags: ['KPIs', 'Dashboard', 'Données'],
    color: 'indigo',
  },
  {
    id: 7,
    title: 'Script de confirmation : les phrases qui font la différence',
    excerpt: 'Les mots que vous utilisez au téléphone peuvent doubler votre taux de confirmation. Exemples concrets et formulation testées sur le terrain.',
    category: 'confirmation',
    categoryLabel: 'Confirmation',
    readTime: '4 min',
    date: '25 Mars 2025',
    featured: false,
    tags: ['Script', 'Call Center', 'Téléphone'],
    color: 'emerald',
  },
  {
    id: 8,
    title: 'Réduire les retours de colis : stratégies efficaces pour le COD',
    excerpt: 'Un colis non livré coûte cher. Apprenez à filtrer vos commandes, qualifier vos clients et réduire drastiquement votre taux de retour.',
    category: 'logistique',
    categoryLabel: 'Logistique & COD',
    readTime: '6 min',
    date: '22 Mars 2025',
    featured: false,
    tags: ['Retours', 'COD', 'Optimisation'],
    color: 'amber',
  },

];

const colorMap = {
  blue:   { badge: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30', tag: 'bg-blue-50 dark:bg-blue-500/10 text-blue-500', dot: 'bg-blue-500', accent: 'border-l-blue-500' },
  emerald:{ badge: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30', tag: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500', dot: 'bg-emerald-500', accent: 'border-l-emerald-500' },
  violet: { badge: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/30', tag: 'bg-violet-50 dark:bg-violet-500/10 text-violet-500', dot: 'bg-violet-500', accent: 'border-l-violet-500' },
  amber:  { badge: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/30', tag: 'bg-amber-50 dark:bg-amber-500/10 text-amber-500', dot: 'bg-amber-500', accent: 'border-l-amber-500' },
  rose:   { badge: 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/30', tag: 'bg-rose-50 dark:bg-rose-500/10 text-rose-500', dot: 'bg-rose-500', accent: 'border-l-rose-500' },
  indigo: { badge: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30', tag: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500', dot: 'bg-indigo-500', accent: 'border-l-indigo-500' },
};

// ─── Components ────────────────────────────────────────────────────────────────

const gradientMap = {
  blue:   { cover: 'from-blue-600 to-blue-400',     text: 'text-blue-500',    badge: 'bg-blue-600/20 text-blue-100 border-blue-400/30', tag: 'bg-blue-500/15 text-blue-400' },
  emerald:{ cover: 'from-emerald-600 to-teal-400',  text: 'text-emerald-500', badge: 'bg-emerald-600/20 text-emerald-100 border-emerald-400/30', tag: 'bg-emerald-500/15 text-emerald-400' },
  violet: { cover: 'from-violet-600 to-purple-400', text: 'text-violet-500',  badge: 'bg-violet-600/20 text-violet-100 border-violet-400/30', tag: 'bg-violet-500/15 text-violet-400' },
  amber:  { cover: 'from-amber-500 to-orange-400',  text: 'text-amber-500',   badge: 'bg-amber-500/20 text-amber-100 border-amber-400/30', tag: 'bg-amber-500/15 text-amber-400' },
  rose:   { cover: 'from-rose-600 to-pink-400',     text: 'text-rose-500',    badge: 'bg-rose-600/20 text-rose-100 border-rose-400/30', tag: 'bg-rose-500/15 text-rose-400' },
  indigo: { cover: 'from-indigo-600 to-blue-400',   text: 'text-indigo-500',  badge: 'bg-indigo-600/20 text-indigo-100 border-indigo-400/30', tag: 'bg-indigo-500/15 text-indigo-400' },
};

const ArticleCard = ({ article, large = false }) => {
  const c = gradientMap[article.color] || gradientMap.blue;
  const CatIcon = categories.find(x => x.id === article.category)?.icon || BookOpen;
  return (
    <article className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-black/30 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      {/* ── Cover ── */}
      <div className={`${large ? 'h-52' : 'h-44'} bg-gradient-to-br ${c.cover} relative overflow-hidden shrink-0 flex items-end p-6`}>
        {/* Decorative background elements */}
        <div className="absolute top-[-20%] right-[-10%] w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-5%] w-40 h-40 rounded-full bg-black/10 pointer-events-none" />

        {/* Big background number */}
        <span className="absolute top-3 right-4 text-[72px] leading-none font-black text-white/10 select-none pointer-events-none tabular-nums">
          {article.id.toString().padStart(2, '0')}
        </span>

        {/* Icon badge */}
        <div className="relative z-10 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-2xl border ${c.badge} backdrop-blur-sm flex items-center justify-center`}>
            <CatIcon size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70 mb-0.5">{article.categoryLabel}</p>
            <div className="flex items-center gap-1.5 text-white/80">
              <Clock size={10} />
              <span className="text-[10px] font-medium">{article.readTime} de lecture</span>
            </div>
          </div>
        </div>

        {/* Featured badge */}
        {article.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[9px] font-black uppercase tracking-wider rounded-full">
            ⭐ À la une
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h2 className={`${large ? 'text-xl' : 'text-base'} font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-primary transition-colors`}>
          {article.title}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag, i) => (
            <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${c.tag}`}>#{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[10px] text-slate-400 font-medium">{article.date}</span>
          <span className="flex items-center gap-1 text-[10px] font-black text-primary group-hover:gap-2 transition-all">
            Lire <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
};


const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <div className="relative rounded-[2.5rem] bg-slate-900 dark:bg-slate-900 border border-slate-800 overflow-hidden p-10 sm:p-14 text-center shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
          <Zap size={12} className="text-primary" />
          <span className="text-[11px] font-bold text-slate-300">Conseils exclusifs chaque semaine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          Restez un coup d'avance.<br/><span className="text-primary">Abonnez-vous gratuitement.</span>
        </h2>
        <p className="text-slate-400 font-medium mb-8 max-w-lg mx-auto">
          Recevez chaque semaine les meilleures ressources e-commerce, directement dans votre boîte mail. Pas de spam, jamais.
        </p>
        {sent ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-2xl font-bold text-sm">
            ✓ Vous êtes inscrit ! Merci.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            <button type="submit" className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-black rounded-2xl text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-primary/25 whitespace-nowrap flex items-center gap-2">
              S'abonner <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'all' || a.category === activeCategory;
    const matchSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.filter(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/30 mb-8 mx-auto">
            <BookOpen size={12} className="text-violet-500" />
            <span className="text-[11px] font-bold text-violet-600 dark:text-violet-400 tracking-tight">Ressources · Guides · Conseils</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.05]">
            Vendez plus.<br/><span className="text-primary italic">Apprenez mieux.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mb-10">
            Guides pratiques, conseils terrain et ressources exclusives pour les e-commerçants algériens qui veulent passer au niveau supérieur.
          </p>
          {/* Search bar */}
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article…"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="pb-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => {
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  <CatIcon size={13} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Aucun article trouvé</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Essayez un autre terme de recherche ou une autre catégorie.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="mt-6 text-xs font-black text-primary hover:underline">
                Tout afficher
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Featured articles */}
              {featured.length > 0 && (
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8">À la une</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {featured.map(a => <ArticleCard key={a.id} article={a} large />)}
                  </div>
                </div>
              )}

              {/* Rest of articles */}
              {rest.length > 0 && (
                <div>
                  {featured.length > 0 && <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Tous les articles</p>}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map(a => <ArticleCard key={a.id} article={a} />)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Load more placeholder */}
          {filtered.length > 0 && (
            <div className="text-center mt-16">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-black rounded-2xl text-sm transition-all active:scale-95">
                Charger plus d'articles <ArrowRight size={16} />
              </button>
              <p className="text-[10px] text-slate-400 mt-3">{filtered.length} article{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Topic Quick Links ── */}
      {/* <section className="py-16 lg:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Thématiques populaires</p>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Explorez par sujet.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Démarrer votre boutique',  icon: ShoppingCart, count: 6,  color: 'blue',   cat: 'ecommerce'    },
              { label: 'Augmenter la conversion',   icon: TrendingUp,   count: 4,  color: 'violet', cat: 'conversion'   },
              { label: 'Maîtriser le COD',          icon: Truck,        count: 5,  color: 'amber',  cat: 'logistique'   },
              { label: 'Confirmation d\'appels',     icon: PhoneCall,    count: 3,  color: 'emerald',cat: 'confirmation' },
              { label: 'Marketing & Publicité',     icon: Zap,          count: 7,  color: 'rose',   cat: 'marketing'    },
              { label: 'Lire ses analytics',        icon: BarChart3,    count: 4,  color: 'indigo', cat: 'analytics'    },
              { label: 'Gestion des stocks',        icon: Package,      count: 3,  color: 'blue',   cat: 'ecommerce'    },
              { label: 'Optimisation business',     icon: TrendingUp,   count: 5,  color: 'violet', cat: 'conversion'   },
            ].map((t, i) => {
              const TIcon = t.icon;
              const c = colorMap[t.color];
              return (
                <button
                  key={i}
                  onClick={() => { setActiveCategory(t.cat); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="group flex items-center gap-3 p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-left"
                >
                  <div className={`w-9 h-9 rounded-xl ${c.tag} bg-opacity-20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <TIcon size={16} className={c.tag.replace('bg-', 'text-').split(' ')[1]} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{t.label}</p>
                    <p className="text-[9px] text-slate-400 font-medium">{t.count} articles</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ── Newsletter ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <NewsletterBanner />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
