import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, Sparkles, Zap, Shield, Crown } from 'lucide-react';
import Logo from '../ui/Logo';

const PricingSection = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'risego',
      name: 'RiseGo',
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      target: 'Pour les débutants qui veulent se lancer.',
      monthlyPrice: '1,900',
      annualPrice: '1,500',
      popular: false,
      features: [
        'Boutique prête à l’emploi',
        'Base solide pour démarrer',
        'Interface d’administration simple',
        'Volume de commandes réduit',
        'Démarrage rapide'
      ],
      cta: 'Démarrer avec RiseGo'
    },
        {
      id: 'risecart',
      name: 'RiseCart',
      icon: <Logo showText={false} iconClassName="w-10 h-10 shadow-sm" className="flex items-center gap-2 shrink-0 cursor-pointer pointer-events-none" />,
      target: 'Pour les vendeurs structurés et ambitieux.',
      monthlyPrice: '7,900',
      annualPrice: '5,900',
      popular: true,
      features: [
        'Outils d’optimisation avancés',
        'Capacités d’hébergement étendues',
        'Logique multi-boutique incluse',
        'Automatisations personnalisées',
        'Intégrations',
        'Pilotage et support premium dédiés'
      ],
      cta: 'Contacter les ventes'
    },
    {
      id: 'risebasic',
      name: 'RiseBasic',
      icon: <Shield className="w-6 h-6 text-primary" />,
      target: 'Pour les vendeurs en croissance.',
      monthlyPrice: '3,900',
      annualPrice: '2,900',
      popular: false,
      features: [
        'Plus grande capacité de traitement',
        'Fonctionnalités marketing poussées',
        'Analytics et rapports plus riches',
        'Gestion des stocks avancée',
        'Meilleure flexibilité de design'
      ],
      cta: 'Démarrer l\'essai gratuit'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden" id="pricing">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-800 dark:text-slate-200 font-medium text-sm animate-slide-up">
            <Sparkles size={16} className="text-primary" />
            <span>{t('Tarification Simple et Transparente')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
             Une offre adaptée à chaque étape de votre <span className="text-primary">Croissance</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t("Testez toutes nos fonctionnalités sans risque. L'essai est 100% gratuit, sans engagement, et sans carte bancaire requise.")}
          </p>

          {/* Enhanced Billing Switch */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            
            <div className="relative flex items-center p-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-inner">
              <div 
                className={`absolute inset-y-1.5 w-[calc(50%-6px)] bg-white dark:bg-slate-950 rounded-full shadow-sm transition-transform duration-300 ease-out border border-slate-200 dark:border-slate-700 ${isAnnual ? 'translate-x-[100%] ml-[3px]' : 'translate-x-0 ml-[3px]'}`} 
              />
              <button 
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 w-32 py-2 text-sm font-bold transition-colors rounded-full focus:outline-none ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                Mensuel
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 w-32 py-2 text-sm font-bold transition-colors rounded-full focus:outline-none ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                Annuel
              </button>
            </div>


          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 animate-slide-up ${
                plan.popular 
                  ? 'bg-white dark:bg-slate-950 border-2 border-primary shadow-2xl shadow-primary/10 lg:-translate-y-4' 
                  : 'bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-[10px] xs:text-xs font-black uppercase tracking-wider rounded-full shadow-lg shadow-primary/20 whitespace-nowrap">
                  Choix le plus populaire
                </div>
              )}

              {/* Card Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-primary/10' : 'bg-slate-100 dark:bg-slate-800'}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{plan.name}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px] mb-6">
                {plan.target}
              </p>

              {/* Price */}
              <div className="mb-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl xs:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    DA / {isAnnual ? 'mois' : 'mois'}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-emerald-500 font-bold mt-2">
                    Facturé annuellement (Économie de 20%)
                  </p>
                )}
                {!isAnnual && (
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-medium">
                    Facturé mensuellement
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                  Ce qui est inclus :
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={18} className={`shrink-0 ${plan.popular ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span className="text-sm font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button 
                className={`mt-10 w-full py-4 px-6 rounded-2xl font-black tracking-wide flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
