import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t("Home")} — ${t("Nguyễn Thanh Sang")}`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="home-page text-[#111111]">
      <Navbar />
      <main className="home-main">
        <Hero />
      </main>
    </div>
  );
};
