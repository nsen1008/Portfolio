import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t("About")} — ${t("Nguyễn Thanh Sang")}`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen text-[#111111] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};
