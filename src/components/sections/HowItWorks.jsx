import React from 'react';
import { UserPlus, Settings, PackagePlus, ShoppingBag, TrendingUp, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    { 
      number: '01', 
      title: 'Créer son compte', 
      desc: 'Inscription rapide pour accéder à votre espace commerçant.',
      icon: <UserPlus size={24} />
    },
    { 
      number: '02', 
      title: 'Configurer sa boutique', 
      desc: 'Personnalisez le design selon votre marque en quelques clics.',
      icon: <Settings size={24} />
    },
    { 
      number: '03', 
      title: 'Ajouter ses produits', 
      desc: 'Importez votre catalogue avec images et descriptions détaillées.',
      icon: <PackagePlus size={24} />
    },
    { 
      number: '04', 
      title: 'Recevoir ses commandes', 
      desc: 'Suivez en direct l\'arrivée de vos premiers clients.',
      icon: <ShoppingBag size={24} />
    },
    { 
      number: '05', 
      title: 'Piloter et scaler', 
      desc: 'Analysez vos datas et optimisez vos stratégies de vente.',
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-500">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6">
              Mise en route
           </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Comment ça <span className="text-primary italic">marche</span> ?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
             Un parcours simple et fluide, conçu pour vous faire vendre le plus rapidement possible.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute top-8 bottom-8 left-[39px] lg:left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 lg:-translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0;
              return (
                <div key={i} className={`flex tracking-tight group ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:items-center relative`}>
                   
                   {/* Center node (Timeline marker) */}
                   <div className="absolute left-[20px] lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-950 shadow-md flex items-center justify-center z-10 hidden md:flex">
                      <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-primary transition-colors duration-500" />
                   </div>

                   {/* Content Card */}
                   <div className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} pl-0`}>
                      <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                         <div className="flex items-start lg:items-center gap-6 flex-col lg:flex-row">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 shrink-0">
                               {step.icon}
                            </div>
                            <div>
                               <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Étape {step.number}</div>
                               <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                                  {step.title}
                               </h3>
                               <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                  {step.desc}
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
