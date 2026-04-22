import React from 'react';
import { useTranslation } from 'react-i18next';

const Logo = ({ 
 iconClassName = "w-8 h-8", 
 textClassName = "text-xl font-bold text-slate-900 tracking-tight",
 showText = true,
 className = "flex items-center gap-2 shrink-0 cursor-pointer",
 useImage = true
}) => {
  const { t } = useTranslation();

 return (
 <div className={className}>
 <div className={`${iconClassName} rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm transition-all flex items-center justify-center`}>
 {useImage ? (
 <img 
 src="/ecosystem/risecart.jpg" 
 alt="RiseCart Logo" 
 className="w-full h-full object-cover shrink-0" 
 />
 ) : (
 <div className="w-full h-full bg-primary flex items-center justify-center">
 <span className="text-white font-black italic text-lg leading-none">{t("R")}</span>
 </div>
 )}
 </div>
 {showText && <span className={textClassName}>{t("Rise")}<span className="text-primary italic">{t("Cart")}</span></span>}
 </div>
 );
};

export default Logo;
