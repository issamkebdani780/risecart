import React from 'react';
import { XCircle, CheckCircle, AlertTriangle, ShieldCheck, Zap, Sparkles, ArrowRight, MousePointerClick, Clock, LayoutGrid, FileWarning, Eye, BarChart3, Target, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProblemSection = () => {
  const { t } = useTranslation();

  const beforeItems = [
    { text: 'Commandes mal suivies (Excel)', icon: <FileWarning size={16} /> },
    { text: 'Tunnel de vente fragile', icon: <MousePointerClick size={16} /> },
    { text: 'Manque total de clarté', icon: <Eye size={16} className="opacity-40" /> },
    { text: 'Perte de temps colossale', icon: <Clock size={16} /> },
    { text: 'Design peu professionnel', icon: <LayoutGrid size={16} /> },
    { text: 'Outils dispersés & complexes', icon: <AlertTriangle size={16} /> }
  ];

  const afterItems = [
    { text: 'Boutique claire & moderne', icon: <Sparkles size={20} /> },
    { text: 'Gestion ultra centralisée', icon: <ShieldCheck size={20} /> },
    { text: 'Vision précise des chiffres', icon: <BarChart3 size={20} /> },
    { text: 'Meilleure organisation', icon: <Target size={20} /> },
    { text: 'Véritable montée en gamme', icon: <Rocket size={20} /> },
    { text: 'Système professionnel robuste', icon: <Zap size={20} /> }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03] dark:opacity-[0.05] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up px-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-widest mb-6">
              <AlertTriangle size={12} /> Diagnostic Performance
           </div>
          <h2 className="text-4xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Arrête de bricoler, commence à <span className="text-primary italic">scaler</span>.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            La plupart des e-commerçants s'épuisent avec des outils déconnectés. Voici comment RiseCart transforme votre chaos en un système professionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Avant: Le Désordre */}
          <div className="bg-slate-50 dark:bg-slate-900/30 rounded-[2.5rem] p-8 lg:p-14 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 group relative">
             <div className="absolute top-8 right-8 text-[8px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.3em]">Phase de stagnation</div>
            
            <div className="flex items-center mb-10">
               <h3 className="text-3xl font-black text-red-500/80 flex items-center gap-4 tracking-tighter italic">
                  Avant <XCircle className="group-hover:rotate-12 transition-transform" size={28} />
               </h3>
            </div>
            
            <div className="space-y-6">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Le chaos classique :</p>
               <ul className="grid gap-4">
                  {beforeItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-500 font-bold tracking-tight text-sm border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
                       <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                          {item.icon}
                       </div>
                       {item.text}
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          {/* Après: L'Efficacité RiseCart */}
          <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] p-8 lg:p-14 border-2 border-primary/20 dark:border-primary/40 shadow-[0_32px_64px_-16px_rgba(0,162,255,0.15)] transition-all hover:border-primary/60 group relative overflow-hidden">
            {/* Visual glow accent */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="absolute top-8 right-12 text-[8px] font-black text-primary uppercase tracking-[0.3em] z-10 animate-pulse">Système Actif</div>

            <div className="flex items-center mb-10 relative z-10">
               <h3 className="text-3xl font-black text-primary flex items-center gap-4 tracking-tighter italic">
                  Après <ShieldCheck className="group-hover:scale-110 transition-transform" size={32} strokeWidth={2.5} />
               </h3>
            </div>

            <div className="space-y-6 relative z-10">
               <p className="text-xs font-black text-primary uppercase tracking-widest mb-6">La transformation RiseCart :</p>
               <ul className="grid gap-4">
                  {afterItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-white font-black tracking-tight lg:text-lg border border-primary/10 shadow-sm transition-all hover:bg-primary/10" style={{ animationDelay: `${i * 0.1}s` }}>
                       <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                          {item.icon}
                       </div>
                       {item.text}
                    </li>
                  ))}
               </ul>
            </div>

            {/* <div className="mt-12 pt-10 border-t border-primary/10 relative z-10 flex items-center justify-between">
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Résultat</p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">Croissance Structurée</p>
               </div>
               <button className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/30">
                  Scaler maintenant <ArrowRight size={16} />
               </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
