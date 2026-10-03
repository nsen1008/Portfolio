import { useLanguage } from '../i18n/useLanguage';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { RollingText } from './animations/RollingText';

const TECH_LOGOS = [
  {
    name: 'React',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D8FE]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FE" />
        <g stroke="#00D8FE" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" viewBox="0 0 180 180" fill="none">
        <mask id="mask-next" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask-next)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#3178C6] flex items-center justify-center text-white font-bold font-mono text-[10px] sm:text-[11px] leading-none shadow-2xs">
        TS
      </div>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg className="w-4 h-5 sm:w-5 sm:h-6" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#F7DF1E] flex items-center justify-end p-0.5 text-black font-black font-mono text-[9px] sm:text-[10px] leading-none shadow-2xs">
        JS
      </div>
    ),
  },
  {
    name: 'Vite',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none">
        <path d="M30.1 5.3L16.9 29.5c-.3.6-1.1.6-1.4 0L2.3 5.3c-.4-.7.1-1.6.9-1.6h25.9c.9 0 1.4.9 1 1.6z" fill="url(#vite-grad)" />
        <path d="M21.2 3.8l-7.7 15.3 4.1-1.3-4.6 9 8.2-15.3-4.1 1.3 4.1-9z" fill="#FFD02F" />
        <defs>
          <linearGradient id="vite-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.62 10.45l-8.07-8.07a2.53 2.53 0 0 0-3.58 0L8.4 3.95l3.22 3.22a2.38 2.38 0 0 1 3.03 3.05l3.1 3.1a2.38 2.38 0 0 1 2.3 3.74 2.38 2.38 0 0 1-3.74-2.3l-2.9-2.9v5.04a2.38 2.38 0 1 1-1.8-.08v-5.2l-3.3-3.3a2.38 2.38 0 0 1-3.1-3.04L2.38 8.8a2.53 2.53 0 0 0 0 3.58l8.07 8.07a2.53 2.53 0 0 0 3.58 0l7.59-7.58a2.53 2.53 0 0 0 0-3.58z" />
      </svg>
    ),
  },
];

export const Hero: React.FC = () => {
  const { t, path } = useLanguage();
  const [activeTitle, setActiveTitle] = useState<string>(t(PORTFOLIO_INFO.nickname));

  return (
    <section className="home-hero">
      
      <div className="home-title-stage">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeTitle}
            initial={{ y: 32, opacity: 0, skewY: 2 }}
            animate={{ y: 0, opacity: 1, skewY: 0 }}
            exit={{ y: -32, opacity: 0, skewY: -2 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="home-title font-medium tracking-[-0.04em] text-black leading-none font-display whitespace-nowrap"
          >
            {activeTitle}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="home-grid-stage">
        <div className="home-grid">
          
          {/* Card 1: About (Col 1 of 4) */}
          <div className="home-about md:col-span-1 h-full">
            <Link
              to={path("/about")}
              onMouseEnter={() => setActiveTitle(t("About"))}
              onMouseLeave={() => setActiveTitle(t(PORTFOLIO_INFO.nickname))}
              className="vexoo-hero-card p-6 sm:p-7 flex flex-col justify-between home-card-height group cursor-pointer block"
            >
              <div />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg sm:text-xl font-medium font-display text-black">
                  <RollingText text={t("About")} />
                </span>
                <span className="text-xl sm:text-2xl font-light text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </Link>
          </div>

          {/* Card 2: Project (Col 3 of 4) */}
          <div className="home-portfolio md:col-span-3 h-full">
            <Link
              to={path("/project")}
              onMouseEnter={() => setActiveTitle(t("Project"))}
              onMouseLeave={() => setActiveTitle(t(PORTFOLIO_INFO.nickname))}
              className="vexoo-hero-card p-6 sm:p-7 flex flex-col justify-between home-card-height group cursor-pointer block"
            >
              <div />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg sm:text-xl font-medium font-display text-black">
                  <RollingText text={t("Project")} />
                </span>
                <span className="text-xl sm:text-2xl font-light text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </Link>
          </div>

          {/* Card 3: Contact (Col 2 of 4) */}
          <div className="home-contact md:col-span-2 h-full">
            <Link
              to={path("/contact")}
              onMouseEnter={() => setActiveTitle(t("Contact"))}
              onMouseLeave={() => setActiveTitle(t(PORTFOLIO_INFO.nickname))}
              className="vexoo-hero-card p-6 sm:p-7 flex flex-col justify-between home-card-height group cursor-pointer block"
            >
              <div />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg sm:text-xl font-medium font-display text-black">
                  <RollingText text={t("Contact")} />
                </span>
                <span className="text-xl sm:text-2xl font-light text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </Link>
          </div>

          {/* Card 4: Avatar Photo (Col 1 of 4) */}
          <div className="home-portrait md:col-span-1 h-full">
            <div
              onMouseEnter={() => setActiveTitle(t('Hello!'))}
              onMouseLeave={() => setActiveTitle(t(PORTFOLIO_INFO.nickname))}
              data-theme-original
              className="rounded-[32px] md:rounded-[36px] overflow-hidden bg-white home-card-height relative group block cursor-pointer"
            >
              <img
                src={PORTFOLIO_INFO.avatar}
                alt={t(PORTFOLIO_INFO.name)}
                className="absolute left-[10%] top-[-3%] block w-[78%] h-auto max-w-none transition-all duration-500 ease-out"
              />
            </div>
          </div>

          {/* Card 5 & 6 Stack: Tools Marquee + Resume (Col 1 of 4) */}
          <div className="md:col-span-1 home-side-stack home-card-height">
            
            {/* Subcard 5: Infinite Logo Marquee Slider */}
            <div
              onMouseEnter={() => setActiveTitle(t("Stack"))}
              onMouseLeave={() => setActiveTitle(t(PORTFOLIO_INFO.nickname))}
              className="vexoo-hero-card p-3 sm:p-3.5 flex-1 flex items-center overflow-hidden relative rounded-[24px] sm:rounded-[28px] select-none cursor-pointer"
              title={t("Tech Stack")}
            >
              <motion.div
                className="flex items-center gap-3 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  ease: 'linear',
                  duration: 16,
                  repeat: Infinity,
                }}
              >
                {[...TECH_LOGOS, ...TECH_LOGOS].map((item, idx) => (
                  <div
                    key={idx}
                    data-theme-original
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/90 shadow-2xs border border-black/[0.05] flex items-center justify-center shrink-0"
                    title={item.name}
                  >
                    {item.icon}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Subcard 6: Resume Preview */}
            <a
              href={PORTFOLIO_INFO.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveTitle(t("Resume"))}
              onMouseLeave={() => setActiveTitle(t(PORTFOLIO_INFO.nickname))}
              className="vexoo-hero-card p-4 sm:p-5 flex-1 flex items-center justify-between group cursor-pointer block rounded-[24px] sm:rounded-[28px]"
            >
              <span className="text-base sm:text-lg font-medium font-display text-black">
                <RollingText text={t("Resume")} />
              </span>
              <span className="text-xl sm:text-2xl font-light text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
