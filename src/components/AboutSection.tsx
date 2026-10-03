import { useLanguage } from '../i18n/useLanguage';
import React from 'react';
import { usePortfolioData } from '../i18n/portfolio';
import { SplitText } from './animations/SplitText';
import { FadeInView } from './animations/FadeInView';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}


const SKILL_TICKER = [
  "React & Next.js –",
  "TypeScript –",
  "Tailwind CSS –",
  "REST API & Axios –",
  "GSAP & Framer Motion –",
  "Responsive Design –",
  "Git & GitHub –",
];

export const AboutSection: React.FC = () => {
  const { locale, t } = useLanguage();
  const { info: PORTFOLIO_INFO } = usePortfolioData();
const EXPERIENCES: ExperienceItem[] = [
  {
    period: PORTFOLIO_INFO.experience[0].period,
    role: PORTFOLIO_INFO.experience[0].role,
    company: PORTFOLIO_INFO.experience[0].company,
    description: PORTFOLIO_INFO.experience[0].description,
  },
  {
    period: PORTFOLIO_INFO.experience[1].period,
    role: PORTFOLIO_INFO.experience[1].role,
    company: PORTFOLIO_INFO.experience[1].company,
    description: PORTFOLIO_INFO.experience[1].description,
  },
  {
    period: PORTFOLIO_INFO.education.period,
    role: t("Sinh viên Kỹ thuật Phần mềm"),
    company: PORTFOLIO_INFO.education.school,
    description: locale === 'en' ? `Studied ${PORTFOLIO_INFO.education.major} with a GPA of ${PORTFOLIO_INFO.education.gpa}. Completed projects in web development, mobile development, databases and object-oriented programming.` : `Chuyên ngành ${PORTFOLIO_INFO.education.major} với GPA ${PORTFOLIO_INFO.education.gpa}. Hoàn thành các đồ án chuyên sâu về Web Development, Mobile Development, Hệ cơ sở dữ liệu và Lập trình hướng đối tượng.`,
  },
];

  return (
    <div className="about-content w-full text-left">
      {/* 1. Top Section: About Title + Clean Avatar Image */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-4 pb-16 sm:pb-24">
        <div className="about-intro flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          {/* Huge Display Heading */}
          <div className="flex-1">
            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-bold text-black tracking-tight font-display leading-[0.9]">
              <SplitText text={t("About")} delay={0.04} />
            </h1>
          </div>

          {/* Clean Avatar Image without any badge/text overlay */}
          <FadeInView delay={0.2} className="w-full md:w-auto flex-shrink-0">
            <div className="w-full sm:w-[320px] md:w-[340px] aspect-[0.798/1] rounded-[32px] overflow-hidden bg-black/5 shadow-xs">
              <img
                src={PORTFOLIO_INFO.avatar}
                alt={PORTFOLIO_INFO.name}
                className="w-full h-full object-cover object-top hover:scale-103 transition-all duration-700 ease-out"
              />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* 2. Real Experience Timeline (EXACT MATCH TO REFERENCE TEMPLATE TABLE LAYOUT) */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 sm:py-20">
        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <FadeInView key={idx} delay={idx * 0.12}>
              <div className="experience-row flex flex-col md:flex-row items-start gap-6 md:gap-12 pb-12 sm:pb-16 border-b border-black/[0.06] last:border-none last:pb-0">
                {/* Column 1: Period (Date) */}
                <div className="w-full md:w-[22%] flex-shrink-0 text-base sm:text-lg text-black font-medium tracking-tight">
                  {exp.period}
                </div>

                {/* Column 2: Role & Company */}
                <div className="w-full md:w-[28%] flex-shrink-0 space-y-1">
                  <div className="text-base sm:text-lg font-medium text-black tracking-tight font-display">
                    {exp.role}
                  </div>
                  <div className="text-sm sm:text-base text-black/60 font-sans">
                    {exp.company}
                  </div>
                </div>

                {/* Column 3: Detailed Description */}
                <div className="flex-1 min-w-0 text-sm sm:text-base text-black/70 leading-relaxed font-sans">
                  {exp.description}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* 3. Infinite Marquee Skill Ticker */}
      <section className="w-full py-8 sm:py-12 border-t border-black/[0.06] overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden select-none">
          <div className="about-skill-marquee flex items-center gap-8 shrink-0">
            {SKILL_TICKER.map((service, idx) => (
              <span
                key={idx}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-black/75 tracking-tight font-display"
              >
                {t(service)}
              </span>
            ))}
          </div>
          <div className="about-skill-marquee flex items-center gap-8 shrink-0" aria-hidden="true">
            {SKILL_TICKER.map((service, idx) => (
              <span
                key={`clone-${idx}`}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-black/75 tracking-tight font-display"
              >
                {t(service)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
