import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShoppingBag, Box, ClipboardList, PieChart, Share2, Rocket, CheckCircle, Smartphone, Layout, Paintbrush, Filter, BarChart3, ShieldCheck, Grid, Search, Users, ArrowUpRight, Plus, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/sections/FinalCTA';
import TrustBand from '../components/sections/TrustBand';

const BuilderMockup = () => {
    const { t } = useTranslation();
    return (
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden flex flex-col shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="h-10 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" /><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" /></div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t("Éditeur Visuel")}</div>
            </div>
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="hidden sm:flex w-1/3 border-e border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 flex-col gap-3">
                    <div className="text-[8px] font-black uppercase text-slate-400">{t("Sections")}</div>
                    {['Hero Banner', 'Grille Produits', 'Témoignages'].map((v, i) => (
                        <div key={i} className="p-2 border border-slate-100 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900 flex items-center gap-2 cursor-move hover:border-primary/50 transition-colors group">
                            <Grid size={12} className="text-slate-400 group-hover:text-primary transition-colors" />
                            <span className="text-[8px] font-bold text-slate-600 dark:text-slate-300">{t(v)}</span>
                        </div>
                    ))}
                </div>
                {/* Canvas */}
                <div className="flex-1 p-4 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col gap-3 overflow-y-auto">
                    <div className="border-2 border-dashed border-primary/30 rounded-xl p-4 bg-primary/5 flex flex-col items-center justify-center relative group hover:border-primary transition-colors cursor-pointer min-h-[140px]">
                        <div className="absolute top-2 right-2 bg-primary text-white text-[8px] font-black uppercase px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">{t("Modifier")}</div>
                        <Layout size={24} className="text-primary/50 mb-3 group-hover:scale-110 group-hover:text-primary transition-all" />
                        <div className="h-2 w-1/2 bg-primary/20 rounded-full mb-1.5" />
                        <div className="h-2 w-1/3 bg-primary/20 rounded-full" />
                    </div>
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-950 min-h-[80px] shadow-sm flex items-center justify-center">
                        <div className="h-2 w-1/4 bg-slate-200 dark:bg-slate-800 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CatalogMockup = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('all');
    return (
        <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden flex flex-col shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div className="flex gap-4">
                    <button onClick={() => setActiveTab('all')} className={`text-[10px] font-black uppercase tracking-widest ${activeTab === 'all' ? 'text-primary' : 'text-slate-400'}`}>{t("Produits")}</button>
                    <button onClick={() => setActiveTab('active')} className={`text-[10px] font-black uppercase tracking-widest ${activeTab === 'active' ? 'text-emerald-500' : 'text-slate-400'}`}>{t("Actifs")}</button>
                </div>
                <button className="bg-primary hover:bg-primary-hover text-white p-1.5 rounded-lg shadow-sm shadow-primary/20 transition-transform hover:scale-105"><Plus size={14} /></button>
            </div>
            <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-y-auto no-scrollbar">
                {[1, 2, 3].map((v) => (
                    <div key={v} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 transition-colors">
                                <Box size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="h-2 w-24 bg-slate-300 dark:bg-slate-600 rounded group-hover:bg-primary/50 transition-colors" />
                                <div className="h-1.5 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t("4,500 DA")}</span>
                            <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${v === 2 ? 'bg-slate-200 dark:bg-slate-700 justify-start' : 'bg-emerald-500 justify-end'} flex shadow-inner`}>
                                <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const OrdersMockup = () => {
    const { t } = useTranslation();
    return (
        <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden flex flex-col shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex gap-2">
                <div className="flex-1 relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <div className="w-full h-8 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800" />
                </div>
                <button className="px-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Filter size={14} className="text-slate-500" /></button>
            </div>
            <div className="flex-1 overflow-auto bg-slate-50/50 dark:bg-slate-900/30 p-3 flex flex-col gap-3">
                {['Confirmé', 'En attente', 'Expédié'].map((status, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer flex justify-between items-center group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors font-black text-[10px] border border-slate-100 dark:border-slate-700">#{1042 + i}</div>
                            <div>
                                <div className="h-2 w-20 sm:w-24 bg-slate-200 dark:bg-slate-700 rounded mb-1.5 group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors" />
                                <div className="h-1.5 w-12 sm:w-16 bg-slate-100 dark:bg-slate-800 rounded" />
                            </div>
                        </div>
                        <span className={`text-[8px] font-black uppercase px-2.5 py-1 rounded-full whitespace-nowrap ${status === 'Confirmé' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' :
                            status === 'Expédié' ? 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400' :
                                status === 'Livré' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                                    'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
                            }`}>
                            {t(status)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AnalyticsMockup = () => {
    const { t } = useTranslation();
    return (
        <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col group">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{t("Revenus Nette")}</p>
                    <h4 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">124,500 <span className="text-[10px] tracking-normal">{t("DA")}</span></h4>
                </div>
                <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                    <ArrowUpRight size={14} />
                    <span className="text-[10px] font-black">+14.2%</span>
                </div>
            </div>
            <div className="flex-1 flex items-end gap-1.5 sm:gap-2 relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700" />
                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700" />
                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700" />
                    <div className="w-full h-px bg-slate-200 dark:bg-slate-700" />
                </div>
                {[40, 60, 45, 80, 55, 90, 70, 100, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm hover:bg-primary dark:hover:bg-primary transition-all cursor-pointer group/bar relative z-10" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 group-hover/bar:-translate-y-1 transition-all pointer-events-none shadow-xl">
                            {h}k
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const EcosystemMockup = () => {
    const { t } = useTranslation();
    const nodes = [
        { label: 'RiseConfirm', logo: '/ecosystem/RiseConfirm.jpg' },
        { label: 'RiseManager', logo: '/ecosystem/risemanager.png' },
        { label: 'RisePay', logo: '/ecosystem/risepay.jpg' },
        { label: 'RiseCart', logo: '/ecosystem/risecart.jpg' },
    ];
    return (
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-950 dark:bg-slate-950 flex flex-col">
            <div className="h-9 shrink-0 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="ms-auto text-[9px] font-bold text-slate-500 uppercase tracking-widest">{t("Écosystème RiseGroup")}</span>
            </div>
            <div className="flex-1 relative flex items-center justify-center p-4 sm:p-6">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 300 220" preserveAspectRatio="none">
                    <line x1="150" y1="110" x2="55" y2="55" stroke="rgba(0,162,255,0.25)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <line x1="150" y1="110" x2="245" y2="55" stroke="rgba(0,162,255,0.25)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <line x1="150" y1="110" x2="55" y2="165" stroke="rgba(0,162,255,0.25)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <line x1="150" y1="110" x2="245" y2="165" stroke="rgba(0,162,255,0.25)" strokeWidth="1.5" strokeDasharray="5 4" />
                </svg>
                <div className="w-full grid grid-cols-2 gap-y-4 sm:gap-y-6 relative z-0">
                    {nodes.map((node, i) => (
                        <div key={i} className={`flex flex-col items-center gap-1.5 group/node cursor-pointer ${i % 2 === 0 ? 'justify-self-start ps-2 sm:ps-4' : 'justify-self-end pe-2 sm:pe-4'}`}>
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-slate-800 group-hover/node:border-primary/60 group-hover/node:scale-110 group-hover/node:shadow-lg group-hover/node:shadow-primary/20 transition-all duration-300 bg-slate-900 shadow-md">
                                <img
                                    src={node.logo}
                                    alt={node.label}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                            <span className="text-[8px] font-black uppercase tracking-[0.1em] text-slate-500 group-hover/node:text-primary transition-colors whitespace-nowrap">{node.label}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute z-20 inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-primary shadow-[0_0_40px_rgba(0,162,255,0.5)] pointer-events-auto hover:scale-110 transition-transform duration-500 cursor-pointer bg-slate-900">
                        <img src="/ecosystem/risecart.jpg" alt="RiseCart Hub" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/50 animate-ping" style={{ animationDuration: '2.5s' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingsMockup = () => {
    const { t } = useTranslation();
    return (
        <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden flex shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="hidden sm:flex w-1/3 bg-slate-50 dark:bg-slate-900 border-e border-slate-100 dark:border-slate-800 p-4 flex-col gap-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded mb-4" />
                <div className="h-8 w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-sm rounded-lg" />
                <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer" />
                <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer" />
            </div>
            <div className="flex-1 p-5 sm:p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <p className="text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em]">{t("Permissions Système")}</p>
                    <ShieldCheck size={16} className="text-slate-400" />
                </div>
                <div className="space-y-4 flex-1">
                    {[1, 2, 3].map((v) => (
                        <div key={v} className="flex justify-between items-center group cursor-pointer p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-4 sm:w-10 sm:h-5 rounded-full p-0.5 transition-colors ${v === 2 ? 'bg-slate-200 dark:bg-slate-700 justify-start' : 'bg-primary justify-end'} flex items-center`}>
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-sm" />
                                </div>
                                <div>
                                    <div className="h-2 w-24 sm:w-32 bg-slate-300 dark:bg-slate-600 rounded mb-1 group-hover:bg-primary/50 transition-colors" />
                                    <div className="h-1 w-16 bg-slate-200 dark:bg-slate-800 rounded" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="h-10 flex-1 bg-slate-100 dark:bg-slate-900 rounded-xl" />
                    <div className="h-10 w-1/2 bg-primary hover:bg-primary-hover transition-colors rounded-xl shadow-lg shadow-primary/20 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

const FeatureBlock = ({ title, description, benefits, reversed, icon: Icon, mockup }) => {
    const { t } = useTranslation();
    return (
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 py-20 border-b border-slate-100 dark:border-slate-800/50 last:border-none group/section`}>
            <div className="flex-1 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/20 transition-transform group-hover/section:scale-110 group-hover/section:-rotate-3 duration-500">
                    <Icon size={28} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">{title}</h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{description}</p>
                <ul className="space-y-4 pt-4">
                    {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                            <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                            <span className="text-slate-700 dark:text-slate-300 font-bold transition-colors group-hover/item:text-slate-900 dark:group-hover/item:text-white">{t(benefit)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 w-full relative">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden h-72 sm:h-80 flex items-center justify-center relative perspective-[1000px]">
                    {mockup ? (
                        <div className="absolute inset-4 sm:inset-8 transition-transform duration-700 hover:rotate-x-2 hover:-rotate-y-2 hover:scale-[1.02] transform-style-3d">
                            {mockup}
                        </div>
                    ) : (
                        <div className="w-full bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center justify-center relative z-10 overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:border-primary/30">
                            <Icon size={48} className="text-slate-200 dark:text-slate-800 mb-4 transition-transform hover:scale-110 duration-500" />
                            <p className="text-slate-400 dark:text-slate-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] text-center px-4">{t("Interface")} <br />{title}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const FonctionnalitesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen">
            <Navbar />

            {/* Hero Spécifique */}
            <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
                <div className="container mx-auto px-6 text-center max-w-4xl animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-8 mx-auto hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center text-white">
                            <ShieldCheck size={12} />
                        </div>
                        <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-tight">{t("Outils E-commerce Professionnels")}</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
                        {t("Tout ce qu'il vous faut.")} <br /><span className="text-primary italic">{t("Sans la complexité.")}</span>
                    </h1>
                    <p className="text-lg lg:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-12">
                        {t("Découvrez comment chaque module de RiseCart a été pensé pour maximiser vos ventes, optimiser votre temps et structurer votre activité.")}
                    </p>
                </div>
            </section>

            <TrustBand />

            {/* Sommaire des modules */}
            <section className="py-20 lg:py-28 border-y border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-500">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{t("6 Modules Puissants")}</p>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{t("Tout ce dont vous avez besoin,")}<br /><span className="text-slate-400 dark:text-slate-500 font-medium">{t("dans une seule plateforme.")}</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {[
                            {
                                num: '01', title: t('Création Boutique'), icon: Layout, color: 'blue',
                                desc: t('Un éditeur visuel puissant pour construire votre vitrine en quelques clics.')
                            },
                            {
                                num: '02', title: t('Catalogue Produits'), icon: Box, color: 'violet',
                                desc: t('Gérez vos références, variantes et stocks depuis une interface centralisée.')
                            },
                            {
                                num: '03', title: t('Gestion Commandes'), icon: ClipboardList, color: 'emerald',
                                desc: t('Traitez, expédiez et suivez chaque commande sans effort.')
                            },
                            {
                                num: '04', title: t('Analytics & Revenus'), icon: BarChart3, color: 'amber',
                                desc: t('Visualisez vos chiffres clés et prenez des décisions basées sur des données réelles.')
                            },
                            {
                                num: '05', title: t('Écosystème Natif'), icon: Share2, color: 'rose',
                                desc: t('Connexions natives avec RiseConfirm, RiseManager, et RisePay.')
                            },
                            {
                                num: '06', title: t('Contrôle Avancé'), icon: Rocket, color: 'indigo',
                                desc: t('Permissions, rôles, logs, et infrastructure dédiée pour les vendeurs ambitieux.')
                            }
                        ].map((mod, i) => {
                            const colorMap = {
                                blue: { bg: 'bg-blue-50 dark:bg-blue-500/10', text: 'text-blue-500', border: 'hover:border-blue-200 dark:hover:border-blue-500/30', num: 'text-blue-200 dark:text-blue-500/20' },
                                violet: { bg: 'bg-violet-50 dark:bg-violet-500/10', text: 'text-violet-500', border: 'hover:border-violet-200 dark:hover:border-violet-500/30', num: 'text-violet-200 dark:text-violet-500/20' },
                                emerald: { bg: 'bg-emerald-50 dark:bg-emerald-500/10', text: 'text-emerald-500', border: 'hover:border-emerald-200 dark:hover:border-emerald-500/30', num: 'text-emerald-200 dark:text-emerald-500/20' },
                                amber: { bg: 'bg-amber-50 dark:bg-amber-500/10', text: 'text-amber-500', border: 'hover:border-amber-200 dark:hover:border-amber-500/30', num: 'text-amber-200 dark:text-amber-500/20' },
                                rose: { bg: 'bg-rose-50 dark:bg-rose-500/10', text: 'text-rose-500', border: 'hover:border-rose-200 dark:hover:border-rose-500/30', num: 'text-rose-200 dark:text-rose-500/20' },
                                indigo: { bg: 'bg-indigo-50 dark:bg-indigo-500/10', text: 'text-indigo-500', border: 'hover:border-indigo-200 dark:hover:border-indigo-500/30', num: 'text-indigo-200 dark:text-indigo-500/20' },
                            };
                            const c = colorMap[mod.color];
                            return (
                                <div key={i} className={`relative group flex flex-col gap-4 p-6 sm:p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden ${c.border}`}>
                                    <span className={`absolute -top-2 ltr:-right-1 rtl:-left-1 text-8xl font-black select-none pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${c.num}`}>{mod.num}</span>
                                    <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                                        <mod.icon size={22} className={`${c.text}`} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">{mod.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{mod.desc}</p>
                                    </div>
                                    <div className={`h-0.5 w-0 ${c.bg} rounded-full transition-all duration-500 group-hover:w-full mt-auto`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Détails par fonctionnalité */}
            <section className="py-12 lg:py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FeatureBlock
                        title={t("Création de boutique ultra-rapide")}
                        description={t("L'apparence de votre boutique est la première impression que vous donnez. Avec notre constructeur intelligent, passez d'une idée à une boutique en ligne fonctionnelle en quelques minutes seulement.")}
                        benefits={[
                            t("Modules pensés spécifiquement pour la conversion"),
                            t("Interface Drag & Drop simple et réactive"),
                            t("Expérience Mobile First native"),
                            t("Sélection de thèmes modernes sans code requis")
                        ]}
                        icon={Paintbrush}
                        mockup={<BuilderMockup />}
                    />
                    <FeatureBlock
                        title={t("Gestion experte du catalogue")}
                        description={t("Fini le bricolage sur Excel. Vos produits sont votre richesse, gérez-les avec une interface centralisée conçue pour les inventaires de professionnels.")}
                        benefits={[
                            t("Création illimitée de variantes (tailles, couleurs)"),
                            t("Optimisation facile du SEO par produit"),
                            t("Catégorisation intelligente et filtres"),
                            t("Application rapide de réductions et promotions")
                        ]}
                        icon={Box}
                        reversed
                        mockup={<CatalogMockup />}
                    />

                    {/* Intermediate CTA */}
                    <div className="my-32 bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl border border-slate-800 hover:shadow-primary/10 transition-shadow duration-500 group text-reveal-container">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.2)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000 ease-out" />
                        <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 relative z-10 tracking-tight">{t("Prêt à transformer votre gestion ?")}</h3>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-medium">{t("Démarrez maintenant avec une base solide conçue pour la vraie performance e-commerce.")}</p>
                        <a href="/signup" className="inline-flex items-center gap-2 bg-primary text-white border border-primary px-8 py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 hover:border-white transition-all shadow-xl shadow-primary/20 relative z-10 active:scale-95">
                            {t("Ouvrir ma boutique")} <ArrowRight size={16} className="rtl:rotate-180" />
                        </a>
                    </div>

                    <FeatureBlock
                        title={t("Traitement logistique centralisé")}
                        description={t("Une ligne d'assemblage virtuelle pour vos commandes. Ne perdez plus la trace d'un seul colis grâce à un suivi clair et structuré.")}
                        benefits={[
                            t("Changement de statuts en masse pour gagner du temps"),
                            t("Impression instantanée des bons et factures"),
                            t("Recherche poussée avec filtres multicritères"),
                            t("Avertissements automatisés sur les doublons ou anomalies")
                        ]}
                        icon={ClipboardList}
                        mockup={<OrdersMockup />}
                    />
                    <FeatureBlock
                        title={t("Analytics de croissance")}
                        description={t("Prenez vos décisions en fonction des chiffres, et non plus au hasard. Obtenez une vision cristalline de votre santé financière.")}
                        benefits={[
                            t("Aperçu direct du Chiffre d'Affaires net"),
                            t("Analyse instantanée du taux de conversion et panier moyen"),
                            t("Identification de vos meilleurs produits"),
                            t("Visualisation graphique claire de votre évolution")
                        ]}
                        icon={BarChart3}
                        reversed
                        mockup={<AnalyticsMockup />}
                    />
                    <FeatureBlock
                        title={t("Écosystème natif RiseGroup")}
                        description={t("RiseCart s'insère parfaitement dans notre galaxie technologique. Fini les intégrations douteuses : tout communique harmonieusement.")}
                        benefits={[
                            t("Connexion directe avec RiseConfirm pour le Call Center"),
                            t("Remontée de statistiques globales vers RiseManager"),
                            t("Pas besoin d'API complexes, tout est natif"),
                            t("Paiements simplifiés avec RisePay (à venir)")
                        ]}
                        icon={Share2}
                        mockup={<EcosystemMockup />}
                    />
                    <FeatureBlock
                        title={t("Contrôle Premium (Plans structurés)")}
                        description={t("Quand votre activité explose, vous avez besoin de déléguer en toute sécurité. Les plans RiseCart avancés vous encadrent parfaitement.")}
                        benefits={[
                            t("Ajout de collaborateurs avec permissions restreintes"),
                            t("Sécurisation des données clients contre l'export abusif"),
                            t("Historique des actions (logs) pour identifier qui a fait quoi"),
                            t("Serveurs dédiés isolés pour supporter les pics massifs")
                        ]}
                        icon={Rocket}
                        reversed
                        mockup={<SettingsMockup />}
                    />
                </div>
            </section>

            <FinalCTA />
            <Footer />
        </div>
    );
};

export default FonctionnalitesPage;