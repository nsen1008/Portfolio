import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = location.pathname.startsWith('/en') ? 'en' : 'vi';

  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === 'dark');

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setIsDark(next);
    try {
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
    } catch {
      // storage unavailable
    }
  };

  const toggleLanguage = () => {
    const targetLocale = locale === 'vi' ? 'en' : 'vi';
    let nextPath = location.pathname;
    if (/^\/(vi|en)(?:\/|$)/.test(nextPath)) {
      nextPath = nextPath.replace(/^\/(vi|en)/, `/${targetLocale}`);
    } else {
      nextPath = `/${targetLocale}${nextPath.startsWith('/') ? '' : '/'}${nextPath}`;
    }
    navigate(`${nextPath}${location.search}${location.hash}`);
  };

  useEffect(() => {
    document.title = '404 | Seneyu';
    window.scrollTo(0, 0);
  }, [locale]);

  return (
    <div className="not-found-fullscreen vexoo-grain">
      {/* Floating Top Navigation */}
      <header className="not-found-header">
        <Link to={`/${locale}`} className="home-brand" aria-label="Home">
          <img className="home-brand-default" src="/images/logo1.png" alt="" width="1254" height="1254" />
          <img className="home-brand-hover" src="/images/logo2.png" alt="" width="1254" height="1254" aria-hidden="true" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            title={locale === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
          >
            {locale === 'vi' ? 'EN' : 'VI'}
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối'}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Interactive Universe */}
      <div className="card">
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <div className="orb orb--3"></div>
        <div className="orb orb--4"></div>
        <div className="orb orb--5"></div>
        <div className="orb orb--6"></div>

        <div className="error-container">
          <div className="error-code">404</div>
          <div className="error-msg">
            {locale === 'en' ? 'Nothing to see here.' : 'Không tìm thấy trang này.'}
          </div>
          <Link to={`/${locale}`} className="home-btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{locale === 'en' ? 'Go Home' : 'Về trang chủ'}</span>
          </Link>
        </div>

        <div className="duck__wrapper">
          <div className="duck">
            <div className="duck__inner">
              <div className="duck__mouth"></div>
              <div className="duck__head">
                <div className="duck__eye"></div>
                <div className="duck__white"></div>
              </div>
              <div className="duck__body"></div>
              <div className="duck__wing"></div>
            </div>
            <div className="duck__foot duck__foot--1"></div>
            <div className="duck__foot duck__foot--2"></div>
            <div className="surface"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

