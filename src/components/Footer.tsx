import { useLanguage } from '../i18n/useLanguage';
import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_INFO } from '../data/portfolioData';

const phoneDigits = PORTFOLIO_INFO.phone.replace(/\D/g, '');
const contactColumns = [
  [{ label: 'Email', text: PORTFOLIO_INFO.socials.email, href: `mailto:${PORTFOLIO_INFO.socials.email}`, external: false }],
  [
    { label: 'Phone', text: PORTFOLIO_INFO.phone, href: `tel:+84${phoneDigits.replace(/^0/, '')}`, external: false },
    { label: 'Zalo', text: PORTFOLIO_INFO.phone, href: `https://zalo.me/${phoneDigits}`, external: true },
  ],
  [
    { label: 'GitHub', text: '@nsen1008', href: PORTFOLIO_INFO.socials.github, external: true },
    { label: 'LinkedIn', text: '@thanhsang1008', href: PORTFOLIO_INFO.socials.linkedin, external: true },
  ],
];

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { t, path } = useLanguage();
  return (
    <footer className="contact-footer border-t border-black/[0.08] text-left">
      <div className="contact-footer-grid">
        {contactColumns.map((column) => (
          <div className="contact-footer-column" key={column[0].label}>
            {column[0].label === 'Email' && (
              <Link
                to={path('/')}
                className="home-brand"
                aria-label={`${t(PORTFOLIO_INFO.name)} - ${t('Home')}`}
              >
                <img className="home-brand-default" src="/images/logo1.png" alt="" width="1254" height="1254" />
                <img className="home-brand-hover" src="/images/logo2.png" alt="" width="1254" height="1254" aria-hidden="true" />
              </Link>
            )}
            {column.map((contact) => (
              <div className="min-w-0" key={t(contact.label)}>
                <span className="block text-sm text-black/45 mb-2">{t(contact.label)}</span>
                <a
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="footer-link font-medium text-[#111111] font-display"
                >
                  <span>{contact.text}</span>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-black/50 font-sans">
        <p>Copyright © {CURRENT_YEAR} • {t(PORTFOLIO_INFO.nickname)}</p>
      </div>
    </footer>
  );
};
