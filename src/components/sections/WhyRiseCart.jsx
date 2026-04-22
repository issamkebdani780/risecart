import React from 'react';
import { Rocket, Layout, BarChart3, Cloud, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyRiseCart = () => {
 const { t } = useTranslation();
 
 const reasons = [
 {
 title: t('Création ultra-rapide'),
 desc: t('Lance ta boutique opérationnelle en quelques clics sans compétences techniques.'),
 icon: <Rocket className="text-primary" />,
 },
 {
 title: t('Gestion centralisée'),
 desc: t('Commandes, produits et suivi pilotés depuis une seule interface intuitive.'),
 icon: <Layout className="text-primary" />,
 },
 {
 title: t('Vision business'),
 desc: t('Analyse tes performances en temps réel pour prendre les meilleures décisions.'),
 icon: <BarChart3 className="text-primary" />,
 },
 {
 title: t('Écosystème connecté'),
 desc: t('Intégration native avec RiseManager, RiseConfirm et notre réseau logistique.'),
 icon: <Cloud className="text-primary" />,
 },
 ];

 return (
 <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
 <div className="container mx-auto px-6">
 <div className="flex flex-col lg:flex-row gap-16 items-center">
 <div className="lg:w-1/2 space-y-8">
 <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
 {t("L'avantage RiseCart")}
 </div>
 <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight">
 {t("Bien plus qu'un simple")} <span className="text-primary italic">{t("website builder")}</span>.
 </h2>
 <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl text-balance font-medium">
 {t("RiseCart est conçu pour transformer votre activité e-commerce en un véritable système de croissance. Nous fournissons les outils nécessaires pour structurer votre business de A à Z.")}
 </p>
 <div className="pt-4">
 <button 
 onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
 className="flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-primary transition-colors group"
 >
 {t("Découvrir tous les avantages")} <div className="p-2 rounded-full bg-white dark:bg-slate-800 group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-slate-100 dark:border-slate-800"><ArrowRight size={20} className="rtl:rotate-180" /></div>
 </button>
 </div>
 </div>

 <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
 {reasons.map((reason, i) => (
 <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl group shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all duration-300">
 <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-300 border border-slate-100 dark:border-slate-800">
 {reason.icon}
 </div>
 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{reason.title}</h4>
 <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{reason.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
};

export default WhyRiseCart;
