import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
);


const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: t('footer_col_product'),
      links: [
        { name: t('footer_link_features'), path: '/features' },
        { name: t('footer_link_pricing'), path: '/pricing' },
        { name: t('footer_link_demo'), path: '/demo' },
        { name: t('footer_link_trial'), path: '/signup' },
      ],
    },
    {
      title: t('footer_col_ecosystem'),
      links: [
        { name: 'RiseManager', path: '#' },
        { name: 'RiseConfirm', path: '#' },
        { name: 'FBR', path: '#' },
        { name: 'RisePay', path: '#' },
      ],
    },
    {
      title: t('footer_col_resources'),
      links: [
        { name: 'Blog', path: '/blog' },
        { name: t('footer_link_help'), path: '#' },
        { name: 'FAQ', path: '/faq' },
        { name: t('footer_link_contact'), path: '/contact' },
      ],
    },
    {
      title: t('footer_col_legal'),
      links: [
        { name: t('footer_link_cgv'), path: '/cgv' },
        { name: t('footer_link_privacy'), path: '/privacy' },
        { name: t('footer_link_legal'), path: '/legal' },
        { name: t('footer_link_cookies'), path: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="pt-24 pb-12 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{column.title}</h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm font-bold text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/">
              <Logo
                iconClassName="w-8 h-8"
                textClassName="text-xl font-bold text-slate-900 dark:text-white tracking-tight"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm max-w-xs text-center md:text-left font-medium">
              {t('footer_tagline')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 hover:bg-blue-600 hover:text-white transition-all border border-slate-100 dark:border-slate-800 shadow-sm"><FacebookIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:text-white transition-all border border-slate-100 dark:border-slate-800 shadow-sm"><InstagramIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 hover:bg-zinc-900 dark:hover:bg-slate-800 hover:text-white transition-all border border-slate-100 dark:border-slate-800 shadow-sm"><TwitterIcon size={18} /></a>
            </div>
            <p className="text-slate-400 dark:text-slate-600 text-[11px] font-bold uppercase tracking-tight text-center md:text-right">
              {t('footer_rights', { year: currentYear })} <br />
              {t('footer_member')} <span className="text-primary font-black">RiseGroup</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
