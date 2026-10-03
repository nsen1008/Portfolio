import { useLanguage } from '../i18n/useLanguage';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { RollingText } from './animations/RollingText';

export const Navbar: React.FC = () => {
  const { locale, t, path } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(92);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const updateHeight = () => setHeaderHeight(header.getBoundingClientRect().height);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
  const [timeString, setTimeString] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const pagePath = location.pathname.replace(/^\/(vi|en)(?=\/|$)/, "") || "/";
  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === 'dark');

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setIsDark(next);
    try {
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Ho_Chi_Minh',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pagePath === '/';
  const isProjectDetail = pagePath.startsWith('/project/') || pagePath.startsWith('/portfolio/');

  return (
    <>
    <div aria-hidden="true" style={{ height: headerHeight, flexShrink: 0 }} />
    <header
      ref={headerRef}
      className={`home-header w-full z-40 ${!isHome ? "inner-header" : ""} ${isScrolled ? "header-scrolled" : ""}`}
    >
      <div className="home-nav text-sm sm:text-base">
        {/* Left: Dynamic Home / Back or Name with Vexoo Roll Hover */}
        {isHome ? (
          <Link
            to={path("/")}
            className="home-brand"
            aria-label={`${t(PORTFOLIO_INFO.name)} - ${t("Home")}`}
          >
            <img className="home-brand-default" src="/images/logo1.png" alt="" width="1254" height="1254" />
            <img className="home-brand-hover" src="/images/logo2.png" alt="" width="1254" height="1254" aria-hidden="true" />
          </Link>
        ) : isProjectDetail ? (
          <Link
            to={path("/project")}
            className="header-back group inline-flex items-center gap-2 font-medium text-black tracking-tight"
          >
            <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
            <RollingText text={t("Back")} />
          </Link>
        ) : (
          <Link
            to={path("/")}
            className="header-back group inline-flex items-center gap-2 font-medium text-black tracking-tight"
          >
            <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
            <RollingText text={t("Home")} />
          </Link>
        )}

        {/* Center: Position / Role */}
        <div className="header-role hidden sm:block text-black font-medium tracking-tight">
          {t(PORTFOLIO_INFO.role)}
        </div>

        {/* Right: Location, live time and theme toggle */}
        <div className="header-meta flex items-center gap-2 font-medium text-black tracking-tight">
          <span>{t("TP. H\u1ed3 Ch\u00ed Minh")}</span>
          <span className="text-black/40">•</span>
          <span>{timeString || '6:00 AM'}</span>
          <div className="header-controls">
          <button
            type="button"
            className="language-toggle"
            lang={locale === 'vi' ? 'en' : 'vi'}
            aria-label={locale === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            title={locale === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            onClick={() => navigate(`/${locale === 'vi' ? 'en' : 'vi'}${pagePath === '/' ? '' : pagePath}${location.search}${location.hash}`)}
          >
            {locale === 'vi' ? 'EN' : 'VI'}
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={t(isDark ? 'Switch to light mode' : 'Switch to dark mode')}
            aria-pressed={isDark}
            title={t(isDark ? 'Switch to light mode' : 'Switch to dark mode')}
          >
            {isDark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
