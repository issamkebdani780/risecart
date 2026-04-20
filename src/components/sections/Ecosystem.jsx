import React from 'react';
import { Layers, Shield, Truck, CreditCard, Mic, Cpu, Zap, ShoppingBag, Plus, ArrowRight, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';

const Ecosystem = () => {
  const { t } = useTranslation();
  
  const modules = [
    { id: 'manager', name: 'RiseManager', icon: <Layers size={20} />, color: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500/20', desc: 'ERP & Pilotage global' },
    { id: 'confirm', name: 'RiseConfirm', icon: <Shield size={20} />, color: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500/20', desc: 'Confirmation & CRM' },
    { id: 'fbr', name: 'FBR', icon: <Truck size={20} />, color: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500/20', desc: 'Logistique intégrée' },
    { id: 'pay', name: 'RisePay', icon: <CreditCard size={20} />, color: 'bg-violet-500', text: 'text-violet-500', border: 'border-violet-500/20', desc: 'Paiements unifiés' },
    { id: 'voice', name: 'RiseVoice', icon: <Mic size={20} />, color: 'bg-rose-500', text: 'text-rose-500', border: 'border-rose-500/20', desc: 'IA Vocale & Support' },
    { id: 'future', name: 'Autres Modules', icon: <Plus size={20} />, color: 'bg-slate-400', text: 'text-slate-400', border: 'border-slate-400/20', desc: 'Écosystème évolutif' },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 transition-colors duration-500" id="ecosystem">
      {/* Dark modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6">
              <Cpu size={12} /> Écosystème RiseGroup
           </div>
           
           <h2 className="text-4xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              La vitrine d'une machine de <span className="text-primary italic">guerre</span>.
           </h2>
           
           <p className="text-slate-400 text-lg lg:text-xl font-medium leading-relaxed">
              RiseCart ne vit pas seul. Il est la porte d'entrée d'un système d'exploitation complet conçu pour automatiser chaque aspect de votre croissance e-commerce.
           </p>
        </div>

        {/* Network Diagram Architecture */}
        <div className="max-w-5xl mx-auto relative mt-16">
           
           {/* Center Trunk Line */}
           <div className="absolute top-[80px] bottom-[100px] left-1/2 w-0.5 bg-gradient-to-b from-primary via-slate-800 to-transparent -translate-x-1/2 hidden md:block" />

           {/* Top Node: RiseCart (The Core) */}
           <div className="flex justify-center mb-16 relative z-10">
              <div className="bg-slate-900 border-2 border-primary/40 rounded-[2.5rem] p-6 lg:p-8 flex items-center justify-center gap-6 shadow-[0_0_50px_rgba(0,162,255,0.2)] hover:scale-105 transition-transform duration-500 cursor-pointer min-w-[280px]">
                 <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 shrink-0">
                    <ShoppingBag size={28} />
                 </div>
                 <div className="text-left">
                    <div className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-1 flex items-center gap-2"><Activity size={10} className="animate-pulse" /> Vitrine Active</div>
                    <div className="text-3xl font-black text-white tracking-tight">RiseCart</div>
                 </div>
              </div>
           </div>

           {/* The Branches (Modules) */}
           <div className="grid md:grid-cols-2 gap-x-24 gap-y-8 lg:gap-y-12 relative w-full px-4 lg:px-0">
              {modules.map((mod, i) => {
                const isEven = i % 2 !== 0; // if true, it's on the right in a 2-col grid
                return (
                  <div key={mod.name} className="relative group">
                     {/* Connecting Branch Line (Desktop only) */}
                     <div className={`absolute top-1/2 w-12 lg:w-24 h-0.5 bg-slate-800 hidden md:block transition-colors duration-300 group-hover:bg-slate-600 ${isEven ? 'right-full' : 'left-full'}`}>
                        {/* Status blip on line */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity ${isEven ? 'left-0 animate-[slideRight_1s_ease-in-out_infinite]' : 'right-0 animate-[slideLeft_1s_ease-in-out_infinite]'}`} />
                     </div>

                     {/* The Module Card */}
                     <div className={`bg-slate-900/80 backdrop-blur-sm border ${mod.border} p-6 rounded-3xl flex items-center gap-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:bg-slate-900 cursor-pointer`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mod.color} bg-opacity-10 ${mod.text}`}>
                           {mod.icon}
                        </div>
                        <div>
                           <h4 className="text-xl font-black text-white mb-0.5 tracking-tight group-hover:text-primary transition-colors">{mod.name}</h4>
                           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{mod.desc}</p>
                        </div>
                     </div>
                  </div>
                );
              })}
           </div>

           {/* Bottom Connecting Button */}
           <div className="flex justify-center mt-20 relative z-10">
              <button className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] group">
                 Découvrir l'écosystème <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% { left: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes slideLeft {
          0% { right: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { right: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Ecosystem;
