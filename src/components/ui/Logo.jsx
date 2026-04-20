import React from 'react';

const Logo = ({ 
  iconClassName = "w-8 h-8", 
  textClassName = "text-xl font-bold text-slate-900 tracking-tight",
  showText = true,
  className = "flex items-center gap-2 shrink-0 cursor-pointer",
  useImage = true
}) => {
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
              <span className="text-white font-black italic text-lg leading-none">R</span>
           </div>
         )}
      </div>
      {showText && <span className={textClassName}>Rise<span className="text-primary italic">Cart</span></span>}
    </div>
  );
};

export default Logo;
