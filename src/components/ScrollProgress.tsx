import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Floating Scroll-Driven Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-slate-200/50 pointer-events-none">
        <div
          className="h-full bg-slate-900 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Reading Progress & Back to Top */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 flex items-center gap-2 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          className="px-3.5 py-2 rounded-full bg-white/95 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200/90 shadow-md text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5"
          aria-label={t("L\u00ean \u0111\u1ea7u trang")}
        >
          <span>{Math.round(scrollProgress)}%</span>
          <span>↑</span>
        </button>
      </div>
    </>
  );
};
