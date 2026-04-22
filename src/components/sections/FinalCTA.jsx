import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
 const { t } = useTranslation();

 return (
 <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
 <div className="container mx-auto px-6">
 <div className="relative bg-gradient-to-br from-primary via-blue-600 to-violet-600 rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden shadow-2xl shadow-primary/20">
 
 {/* Abstract Background Shapes */}
 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

 {/* Grid Pattern Overlay */}
 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

 <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
 
 <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
 {t("Passe à une vraie structure e-commerce.")}
 </h2>
 
 <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
 {t("Crée ta boutique, pilote tes commandes et fais grandir ton activité avec une plateforme pensée pour durer.")}
 </p>

 <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
 <Link 
 to="/signup"
 className="w-full sm:w-auto bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 group"
 >
 {t("Démarrer l'essai gratuit")} <ArrowRight size={20} className="transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
 </Link>
 <Link 
 to="/demo"
 className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/10 transition-all text-center flex items-center justify-center"
 >
 {t("Réserver une démo")}
 </Link>
 </div>
 
 <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 pt-12 border-t border-white/10">
 <div className="flex items-center gap-2 text-blue-100 text-sm font-bold tracking-tight">
 <CheckCircle2 size={18} className="text-emerald-400" /> {t("Setup en 10 min")}
 </div>
 <div className="flex items-center gap-2 text-blue-100 text-sm font-bold tracking-tight">
 <CheckCircle2 size={18} className="text-emerald-400" /> {t("Sans carte bancaire")}
 </div>
 <div className="flex items-center gap-2 text-blue-100 text-sm font-bold tracking-tight">
 <CheckCircle2 size={18} className="text-emerald-400" /> {t("Support 24/7")}
 </div>
 </div>
 
 </div>
 </div>
 </div>
 </section>
 );
};

export default FinalCTA;
