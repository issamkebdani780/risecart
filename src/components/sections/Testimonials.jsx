import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
 const { t } = useTranslation();

 const testimonials = [
 {
 name: 'Ahmed K.',
 role: t('E-commerçant COD'),
 content: t('Depuis que je suis passé sur RiseCart, ma gestion des commandes est devenue un jeu d\'enfant. Plus de pertes, plus d\'erreurs, juste de la croissance structurée.'),
 avatarImage: '/confiance/conf1.webp',
 color: 'blue'
 },
 {
 name: 'Sarah M.',
 role: t('Marque DNVB'),
 content: t('Le design de ma boutique est maintenant au niveau des plus grandes marques. La conversion a littéralement triplé en l\'espace d\'un seul mois d\'utilisation.'),
 avatarImage: '/confiance/conf2.webp',
 color: 'emerald'
 },
 {
 name: 'Yassine B.',
 role: t('Vendeur Multi-canal'),
 content: t('L\'intégration native avec RiseConfirm a sauvé mon business. Gérer toutes les confirmations directement depuis mon dashboard RiseCart est absolument génial.'),
 avatarImage: '/confiance/conf3.webp',
 color: 'violet'
 }
 ];

 return (
 <section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500">
 <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -translate-y-1/2 rounded-full -z-10" />
 <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -translate-y-1/2 rounded-full -z-10" />
 
 <div className="container mx-auto px-6">
 <div className="text-center mb-20">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-6">
 {t("Preuve Sociale")}
 </div>
 <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
 {t("Ils ne reviendront plus")} <span className="text-primary italic">{t("en arrière")}</span>.
 </h2>
 <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
 {t("Découvrez comment RiseCart transforme le quotidien de centaines de vendeurs ambitieux.")}
 </p>
 </div>

 <div className="grid md:grid-cols-3 gap-8">
 {testimonials.map((t, i) => (
 <div key={i} className="bg-white dark:bg-slate-900 p-10 lg:p-12 rounded-[3rem] relative border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-950 hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
 {/* Decorative Elements */}
 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent dark:from-slate-800 pointer-events-none" />
 <Quote className="absolute top-8 right-8 text-slate-100 dark:text-slate-800 group-hover:text-primary/10 transition-colors duration-500" size={60} />
 
 <div className="flex gap-1 mb-8 relative z-10">
 {[...Array(5)].map((_, idx) => <Star key={idx} size={18} className="fill-yellow-400 text-yellow-400" />)}
 </div>
 
 <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed font-medium relative z-10">"{t.content}"</p>
 
 <div className="flex items-center gap-4 pt-6 relative z-10">
 <div className={`w-16 h-16 bg-white rounded-2xl p-2 shadow-lg shadow-${t.color}-500/30 border border-slate-100 dark:border-slate-800 shrink-0 flex items-center justify-center`}>
 <img src={t.avatarImage} alt={t.name} className="max-w-full max-h-full object-contain" />
 </div>
 <div>
 <h4 className="font-black text-slate-900 dark:text-white tracking-tight text-lg">{t.name}</h4>
 <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.role}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Testimonials;
