import React, { useState } from 'react';
import {
  Play, ArrowRight, CheckCircle2, Clock, Users, ShieldCheck,
  Star, PhoneCall, Zap, BarChart3, Box, Layout,
  TrendingUp, Package, Search, Filter, Plus, ToggleLeft, ToggleRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
  { icon: Layout,    title: 'Boutique en quelques clics',  desc: 'Votre vitrine est opérationnelle le jour même, sans aucune compétence technique.' },
  { icon: Box,       title: 'Catalogue structuré',          desc: 'Gérez vos produits, variants et stocks depuis une interface claire et rapide.' },
  { icon: BarChart3, title: 'Données en temps réel',        desc: 'Revenus, commandes, conversions — tout visible d\'un coup d\'œil.' },
  { icon: Zap,       title: 'Écosystème natif',             desc: 'Connexion automatique avec RiseConfirm, RiseManager et RisePay.' },
];

const testimonials = [
  { name: 'Karim B.', role: 'Vendeur Oran', avatar: 'K', stars: 5, text: 'En 2 semaines j\'ai atteint mon premier million de DA de CA. La plateforme est fluide et le support réactif.' },
  { name: 'Sara M.', role: 'Boutique Alger', avatar: 'S', stars: 5, text: 'La gestion des commandes m\'a économisé 3 heures de travail par jour. Je recommande à 100%.' },
  { name: 'Yacine T.', role: 'Mode & Accessoires', avatar: 'Y', stars: 5, text: 'Avant RiseCart je perdais des commandes. Maintenant tout est confirmé et tracé automatiquement.' },
];

const TABS = ['Dashboard', 'Catalogue', 'Commandes'];

