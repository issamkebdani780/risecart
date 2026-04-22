import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: t("À qui s'adresse RiseCart ?"),
      a: t("RiseCart est conçu pour tous les e-commerçants, du débutant qui lance sa première boutique au vendeur confirmé qui cherche à structurer et automatiser son activité.")
    },
    {
      q: t("Puis-je lancer ma boutique rapidement ?"),
      a: t("Oui ! En moins de 10 minutes, vous pouvez configurer votre boutique, ajouter vos produits et commencer à vendre.")
    },
    {
      q: t("RiseCart est-il adapté au COD (Cash on Delivery) ?"),
      a: t("Absolument. Toute la logique de gestion des commandes et l'intégration avec RiseConfirm sont optimisées pour le modèle COD.")
    },
    {
      q: t("Puis-je utiliser RiseCart sans connaissances techniques ?"),
      a: t("C'est notre promesse. Notre interface est 100% intuitive et ne nécessite aucune ligne de code.")
    },
    {
      q: t("Puis-je gérer plusieurs produits facilement ?"),
      a: t("Absolument. Notre gestionnaire de catalogue permet d'importer, de modifier et de gérer des centaines de produits et leurs variantes avec une interface très fluide et rapide.")
    },
    {
      q: t("Le site est-il responsive ?"),
      a: t("Oui, toutes les boutiques créées avec RiseCart sont ultra-optimisées pour mobile, là où se font 80% des ventes aujourd'hui.")
    },
    {
      q: t("RiseCart est-il connecté à d'autres services ?"),
      a: t("Oui, RiseCart s'intègre nativement à RiseManager, RiseConfirm et RisePay. Nous sommes l'outil central de l'écosystème RiseGroup.")
    },
    {
      q: t("Puis-je changer d'offre plus tard ?"),
      a: t("Oui, vous pouvez facilement changer d'offre (upgrade ou downgrade) à tout moment directement depuis les paramètres de votre compte, selon l'évolution de votre activité.")
    },
    {
      q: t("Comment fonctionne l'essai gratuit ?"),
      a: t("Vous bénéficiez de 7 jours gratuits avec un accès complet à toutes les fonctionnalités de l'offre choisie pour tester la puissance de la plateforme, sans aucune carte bancaire requise.")
    },
    {
      q: t("Y a-t-il une démo ?"),
      a: t("Oui, vous pouvez demander une démonstration personnalisée avec l'un de nos experts via le bouton de démo pour découvrir la plateforme en détail.")
    },
    {
      q: t("Puis-je être accompagné ?"),
      a: t("Oui, nous offrons un support technique ultra-réactif pour toutes nos offres. De plus, les utilisateurs de nos plans professionnels bénéficient d'un accompagnement stratégique dédié.")
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">{t("Questions")} <span className="text-primary italic">{t("fréquentes")}</span>.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden transition-all duration-300 border ${isOpen ? 'border-primary ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-800 shadow-sm'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-8 text-start group"
      >
        <span className={`text-lg font-black tracking-tight transition-colors ${isOpen ? 'text-primary' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-600'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8 text-slate-500 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
