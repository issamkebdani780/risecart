import React from 'react';
import { Users, Zap, TrendingUp, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';

const TrustBand = () => {
  const { t } = useTranslation();

  const trustPoints = [
    { text: t('trust_point_1'), icon: <Users size={14} /> },
    { text: t('trust_point_2'), icon: <Zap size={14} /> },
    { text: t('trust_point_3'), icon: <Layers size={14} /> },
    { text: t('trust_point_4'), icon: <TrendingUp size={14} /> },
  ];

  const stats = [
    { label: 'Vendeurs Actifs', value: '2,500+' },
    { label: 'Commandes / Mois', value: '350K+' },
    { label: 'Taux Succès', value: '94%' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Upper Band: Scrolling Trust Badges */}
      <div className="py-4 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee hover:pause group">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex shrink-0">
               {trustPoints.map((point, index) => (
                 <div key={index} className="flex items-center gap-4 px-10 border-r border-slate-200 dark:border-slate-800 last:border-r-0">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                       {point.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{point.text}</span>
                 </div>
               ))}
             </div>
           ))}
        </div>
        {/* Gradients to hide edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Lower Band: Real Metrics & Logo/Member info */}
      <div className="py-12 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Side: RiseCart Logo & Group Membership */}
            <div className="flex items-center gap-6 group">
               <Logo 
                 showText={false} 
                 iconClassName="w-16 h-16 shadow-xl shadow-slate-900/10 group-hover:scale-105 transition-transform duration-500"
               />
               <div>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('trust_label')}</span>
                     <div className="h-px w-8 bg-slate-100 dark:bg-slate-800" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-none">
                     Propulsé par <span className="text-primary italic">RiseGroup</span>
                  </h3>
               </div>
            </div>

            {/* Right Side: Key Numbers */}
            <div className="grid grid-cols-3 gap-8 sm:gap-16 lg:gap-20">
               {stats.map((stat, i) => (
                 <div key={i} className="text-center lg:text-left group cursor-default">
                    <p className="text-2xl xs:text-3xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors tabular-nums tracking-tighter">
                       {stat.value}
                    </p>
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-1">
                       {stat.label}
                    </p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBand;
