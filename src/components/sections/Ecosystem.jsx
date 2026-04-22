import React from 'react';
import { Layers, Shield, Truck, CreditCard, Mic, ArrowRight, Cloud, Combine, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Ecosystem = () => {
    const { t } = useTranslation();

    const modules = [
        { name: 'RiseManager', icon: <img src="/ecosystem/risemanager.png" alt="RiseManager" className="w-8 h-8 object-contain" />, color: 'text-blue-500', bg: 'bg-white', desc: t('Pilotage global & ERP') },
        { name: 'RiseConfirm', icon: <img src="/ecosystem/RiseConfirm.jpg" alt="RiseConfirm" className="w-full h-full object-cover rounded-xl" />, color: 'text-emerald-500', bg: 'bg-white', desc: t('Call center & CRM') },
        { name: 'RisePay', icon: <img src="/ecosystem/risepay.jpg" alt="RisePay" className="w-full h-full object-cover rounded-xl" />, color: 'text-violet-500', bg: 'bg-white', desc: t('Gestion financière') },
        { name: 'FBR', icon: <img src="/ecosystem/fbr.jpg" alt="FBR" className="w-full h-full object-cover rounded-xl" />, color: 'text-orange-500', bg: 'bg-white', desc: t('Logistique & Livraison') },
        { name: 'RiseAcademy', icon: <img src="/ecosystem/riseacademy.png" alt="RiseAcademy" className="w-full h-full object-cover rounded-xl" />, color: 'text-rose-500', bg: 'bg-white', desc: t('Formation & Coaching') },
    ];

    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 blur-[150px] rounded-full point-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 blur-[150px] rounded-full point-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] shadow-sm">
                            <Combine size={14} className="text-primary" /> {t("Écosystème Connecté")}
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                            {t("La vitrine d'une machine de")} <span className="text-primary italic">{t("guerre")}</span>.
                        </h2>

                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
                            {t("RiseCart ne vit pas seul. Il s'agit de la porte d'entrée E-commerce synchronisée en temps réel avec toute l'infrastructure technologique de RiseGroup.")}
                        </p>

                        <ul className="space-y-5 pt-4">
                            {[
                                t('Synchronisation des stocks en temps réel'),
                                t('Remontée automatique des commandes vers Confirm'),
                                t('Calcul exact des statistiques et du ROI publicitaire')
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-900 dark:text-white font-bold text-sm lg:text-base">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Zap size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Visual Connectivity (Desktop) */}
                    <div className="hidden lg:flex lg:w-1/2 w-full relative h-[600px] items-center justify-center">

                        {/* The Main Hub (RiseCart) */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border-2 border-primary shadow-2xl shadow-primary/20 w-48 text-center flex flex-col items-center gap-4 group hover:scale-105 transition-transform duration-500 relative">
                                <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem]" />
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-primary/30 relative z-10 overflow-hidden">
                                    <img src="/ecosystem/risecart.jpg" alt="RiseCart" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{t("RiseCart")}</h3>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">{t("Data Origin")}</p>
                                </div>
                            </div>
                        </div>

                        {/* SVG Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ left: '100px' }}>
                            <path d="M 90 300 C 180 300, 200 100, 250 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-200 dark:text-slate-800 animate-[dash_20s_linear_infinite]" />
                            <path d="M 90 300 C 180 300, 200 200, 250 200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-200 dark:text-slate-800 animate-[dash_20s_linear_infinite]" />
                            <path d="M 90 300 L 250 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-200 dark:text-slate-800 animate-[dash_20s_linear_infinite]" />
                            <path d="M 90 300 C 180 300, 200 400, 250 400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-200 dark:text-slate-800 animate-[dash_20s_linear_infinite]" />
                            <path d="M 90 300 C 180 300, 200 500, 250 500" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-200 dark:text-slate-800 animate-[dash_20s_linear_infinite]" />
                        </svg>

                        {/* Satellite Modules */}
                        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-10 z-20 w-64">
                            {modules.map((mod, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 flex items-center gap-4 hover:-translate-x-2 transition-transform duration-300 cursor-default group">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mod.bg} ${mod.color}`}>
                                        {mod.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">{mod.name}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{mod.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual Connectivity (Mobile) */}
                    <div className="flex lg:hidden flex-col items-center mt-12 w-full z-20 animate-slide-up">
                        {/* Main Hub */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-primary shadow-xl shadow-primary/20 w-full max-w-[220px] text-center flex flex-col items-center gap-3 relative z-20">
                            <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-primary/30 relative z-10 overflow-hidden">
                                <img src="/ecosystem/risecart.jpg" alt="RiseCart" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{t("RiseCart")}</h3>
                                <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-1">{t("Data Origin")}</p>
                            </div>
                        </div>

                        {/* Connection Line */}
                        <div className="w-px h-12 border-s-2 border-dashed border-primary/40 my-2" />

                        {/* Satellites Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {modules.map((mod, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md flex items-center gap-4 hover:border-primary/50 transition-colors">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mod.bg} ${mod.color}`}>
                                        {mod.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">{mod.name}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{mod.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
 @keyframes dash {
 to {
 stroke-dashoffset: -1000;
 }
 }
 `}} />
        </section>
    );
};

export default Ecosystem;
