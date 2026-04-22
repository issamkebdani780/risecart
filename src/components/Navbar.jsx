import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);

        if (i18n.language === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = i18n.language || 'fr';
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme, i18n.language]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navLinks = [
        { name: t('nav_home'), path: '/' },
        { name: t('nav_features'), path: '/features' },
        { name: t('nav_pricing'), path: '/pricing' },
        { name: t('nav_ecosystem'), path: '/ecosystem' },
        { name: t('nav_demo'), path: '/demo' },
        { name: 'Blog', path: '/blog' },
    ];

    const languages = [
        { code: 'fr', name: 'Français' },
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
                <div
                    className={`container mx-auto px-4 lg:px-6 py-2.5 bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 flex items-center justify-between pointer-events-auto ${scrolled ? 'shadow-md py-2' : ''
                        }`}
                >
                    {/* Logo */}
                    <Link to="/">
                        <Logo
                            className="flex items-center gap-2 shrink-0 cursor-pointer group"
                            iconClassName="w-8 h-8 lg:w-9 lg:h-9"
                            textClassName="text-xl lg:text-2xl font-black text-slate-900 dark:text-white tracking-tight"
                        />
                    </Link>

                    {/* Navigation - Desktop (RiseManager style) */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-[13px] font-bold transition-all hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Theme Toggle - RiseManager Style */}
                        <div className="relative">
                            <button
                                onClick={toggleTheme}
                                className="p-2 sm:p-2.5 border border-slate-50 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-800/50 shadow-inner hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 group"
                                aria-label={t("Toggle Dark Mode")}
                            >
                                <svg className="w-4 h-4 text-amber-500 hidden dark:block animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                                <svg className="w-4 h-4 text-primary block dark:hidden group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            </button>
                        </div>

                        {/* Language Switcher - RiseManager Style */}
                        <div className="hidden md:block relative group">
                            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-50 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-800/50 shadow-inner hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <span className="text-[10px] font-black text-primary uppercase">{(i18n.language || 'fr').substring(0, 2)}</span>
                                <svg className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-2xl py-2 flex flex-col min-w-[120px]">
                                    {languages.map((lng) => (
                                        <button
                                            key={lng.code}
                                            onClick={() => changeLanguage(lng.code)}
                                            className={`px-4 py-2.5 text-xs font-bold text-start w-full transition-colors flex items-center justify-between ${i18n.language?.startsWith(lng.code) ? 'text-primary bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-500 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                                        >
                                            {lng.name}
                                            {i18n.language?.startsWith(lng.code) && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Login Link - Desktop */}
                        <Link
                            to="/login"
                            className="hidden lg:block text-sm font-bold text-slate-900 dark:text-slate-300 hover:text-primary transition-colors border border-slate-100 dark:border-slate-800 px-5 py-2.5 rounded-full"
                        >
                            {t('nav_login')}
                        </Link>

                        {/* CTA Button */}
                        <Link
                            to="/signup"
                            className="hidden sm:flex px-5 py-2.5 lg:px-6 lg:py-3 bg-primary hover:bg-primary-hover text-white text-xs lg:text-sm font-black rounded-full transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/20 items-center justify-center"
                        >
                            <span className="lg:hidden">{t('cta_start')?.split(' ')[0]}</span>
                            <span className="hidden lg:block">{t('cta_start')}</span>
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className="xl:hidden p-2 text-slate-900 dark:text-white transition-transform active:scale-90"
                            onClick={() => setIsOpen(true)}
                        >
                            <div className="flex flex-col gap-1.5 border-s ps-3 border-slate-100 dark:border-slate-800">
                                <div className="w-6 h-0.5 bg-slate-900 dark:bg-white rounded-full" />
                                <div className="w-4 h-0.5 bg-slate-900 dark:bg-white rounded-full self-end" />
                                <div className="w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full self-end" />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Modal (RiseManager style) */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-2xl border border-slate-100 dark:border-slate-800 animate-fade-in text-center">

                        <button className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-full hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                            <X size={20} />
                        </button>

                        {/* Logo in Menu */}
                        <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col items-center gap-3 mb-10">
                            <Logo
                                showText={false}
                                iconClassName="w-12 h-12"
                            />
                            <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{t("RiseCart")}</span>
                        </Link>

                        <nav className="flex flex-col gap-6 mb-10 overflow-y-auto max-h-[40vh] no-scrollbar">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-bold transition-all ${location.pathname === link.path ? 'text-primary' : 'text-slate-500 hover:text-primary dark:text-slate-400'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-3">
                            {/* Language Switcher Dropdown in Menu */}
                            <div className="flex flex-col gap-2 mb-4 bg-slate-50/50 dark:bg-slate-800/50 p-2 rounded-2xl border border-slate-100 dark:border-slate-800">
                                {languages.map((lng) => (
                                    <button
                                        key={lng.code}
                                        onClick={() => changeLanguage(lng.code)}
                                        className={`w-full py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${i18n.language?.startsWith(lng.code) ? 'text-primary bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-500 hover:text-primary'}`}
                                    >
                                        {lng.name}
                                        {i18n.language?.startsWith(lng.code) && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                    </button>
                                ))}
                            </div>

                            <Link
                                to="/login"
                                className="w-full py-4 text-sm font-bold text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center transition-all active:scale-95"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('nav_login')}
                            </Link>
                            <Link
                                to="/signup"
                                className="w-full py-4 bg-primary text-white text-sm font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center transition-all active:scale-95"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('cta_start')}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
