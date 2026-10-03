import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ProjectsSection } from '../components/ProjectsSection';
import { Footer } from '../components/Footer';

export const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t("Project")} | Seneyu`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen text-[#111111] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};
