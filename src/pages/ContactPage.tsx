import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t("Contact")} — ${t("Nguyễn Thanh Sang")}`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen text-[#111111] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
