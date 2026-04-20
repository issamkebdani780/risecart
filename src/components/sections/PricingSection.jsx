import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Zap, ShieldCheck, Rocket, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PricingSection = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'RiseGo',
      tagline: 'Pour les débutants',
      price: isAnnual ? '0' : '0',
      desc: 'L\'offre idéale pour se lancer sans risque et valider votre premier concept.',
      features: [
        'Boutique prête à l\'emploi',
        'Base technique solide',
        'Interface 100% simple',
        'Volume de commandes réduit',
        'Démarrage instantané'
      ],
      cta: 'Démarrer gratuitement',
      popular: false,
      color: 'slate',
      icon: <Rocket size={20} />
    },
    {
      name: 'RiseBasic',
      tagline: 'Pour la croissance',
      price: isAnnual ? '29' : '39',
      desc: 'Passez à la vitesse supérieure avec des outils pensés pour le volume.',
      features: [
        'Plus de capacité de vente',
        'Fonctionnalités poussées',
        'Analytics plus riches',
        'Gestion avancée du stock',
        'Meilleure flexibilité design'
      ],
      cta: 'Choisir RiseBasic',
      popular: true,
      color: 'primary',
      icon: <Zap size={20} />
    },
    {
      name: 'RiseCart',
      tagline: 'L\'élite e-commerce',
      price: isAnnual ? '79' : '99',
      desc: 'Le système complet pour les vendeurs structurés et hautement ambitieux.',
      features: [
        'Outils business avancés',
        'Capacités étendues (illimité)',
        'Logique Multi-boutique',
        'Automatisations intelligentes',
        'Intégrations écosystème totales',
        'Pilotage premium & stratégique'
      ],
      cta: 'Passer à RiseCart',
      popular: false,
      color: 'violet',
      icon: <Layers size={20} />
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden" id="pricing">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03] dark:opacity-[0.05] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6">
              Transparence & Valeur
           </div>
          <h2 className="text-4xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.05]">
             Des offres adaptées à ton <span className="text-primary italic">ambition</span>.
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-10">
             Commencez gratuitement et évoluez avec un système qui grandit avec vous.
          </p>
          
          {/* Monthly/Annual Switch */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <span className={`text-sm font-black uppercase tracking-widest ${!isAnnual ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}>{t('pricing_monthly')}</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-slate-100 dark:bg-slate-900 rounded-full relative p-1.5 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-inner"
            >
              <div className={`w-5 h-5 bg-primary rounded-full transition-all duration-500 shadow-xl ${isAnnual ? 'ltr:translate-x-8 rtl:-translate-x-8' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
               <span className={`text-sm font-black uppercase tracking-widest ${isAnnual ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}>{t('pricing_annual')}</span>
               <span className="text-[10px] bg-primary text-white font-black px-2 py-0.5 rounded-full ltr:ml-1 rtl:mr-1 animate-bounce-soft">{t('pricing_save')}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-white dark:bg-slate-900 rounded-[3rem] p-10 lg:p-14 flex flex-col relative overflow-hidden transition-all duration-700 hover:scale-[1.02] border border-slate-100 dark:border-slate-800 group ${
                plan.popular ? 'shadow-[0_40px_80px_-15px_rgba(0,162,255,0.15)] dark:shadow-[0_40px_80px_-15px_black] border-primary/20 bg-slate-50/50 dark:bg-slate-900/50 scale-[1.05] z-10' : 'shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-10 ltr:right-10 rtl:left-10 bg-primary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-tighter shadow-xl shadow-primary/20 flex items-center gap-2">
                  <Sparkles size={12} /> {t('pricing_popular')}
                </div>
              )}
              
              <div className="mb-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-800 ${plan.color === 'violet' ? 'bg-violet-500/10 text-violet-500' : 'bg-primary/10 text-primary'}`}>
                   {plan.icon}
                </div>
                <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${plan.color === 'violet' ? 'text-violet-500' : 'text-primary'}`}>{plan.tagline}</p>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-none">{plan.name}</h3>
                <div className="flex items-baseline gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 dark:text-slate-600 text-xl font-black italic">{t('pricing_currency')}</span>
                  <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{plan.price}</span>
                  <span className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-widest">{t('pricing_per_month')}</span>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 leading-relaxed font-medium">
                {plan.desc}
              </p>

              <div className="h-px bg-slate-100 dark:bg-slate-800 mb-10" />

              <ul className="space-y-6 mb-12 flex-1 relative z-10">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-4 text-xs lg:text-sm text-slate-900 dark:text-white font-black tracking-tight group/feat transition-all hover:translate-x-1">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-800 ${plan.color === 'violet' ? 'bg-violet-500/5 text-violet-500' : 'bg-primary/5 text-primary'}`}>
                       <ShieldCheck size={14} strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 group-hover:scale-[1.03] active:scale-95 shadow-xl ${
                plan.popular 
                ? 'bg-primary text-white shadow-primary/30' 
                : plan.color === 'violet' 
                ? 'bg-violet-600 text-white shadow-violet-500/30'
                : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-700 hover:border-primary/40'
              }`}>
                {plan.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center flex flex-col items-center gap-6">
           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <Zap size={16} className="text-primary fill-primary animate-pulse" />
              <p className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest">
                 7 jours d'essai gratuit complet &bull; Sans carte bancaire
              </p>
           </div>
           
           <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Promotion de lancement active &bull; Prix garantis à vie
           </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
