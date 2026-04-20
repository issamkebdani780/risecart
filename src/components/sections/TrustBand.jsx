import React, { useState, useEffect, useRef } from 'react';
import { Users, Zap, TrendingUp, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';

const CountUp = ({ end, suffix = '', duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count.toLocaleString('fr-FR')}{suffix}</span>;
};

const TrustBand = () => {
  const { t } = useTranslation();

  const trustPoints = [
    { text: t('trust_point_1'), icon: <Users size={14} /> },
    { text: t('trust_point_2'), icon: <Zap size={14} /> },
    { text: t('trust_point_3'), icon: <Layers size={14} /> },
    { text: t('trust_point_4'), icon: <TrendingUp size={14} /> },
  ];

  const stats = [
    { label: 'Vendeurs Actifs', end: 2500, suffix: '+' },
    { label: 'Commandes / Mois', end: 350, suffix: 'K+' },
    { label: 'Taux Succès', end: 94, suffix: '%' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Upper Band: Scrolling Trust Badges */}
      <div className="py-4 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee-reverse hover:pause group w-max">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex shrink-0 w-1/4 justify-around">
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
      <div className="py-8 sm:py-12 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Side: RiseCart Logo & Group Membership */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group text-center sm:text-left">
               <Logo 
                 showText={false} 
                 iconClassName="w-12 h-12 sm:w-16 sm:h-16 shadow-xl shadow-slate-900/10 group-hover:scale-105 transition-transform duration-500"
               />
               <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 sm:mb-1">
                     <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('trust_label', 'Confiance & Croissance')}</span>
                     <div className="h-px w-8 bg-slate-100 dark:bg-slate-800 hidden sm:block" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-none">
                     Propulsé par <span className="text-primary italic">RiseGroup</span>
                  </h3>
               </div>
            </div>

            {/* Right Side: Key Numbers (Compact 3-col on Mobile) */}
            <div className="w-full lg:w-auto bg-slate-50 dark:bg-slate-900/50 sm:bg-transparent rounded-[2rem] sm:rounded-none py-6 sm:py-0 border border-slate-100 dark:border-slate-800 sm:border-none shadow-premium sm:shadow-none">
               <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800 sm:divide-transparent sm:gap-12 lg:gap-20 max-w-sm sm:max-w-none mx-auto lg:mx-0">
                  {stats.map((stat, i) => (
                    <div key={i} className=" group cursor-default px-2 sm:px-0 flex flex-col items-center justify-center">
                       <p className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors tabular-nums tracking-tighter">
                          <CountUp end={stat.end} suffix={stat.suffix} />
                       </p>
                       <p className="text-[7px] xs:text-[8px] sm:text-[10px] lg:text-xs font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-1 sm:mt-2 max-w-[80px] sm:max-w-none mx-auto leading-tight">
                          {stat.label}
                       </p>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBand;
