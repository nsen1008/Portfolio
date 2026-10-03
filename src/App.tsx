import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate, Outlet } from 'react-router-dom';
import { ScrollProgress } from './components/ScrollProgress';
import { PageLoader } from './components/PageLoader';
// import { SmoothScroll } from './components/animations/SmoothScroll';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Locale comes from the URL; old bookmarks keep their page under Vietnamese.
const LegacyRedirect = () => {
  const { pathname, search, hash } = useLocation();
  return <Navigate replace to={`/vi${pathname === '/' ? '' : pathname}${search}${hash}`} />;
};

const PortfolioItemRedirect = () => {
  const { id } = useParams();
  const location = useLocation();
  const locale = location.pathname.split('/')[1] === 'en' ? 'en' : 'vi';
  return <Navigate replace to={`/${locale}/project/${id || ''}`} />;
};

const LocaleLayout = () => {
  const locale = useLocation().pathname.split('/')[1];
  useEffect(() => {
    if (locale === 'vi' || locale === 'en') {
      document.documentElement.lang = locale;
      document.querySelector('meta[name="description"]')?.setAttribute('content', locale === 'vi'
        ? 'Portfolio của Nguyễn Thanh Sang. Front-End Developer chuyên React và Next.js.'
        : 'Portfolio of Nguyen Thanh Sang. Front-End Developer specializing in React and Next.js.');
    }
  }, [locale]);
  return <Outlet key={locale} />;
};

// Auto scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <SmoothScroll> */}
        <div className="min-h-screen text-[#111111] flex flex-col font-sans selection:bg-black selection:text-white vexoo-grain">
          <PageLoader />
          <ScrollProgress />
          <ScrollToTop />

          <Routes>
            {['vi', 'en'].map(locale => (
              <Route key={locale} path={`/${locale}`} element={<LocaleLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="project" element={<PortfolioPage />} />
                <Route path="project/:id" element={<ProjectDetailPage />} />
                <Route path="portfolio" element={<Navigate replace to={`/${locale}/project`} />} />
                <Route path="portfolio/:id" element={<PortfolioItemRedirect />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            ))}
            <Route path="/" element={<LegacyRedirect />} />
            <Route path="/about" element={<LegacyRedirect />} />
            <Route path="/project" element={<LegacyRedirect />} />
            <Route path="/project/:id" element={<LegacyRedirect />} />
            <Route path="/portfolio" element={<Navigate replace to="/vi/project" />} />
            <Route path="/portfolio/:id" element={<PortfolioItemRedirect />} />
            <Route path="/contact" element={<LegacyRedirect />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      {/* </SmoothScroll> */}
    </BrowserRouter>
  );
};

export default App;