/* ── Dashboard panel ── */
const DashboardPanel = () => (
  <div className="flex flex-col gap-3 h-full">
    {/* KPI row */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Revenus', value: '124 500', sub: '+14.2%', color: 'text-emerald-500', icon: TrendingUp },
        { label: 'Commandes', value: '1 043',  sub: '+8.7%',  color: 'text-blue-500',    icon: Package    },
        { label: 'Conversion', value: '4.8%',  sub: '+1.1%',  color: 'text-violet-500',  icon: BarChart3  },
      ].map((k, i) => {
        const KIcon = k.icon;
        return (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{k.label}</span>
              <KIcon size={11} className={k.color} />
            </div>
            <div className="text-sm font-black text-slate-900 dark:text-white tabular-nums">{k.value} <span className="text-[9px] text-slate-400 font-medium">DA</span></div>
            <div className={`text-[9px] font-bold ${k.color}`}>{k.sub} ce mois</div>
          </div>
        );
      })}
    </div>
    {/* Bar chart */}
    <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-3 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Revenus — 7 jours</span>
        <span className="text-[9px] text-emerald-500 font-black">↑ 14.2%</span>
      </div>
      <div className="flex-1 flex items-end gap-1 pb-1">
        {[45, 70, 52, 88, 67, 95, 80].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar" title={`${h * 1300} DA`}>
            <div
              className="w-full rounded-sm transition-all duration-300 group-hover/bar:brightness-110 cursor-pointer"
              style={{ height: `${h}%`, background: i === 5 ? 'var(--color-primary)' : 'rgba(0,162,255,0.3)' }}
            />
            <span className="text-[7px] text-slate-400 font-medium hidden sm:block">{['L','M','M','J','V','S','D'][i]}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Mini orders table */}
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800">
        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Dernières commandes</span>
        <span className="text-[8px] text-primary font-bold cursor-pointer hover:underline">Voir tout →</span>
      </div>
      {[{id:'#1048', name:'Karim B.', amount:'4 500', status:'Expédié', color:'text-violet-500 bg-violet-50 dark:bg-violet-500/10'},
        {id:'#1047', name:'Sara M.', amount:'7 200', status:'Confirmé', color:'text-blue-500 bg-blue-50 dark:bg-blue-500/10'},
        {id:'#1046', name:'Yacine T.', amount:'2 900', status:'En attente', color:'text-amber-500 bg-amber-50 dark:bg-amber-500/10'},
      ].map((o, i) => (
        <div key={i} className="flex items-center justify-between px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border-b border-slate-50 dark:border-slate-800/50 last:border-0">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black text-slate-400">{o.id}</span>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{o.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-slate-900 dark:text-white">{o.amount} DA</span>
            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full ${o.color}`}>{o.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Catalogue panel ── */
const CataloguePanel = () => {
  const [toggles, setToggles] = useState([true, false, true, true]);
  const products = [
    { name: 'T-Shirt Premium',   category: 'Mode',          price: '2 900', stock: 34  },
    { name: 'Écouteurs Bluetooth', category: 'Électronique', price: '8 500', stock: 12  },
    { name: 'Sac à main Cuir',  category: 'Accessoires',   price: '5 200', stock: 8   },
    { name: 'Montre Clasique',  category: 'Bijoux',        price: '12 000', stock: 3  },
  ];
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5">
          <Search size={11} className="text-slate-400" />
          <span className="text-[10px] text-slate-400">Rechercher un produit…</span>
        </div>
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5">
          <Filter size={11} className="text-slate-400" />
        </div>
        <div className="flex items-center gap-1 bg-primary text-white rounded-lg px-2 py-1.5">
          <Plus size={11} />
          <span className="text-[9px] font-black">Ajouter</span>
        </div>
      </div>
      {/* Product list */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto_auto] text-[8px] font-black text-slate-400 uppercase tracking-widest px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <span>Produit</span><span>Prix</span><span>Stock</span><span>Actif</span>
        </div>
        {products.map((p, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] items-center px-3 py-2.5 border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer gap-3">
            <div>
              <div className="text-[10px] font-bold text-slate-800 dark:text-white">{p.name}</div>
              <div className="text-[8px] text-slate-400">{p.category}</div>
            </div>
            <div className="text-[10px] font-black text-slate-900 dark:text-white whitespace-nowrap">{p.price} DA</div>
            <div className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${p.stock < 10 ? 'text-rose-500 bg-rose-50 dark:bg-rose-500/10' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10'}`}>{p.stock}</div>
            <button onClick={() => setToggles(t => t.map((v,j) => j===i ? !v : v))} className="flex items-center">
              {toggles[i]
                ? <div className="w-7 h-4 bg-primary rounded-full flex items-center px-0.5 justify-end"><div className="w-3 h-3 bg-white rounded-full shadow" /></div>
                : <div className="w-7 h-4 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center px-0.5"><div className="w-3 h-3 bg-white rounded-full shadow" /></div>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Commandes panel ── */
const CommandesPanel = () => {
  const [filter, setFilter] = useState('Tout');
  const orders = [
    { id:'#1052', client:'Ahmed K.', wilaya:'Alger',   amount:'5 400', status:'Confirmé',  date:'Auj. 10:23' },
    { id:'#1051', client:'Fatima Z.', wilaya:'Oran',    amount:'8 200', status:'Expédié',   date:'Auj. 09:14' },
    { id:'#1050', client:'Mohamed B.',wilaya:'Sétif',   amount:'3 100', status:'En attente', date:'Hier 18:45' },
    { id:'#1049', client:'Sara L.',   wilaya:'Annaba',  amount:'6 700', status:'Livré',     date:'Hier 14:30' },
    { id:'#1048', client:'Karim T.',  wilaya:'Blida',   amount:'2 200', status:'Annulé',   date:'Hier 11:02' },
  ];
  const filtered = filter === 'Tout' ? orders : orders.filter(o => o.status === filter);
  const statusColor = {
    'Confirmé':   'text-blue-600 bg-blue-50 dark:bg-blue-500/10',
    'Expédié':    'text-violet-600 bg-violet-50 dark:bg-violet-500/10',
    'Livré':      'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10',
    'En attente': 'text-amber-600 bg-amber-50 dark:bg-amber-500/10',
    'Annulé':     'text-rose-600 bg-rose-50 dark:bg-rose-500/10',
  };
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Search + filter pills */}
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5">
          <Search size={11} className="text-slate-400" />
          <span className="text-[10px] text-slate-400">N° commande, client…</span>
        </div>
        <Filter size={13} className="text-slate-400" />
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {['Tout','Confirmé','Expédié','En attente','Livré'].map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={`text-[8px] font-black px-2 py-1 rounded-full border transition-all ${
              filter === s ? 'bg-primary text-white border-primary shadow-sm shadow-primary/20' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:border-primary/40'
            }`}>{s}</button>
        ))}
      </div>
      {/* Orders list */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        <div className="grid grid-cols-[auto_1fr_auto_auto] text-[8px] font-black text-slate-400 uppercase tracking-widest px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 gap-2">
          <span>N°</span><span>Client</span><span>Montant</span><span>Statut</span>
        </div>
        <div className="flex-1 overflow-auto">
          {filtered.map((o, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr_auto_auto] items-center px-3 py-2.5 border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer gap-2">
              <span className="text-[9px] font-black text-slate-400">{o.id}</span>
              <div>
                <div className="text-[10px] font-bold text-slate-800 dark:text-white">{o.client}</div>
                <div className="text-[8px] text-slate-400">{o.wilaya} · {o.date}</div>
              </div>
              <span className="text-[10px] font-black text-slate-900 dark:text-white whitespace-nowrap">{o.amount} DA</span>
              <span className={`text-[7px] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap ${statusColor[o.status]}`}>{o.status}</span>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-center py-8 text-[10px] text-slate-400">Aucune commande</div>}
        </div>
      </div>
    </div>
  );
};

const slots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

// ─── Sub-components ────────────────────────────────────────────────────────────

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-slate-900 border border-slate-800 shadow-2xl shadow-primary/10 group cursor-pointer"
      onClick={() => setPlaying(true)}>
      {/* Thumbnail */}
      {!playing && (
        <>
          {/* Simulated UI screenshot */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/50 flex flex-col">
            {/* Mock top bar */}
            <div className="h-10 bg-slate-800/80 border-b border-slate-700/50 flex items-center px-5 gap-2 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="mx-auto bg-slate-700 rounded-lg px-8 py-1 w-40 h-5" />
            </div>
            {/* Mock dashboard content */}
            <div className="flex-1 p-6 grid grid-cols-3 gap-4 opacity-60">
              {['4,500', '94%', '124K'].map((v, i) => (
                <div key={i} className="bg-slate-800 rounded-2xl p-4 border border-slate-700/50 flex flex-col gap-2">
                  <div className="h-1.5 w-1/2 bg-slate-600 rounded" />
                  <div className="text-xl font-black text-white">{v}</div>
                  <div className="h-1.5 w-3/4 bg-slate-700 rounded" />
                </div>
              ))}
              <div className="col-span-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex items-end gap-1.5 p-4 h-24">
                {[40, 70, 50, 90, 65, 80, 55, 95, 75].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/40 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-black/40 group-hover:scale-110 transition-transform duration-300">
              <Play size={28} className="text-primary ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Démonstration complète</p>
            <p className="text-lg font-black">RiseCart en action · 4 min</p>
          </div>
        </>
      )}
      {playing && (
        <iframe
          src="https://www.youtube.com/embed/"
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  );
};

const DashboardPreview = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex gap-2">
        {TABS.map((t, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              active === i
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}>
            {t}
          </button>
        ))}
      </div>
      {/* Dashboard window chrome */}
      <div className="rounded-[1.5rem] bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-900/50 overflow-hidden">
        {/* Mac-style top bar */}
        <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-70" />
          <div className="mx-auto bg-slate-800 rounded px-4 text-[9px] text-slate-500 py-0.5">app.risecart.dz · {TABS[active]}</div>
        </div>
        {/* Content area */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 min-h-[320px] flex flex-col">
          {active === 0 && <DashboardPanel />}
          {active === 1 && <CataloguePanel />}
          {active === 2 && <CommandesPanel />}
        </div>
      </div>
    </div>
  );
};

// ─── Booking Form ──────────────────────────────────────────────────────────────

const BookingForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', business: '', slot: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.slot) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center">
          <CheckCircle2 size={36} className="text-emerald-500" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Demande envoyée !</h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Notre équipe vous contactera dans les <strong className="text-slate-700 dark:text-slate-300">2 heures ouvrées</strong> pour confirmer votre créneau.</p>
        </div>
        <button onClick={() => setSent(false)} className="text-xs font-black text-primary hover:underline">Envoyer une autre demande</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Prénom & Nom *</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Ahmed Benali"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Téléphone *</label>
          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="05 XX XX XX XX" type="tel"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Email</label>
        <input name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" type="email"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
      </div>
      <div>
        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Votre activité</label>
        <input name="business" value={form.business} onChange={handleChange} placeholder="Mode, Électronique, Beauté…"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
      </div>
      <div>
        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Choisir un créneau *</label>
        <div className="grid grid-cols-3 gap-2">
          {slots.map(slot => (
            <button type="button" key={slot}
              onClick={() => setForm(f => ({ ...f, slot }))}
              className={`py-3 rounded-xl border text-sm font-black transition-all ${
                form.slot === slot
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary/40 hover:text-primary bg-white dark:bg-slate-900'
              }`}>
              {slot}
            </button>
          ))}
        </div>
      </div>
      <button type="submit"
        className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-black rounded-2xl text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95">
        Réserver ma démo <ArrowRight size={16} />
      </button>
      <p className="text-center text-[10px] text-slate-400 font-medium">
        <ShieldCheck size={11} className="inline mr-1 text-emerald-500" />
        Aucun engagement · Démonstration 100% gratuite · Réponse sous 2h
      </p>
    </form>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const DemoPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-8 mx-auto">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-tight">Démo disponible dès maintenant · Gratuit</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.05]">
            Voyez RiseCart<br/><span className="text-primary italic">en action.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Regardez la démo complète ou réservez une session personnalisée avec notre équipe. 20 minutes suffisent pour tout comprendre.
          </p>
        </div>
      </section>

      {/* ── Video + Screenshots ── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col gap-12">
          {/* Video — centered, full width */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-3xl mx-auto">
              <VideoPlayer />
            </div>
            {/* Reassurance stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg mx-auto">
              {[
                { icon: Clock, value: '4 min', label: 'Durée de la démo' },
                { icon: Users, value: '2,500+', label: 'Marchands actifs' },
                { icon: Star,  value: '4.9/5',  label: 'Note moyenne' },
              ].map((r, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <r.icon size={16} className="text-primary mb-1.5" />
                  <span className="text-base font-black text-slate-900 dark:text-white">{r.value}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{r.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview — full width below */}
          <div className="space-y-5">
            <div className="text-center">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3">Captures d'écran</p>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Explorez l'interface <span className="text-slate-400 dark:text-slate-500 font-medium">module par module.</span></h2>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>


      {/* ── Benefits argumentaire ── */}
      <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Pourquoi une démo ?</p>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">20 minutes. Une décision<br/><span className="text-slate-400 dark:text-slate-500 font-medium">qui change tout.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const BIcon = b.icon;
              return (
                <div key={i} className="group flex flex-col gap-4 p-6 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <BIcon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-1.5 tracking-tight">{b.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section className="py-20 lg:py-32" id="reserver">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left argumentaire */}
            <div className="space-y-8 lg:sticky lg:top-28">
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Session personnalisée</p>
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Réservez votre<br/><span className="text-primary italic">démo gratuite.</span></h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Un expert RiseCart vous guide à travers toutes les fonctionnalités et répond à toutes vos questions. Aucun engagement, aucune surprise.
                </p>
              </div>

              {/* What's included */}
              <div className="space-y-3">
                {[
                  'Configuration initiale de votre boutique',
                  'Tour complet de toutes les fonctionnalités',
                  'Réponses à toutes vos questions',
                  'Estimation d\'un plan adapté à votre activité',
                  'Accès immédiat à l\'essai gratuit si souhaité',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Testimonials mini */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Ce qu'ils en disent</p>
                {testimonials.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white">{t.name}</span>
                        <span className="text-[9px] text-slate-400">{t.role}</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.stars }).map((_, s) => (
                            <Star key={s} size={9} className="text-amber-400" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">"{t.text}"</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: ShieldCheck, text: 'Démo 100% gratuite' },
                  { icon: Clock,       text: 'Réponse sous 2h' },
                  { icon: PhoneCall,   text: 'En français / arabe' },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <badge.icon size={13} className="text-primary" />
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 p-8 sm:p-10">
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Choisissez votre créneau</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Disponible du Dimanche au Jeudi · 9h–17h</p>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.2)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Pas prêt pour une démo ?<br/><span className="text-primary">Testez directement.</span></h2>
              <p className="text-slate-400 font-medium mb-8 max-w-lg mx-auto">7 jours d'accès complet. Aucune carte bancaire requise. Votre boutique peut être en ligne ce soir.</p>
              <a href="/signup" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-primary/25">
                Démarrer l'essai gratuit <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
