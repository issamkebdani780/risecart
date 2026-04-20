import React from 'react';
import { ShoppingBag, Box, ClipboardList, PieChart, Share2, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeaturesGrid = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: 'Création de boutique',
      desc: 'Design moderne, ultra-responsive et optimisé pour la conversion sur mobile et desktop.',
      icon: <ShoppingBag size={24} />,
      accent: 'primary'
    },
    {
      title: 'Gestion des produits',
      desc: 'Catalogue complet avec variantes, gestion des stocks et fiches produits haute définition.',
      icon: <Box size={24} />,
      accent: 'secondary'
    },
    {
      title: 'Gestion des commandes',
      desc: 'Pipeline de traitement fluide avec filtres avancés et historique complet par client.',
      icon: <ClipboardList size={24} />,
      accent: 'primary'
    },
    {
      title: 'Statistiques & Analytics',
      desc: 'Tableaux de bord précis pour suivre vos ventes, taux de conversion et panier moyen.',
      icon: <PieChart size={24} />,
      accent: 'secondary'
    },
    {
      title: 'Écosystème Connecté',
      desc: 'Synchronisation parfaite avec RiseManager et RiseConfirm pour un pilotage total.',
      icon: <Share2 size={24} />,
      accent: 'primary'
    },
    {
      title: 'Optimisation Scalability',
      desc: 'Infrastructure pensée pour supporter vos pics de trafic et l\'augmentation de vos volumes.',
      icon: <TrendingUp size={24} />,
      accent: 'secondary'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500" id="features">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 blur-[150px] rounded-full -z-10 ltr:translate-x-1/2 rtl:-translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Tout ce dont tu as besoin pour <span className="text-primary italic">dominer</span> le marché.</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          Nous avons regroupé toutes les fonctionnalités essentielles dans une interface unique et puissante.
        </p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${feature.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
              }`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors tracking-tight">{feature.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
