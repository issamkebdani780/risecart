import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, ShoppingBag, DollarSign, Globe, Settings, Package, Truck, MessageSquare, Loader2, CreditCard, Plus, Layout, Palette, Type, ShieldCheck, Zap, Rocket, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [dashboardTab, setDashboardTab] = useState('orders');
  const [builderSubTab, setBuilderSubTab] = useState('sections');
  const [revenue, setRevenue] = useState(12450);
  const [lastSale, setLastSale] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulation of live data
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 500));
      if (Math.random() > 0.8) {
        triggerNewSale();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerNewSale = () => {
    const products = ['iPhone 15 Pro', 'AirPods Max', 'Nike Air Max', 'MacBook M3'];
    const towns = ['Alger', 'Oran', 'Constantine', 'Annaba', 'Tlemcen'];
    setLastSale({
      item: products[Math.floor(Math.random() * products.length)],
      city: towns[Math.floor(Math.random() * towns.length)],
      amount: Math.floor(Math.random() * 2000) + 1000
    });
    setTimeout(() => setLastSale(null), 3000);
  };

  const handlePrendreCommande = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setRevenue(prev => prev + 2500);
      triggerNewSale();
    }, 1500);
  };

  const dashboardMenu = [
    { id: 'orders', icon: ShoppingBag, label: 'Commandes' },
    { id: 'analytics', icon: TrendingUp, label: 'Statistiques' },
    { id: 'customers', icon: Users, label: 'Clients' },
    { id: 'finance', icon: DollarSign, label: 'Finance' },
    { id: 'webstore', icon: Globe, label: 'Boutique' },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full -z-10 animate-float translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-400/10 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-5 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0">
            {/* Double Badges */}
            <div className="flex flex-wrap gap-3 mb-10 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
                <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center text-white">
                  <Info size={12} />
                </div>
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-tight">{t('hero_badge_1')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <TrendingUp size={12} />
                </div>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">{t('hero_badge_2')}</span>
              </div>
            </div>

            {/* Title */}
            <h1 
              className="text-5xl lg:text-[76px] font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.05] animate-slide-up tracking-tight" 
              style={{ animationDelay: '0.1s' }}
              dangerouslySetInnerHTML={{ __html: t('hero_title') }}
            />

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl animate-slide-up font-medium leading-relaxed" style={{ animationDelay: '0.2s' }}>
              {t('hero_subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-slide-up w-full sm:w-auto" style={{ animationDelay: '0.3s' }}>
              <Link 
                to="/signup" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
              >
                {t('cta_start')}
              </Link>
              <Link 
                to="/demo" 
                className="w-full sm:w-auto bg-white dark:bg-slate-900 text-primary dark:text-primary border border-slate-100 dark:border-slate-800 px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 group"
              >
                {t('cta_demo')} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Reassurance Elements */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
               <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider">7 jours d'essai</span>
               </div>
               <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                  <ShieldCheck size={16} className="text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sans engagement</span>
               </div>
            </div>
          </div>

          {/* Right Column: INTERACTIVE Dashboard Mockup */}
          <div className="relative animate-slide-up mt-20 lg:mt-0" style={{ animationDelay: '0.5s' }}>
            {/* Live Sale Notification */}
            {lastSale && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 border border-primary/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 animate-bounce-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShoppingBag size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-primary uppercase leading-tight">Nouvelle Vente !</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">{lastSale.item} - {lastSale.city}</p>
                </div>
                <p className="text-sm font-black text-primary ml-2">{lastSale.amount} DA</p>
              </div>
            )}

            <div className="relative">
              {/* Dashboard Container */}
              <div className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-2xl transition-all duration-700 hover:scale-[1.01] group">
                {/* Browser Top Bar */}
                <div className="h-10 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg px-4 py-1 text-[10px] font-bold text-slate-400 border border-slate-100 dark:border-slate-700 tabular-nums">
                    risecart-admin.com/dashboard/{dashboardTab}
                  </div>
                </div>

                <div className="flex h-[400px] xs:h-[480px]">
                  {/* Sidebar Mockup - Interactive */}
                  <div className="w-14 xs:w-20 border-r border-slate-100 dark:border-slate-800 py-6 flex flex-col items-center gap-6 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-xl bg-primary flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
                       <span className="font-black text-lg italic leading-none">R</span>
                    </div>
                    {dashboardMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={item.id} 
                          onClick={() => setDashboardTab(item.id)}
                          className={`p-2 xs:p-2.5 rounded-xl transition-all cursor-pointer relative group/icon ${dashboardTab === item.id ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-400 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                          <Icon size={20} className={dashboardTab === item.id ? 'scale-110' : 'group-hover/icon:scale-110 transition-transform'} />
                          {/* Tooltip */}
                          <div className="absolute left-full ml-4 px-2 py-1 rounded bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none hidden xs:block">
                             {item.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Main Interaction Area */}
                  <div className="flex-1 p-4 xs:p-8 bg-white dark:bg-slate-950 overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between mb-6 xs:mb-8 animate-fade-in" key={dashboardTab}>
                       <div>
                         <h3 className="text-base xs:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1 xs:mb-0">
                            {dashboardTab === 'orders' && 'Commandes'}
                            {dashboardTab === 'analytics' && 'Tableau de Bord'}
                            {dashboardTab === 'customers' && 'Base Clients'}
                            {dashboardTab === 'finance' && 'Revenus & Pay'}
                            {dashboardTab === 'webstore' && 'Store Builder'}
                         </h3>
                         <p className="text-[8px] xs:text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">Aperçu en temps réel</p>
                       </div>
                       <div className="flex gap-2 shrink-0">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600">
                             <MessageSquare size={14} />
                          </div>
                       </div>
                    </div>

                    {/* Content switcher based on sidebar tab */}
                    <div className="flex-1 overflow-y-auto no-scrollbar animate-fade-in" key={`${dashboardTab}-content`}>
                       {dashboardTab === 'orders' && (
                         <div className="space-y-4">
                            <div className="grid grid-cols-2 xs:grid-cols-3 gap-3 mb-6">
                               {['En attente', 'Confirmé', 'Expédié'].map((s, i) => (
                                 <div key={i} className={`bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 ${i === 2 ? 'hidden xs:block' : ''}`}>
                                    <p className="text-[8px] font-black text-slate-400 uppercase mb-1 truncate">{s}</p>
                                    <p className="text-base xs:text-lg font-black text-slate-900 dark:text-white">{Math.floor(Math.random() * 50) + 10}</p>
                                 </div>
                               ))}
                            </div>
                            {[
                                { id: '#7842', name: 'Karim S.', city: 'Alger', status: 'Confirmé', color: 'bg-green-500' },
                                { id: '#7841', name: 'Mouna L.', city: 'Oran', status: 'En attente', color: 'bg-amber-500' },
                            ].map((order, i) => (
                                <div key={i} className="flex items-center justify-between p-3 xs:p-4 rounded-2xl border border-slate-50 dark:border-slate-800 hover:border-primary/20 transition-all cursor-pointer group/row bg-white dark:bg-slate-900 shadow-sm">
                                   <div className="flex items-center gap-3 xs:gap-4">
                                      <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <Package size={16} className="text-slate-400" />
                                      </div>
                                      <div>
                                        <p className="text-[10px] xs:text-xs font-black text-slate-900 dark:text-white truncate">{order.name}</p>
                                        <div className="flex items-center gap-1 mt-0.5">
                                          <p className="text-[8px] xs:text-[10px] text-slate-400 font-bold">{order.city}</p>
                                        </div>
                                      </div>
                                   </div>
                                   <div className="flex flex-col items-end gap-1">
                                      <span className={`px-1.5 py-0.5 rounded-full text-[7px] xs:text-[8px] font-black text-white ${order.color}`}>
                                         {order.status}
                                      </span>
                                      <p className="text-[8px] xs:text-[10px] font-black text-slate-900 dark:text-white">4,500 DA</p>
                                   </div>
                                </div>
                            ))}
                         </div>
                       )}

                       {dashboardTab === 'analytics' && (
                         <div className="space-y-6">
                            <div className="p-4 xs:p-6 bg-primary/[0.03] dark:bg-primary/[0.05] rounded-[1.5rem] xs:rounded-[2rem] border border-primary/10">
                               <p className="text-[8px] xs:text-[10px] font-black text-primary uppercase tracking-widest mb-4">Revenus Mensuels</p>
                               <div className="flex gap-1 xs:gap-2 items-end h-24 xs:h-32 w-full">
                                 {[40, 70, 45, 90, 65, 80, 55, 100, 85, 75, 95, 80].map((h, i) => (
                                   <div key={i} className="flex-1 bg-primary/20 rounded-t-md xs:rounded-t-lg hover:bg-primary transition-all cursor-pointer group/bar relative" style={{ height: `${h}%` }}>
                                      <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 p-1.5 bg-slate-900 text-white rounded text-[8px] font-bold transition-opacity whitespace-nowrap z-50">
                                         {h * 10}k
                                      </div>
                                   </div>
                                 ))}
                               </div>
                            </div>
                         </div>
                       )}

                       {dashboardTab === 'customers' && (
                         <div className="space-y-3">
                            {[
                               { name: 'Yassir B.', spent: '12,450 DA', orders: 12 },
                               { name: 'Sara K.', spent: '8,200 DA', orders: 8 },
                               { name: 'Anas M.', spent: '5,100 DA', orders: 5 }
                            ].map((customer, i) => (
                               <div key={i} className="flex items-center justify-between p-3 xs:p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 group cursor-pointer shadow-sm">
                                  <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center font-black text-primary border border-slate-100 dark:border-slate-700">
                                        {customer.name.charAt(0)}
                                     </div>
                                     <div>
                                        <p className="text-[10px] xs:text-xs font-black text-slate-900 dark:text-white">{customer.name}</p>
                                        <p className="text-[8px] xs:text-[10px] text-slate-400 font-medium">{customer.orders} ordres</p>
                                     </div>
                                  </div>
                                  <p className="text-[10px] xs:text-xs font-black text-primary">{customer.spent}</p>
                               </div>
                            ))}
                         </div>
                       )}

                       {dashboardTab === 'finance' && (
                         <div className="space-y-6">
                            <div className="bg-primary p-4 xs:p-6 rounded-[1.5rem] xs:rounded-[2rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                               <p className="text-[8px] xs:text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Solde Actuel</p>
                               <p className="text-xl xs:text-3xl font-black tabular-nums tracking-tighter">45,620 <span className="text-xs">DA</span></p>
                               <div className="flex gap-2 mt-6 xs:mt-8">
                                  <button className="flex-1 py-2 xs:py-3 bg-white text-primary text-[8px] xs:text-[10px] font-black uppercase rounded-lg xs:rounded-xl font-black">Retrait</button>
                               </div>
                            </div>
                         </div>
                       )}

                       {dashboardTab === 'webstore' && (
                         <div className="h-full flex gap-3 xs:gap-4 flex-col xs:flex-row">
                            <div className="flex xs:flex-col gap-2 overflow-x-auto no-scrollbar">
                               {['sections', 'styles', 'polices'].map((sub) => (
                                 <button 
                                   key={sub}
                                   onClick={() => setBuilderSubTab(sub)}
                                   className={`p-2 xs:p-4 rounded-xl xs:rounded-2xl transition-all border-2 flex xs:flex-col items-center gap-2 xs:gap-3 flex-1 xs:flex-none whitespace-nowrap ${builderSubTab === sub ? 'border-primary bg-primary/[0.02]' : 'border-transparent bg-slate-50 dark:bg-slate-900/50'}`}
                                 >
                                    {sub === 'sections' && <Layout size={16} className={builderSubTab === sub ? 'text-primary' : 'text-slate-300'} />}
                                    {sub === 'styles' && <Palette size={16} className={builderSubTab === sub ? 'text-primary' : 'text-slate-300'} />}
                                    {sub === 'polices' && <Type size={16} className={builderSubTab === sub ? 'text-primary' : 'text-slate-300'} />}
                                    <p className={`text-[7px] xs:text-[9px] font-black uppercase tracking-tight ${builderSubTab === sub ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{sub}</p>
                                 </button>
                               ))}
                            </div>
                            
                            <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-2xl xs:rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-3 relative overflow-hidden animate-fade-in" key={builderSubTab}>
                               <button className="w-full mt-auto py-3 bg-primary text-white text-[8px] font-black uppercase rounded-xl">Enregistrer</button>
                            </div>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Float - Matching the theme */}
              <div className="absolute -bottom-10 -right-6 w-48 h-80 bg-white dark:bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-primary/20 animate-float border border-slate-100 dark:border-slate-800 -rotate-2 hidden xl:block">
                 <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-50 dark:border-slate-900 p-4 flex flex-col gap-4 overflow-hidden">
                    <div className="px-2 py-6 bg-primary/5 rounded-2xl flex flex-col items-center gap-2">
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Total Revenues</p>
                       <p className="text-xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{revenue.toLocaleString()} <span className="text-[10px]">DA</span></p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                      <button 
                        onClick={handlePrendreCommande}
                        disabled={isProcessing}
                        className="h-10 w-full bg-primary text-[10px] text-white font-black rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
                      >
                         {isProcessing ? <Loader2 size={16} className="animate-spin" /> : 'Prendre Commande'}
                      </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
