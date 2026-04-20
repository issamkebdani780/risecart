import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Rocket, Zap, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 dark:bg-primary/[0.02] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-primary/10 dark:bg-primary/5 blur-[180px] rounded-full -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <div className="relative bg-slate-950 dark:bg-slate-900 rounded-[3rem] p-10 lg:p-24 text-center overflow-hidden border-2 border-slate-900 dark:border-slate-800 shadow-[0_40px_100px_-15px_rgba(0,162,255,0.2)]">
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-primary/[0.03] -z-10" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-400/10 blur-[130px] rounded-full" />

          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-[10px] font-black text-primary uppercase tracking-[0.3em] shadow-2xl backdrop-blur-md">
               <Sparkles size={14} className="animate-spin-slow" /> Prêt pour le prochain niveau ?
            </div>

            <h2 className="text-5xl lg:text-8xl font-black text-white leading-[1] tracking-tighter mb-4">
               Ton empire e-commerce commence <span className="text-primary italic">ici</span>.
            </h2>
            
            <p className="text-slate-400 text-lg lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed text-balance">
               Rejoins l’élite des vendeurs qui s’appuient sur l’écosystème Rise pour automatiser leur croissance et dominer leur marché.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
               <Link 
                  to="/signup"
                  className="w-full sm:w-auto bg-primary text-white ltr:px-12 rtl:px-14 py-6 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,162,255,0.4)] flex items-center justify-center gap-4 group overflow-hidden relative"
               >
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  {t('cta_start')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform ltr:block rtl:hidden" />
               </Link>
               <Link 
                  to="/demo"
                  className="w-full sm:w-auto px-12 py-6 rounded-2xl font-black text-xl text-white bg-transparent border-2 border-slate-800 hover:bg-slate-800 transition-all text-center"
               >
                  Réserver une démo
               </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 pt-12 border-t border-white/5">
                <div className="flex items-center gap-2.5 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                   <Clock size={16} className="text-primary" /> Setup en 10 min
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                   <Rocket size={16} className="text-primary" /> Scale Illimité
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                   <Zap size={16} className="text-primary" /> Support 24/7
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
