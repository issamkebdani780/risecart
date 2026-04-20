import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed K.',
      role: 'E-commerçant COD',
      content: 'Depuis que je suis passé sur RiseCart, ma gestion des commandes est devenue un jeu d\'enfant. Plus de pertes, plus d\'erreurs, juste de la croissance.',
      avatar: 'AK'
    },
    {
      name: 'Sarah M.',
      role: 'Fondatrice d\'une marque beauté',
      content: 'Le design de ma boutique est maintenant au niveau des plus grandes marques internationales. La conversion a triplé en un mois.',
      avatar: 'SM'
    },
    {
      name: 'Yassine B.',
      role: 'Vendeur Multi-canal',
      content: 'L\'intégration avec RiseConfirm a sauvé mon business. Gérer les confirmations directement depuis mon dashboard RiseCart est génial.',
      avatar: 'YB'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
       
       <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Ils ne reviendront plus <span className="text-primary italic">en arrière</span>.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] relative border border-slate-100 dark:border-slate-800 shadow-sm group hover:shadow-xl transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-slate-50 dark:text-slate-800/50" size={60} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg italic mb-10 leading-relaxed font-medium">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t border-slate-50 dark:border-slate-800 pt-6">
                   <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 flex items-center justify-center font-black text-primary">
                      {t.avatar}
                   </div>
                   <div>
                      <h4 className="font-black text-slate-900 dark:text-white tracking-tight">{t.name}</h4>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest">{t.role}</p>
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
