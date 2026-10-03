import { useLanguage } from '../i18n/useLanguage';
import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from '../i18n/portfolio';
import { FadeInView } from './animations/FadeInView';
import { RollingText } from './animations/RollingText';
import { SplitText } from './animations/SplitText';

export const ProjectsSection: React.FC = () => {
  const { t, path } = useLanguage();
  const { projects: PROJECTS } = usePortfolioData();
  const row1 = PROJECTS.slice(0, 2);
  const featured = PROJECTS[2]; // Wide featured project
  const row3 = PROJECTS.slice(3, 5);

  return (
    <section className="projects-content w-full text-left pt-4 pb-20 sm:pb-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Page Title Header: Exact match to About page */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-bold text-black tracking-tight font-display leading-[0.9] mb-6">
            <SplitText text={t("Project")} delay={0.04} />
          </h1>
          <p className="text-base sm:text-xl text-black/60 font-sans max-w-3xl leading-relaxed">
            {t("Dive into a few projects that represent my most fulfilling development experiences")}
          </p>
        </div>

        {/* Template Alternating Grid: 2-Col, 1-Wide, 2-Col */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Row 1: 2 Columns (Aspect ratio ~1.13/1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {row1.map((project, idx) => (
              <FadeInView key={project.id} delay={idx * 0.15}>
                <Link
                  to={path(`/project/${project.id}`)}
                  className="p-4 sm:p-5 rounded-[32px] bg-black/[0.03] hover:bg-black/[0.05] group cursor-pointer flex flex-col justify-between block h-full transition-colors duration-300"
                >
                  {/* Clean Image Container with Exact Rounded Corners, ZERO Badges */}
                  <div className="relative rounded-[24px] overflow-hidden bg-black/5 aspect-[1.13/1] shadow-2xs">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Clean Bottom Bar: Left Title with Rolling Text, Right Category */}
                  <div className="project-caption pt-4 px-1 flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-medium font-display text-black tracking-tight">
                      <RollingText text={project.title.split('—')[0].trim()} />
                    </h3>
                    <span className="text-sm font-normal text-black/60 font-sans">
                      {t(project.category)}
                    </span>
                  </div>
                </Link>
              </FadeInView>
            ))}
          </div>

          {/* Row 2: 1 Full-Width Spotlight Card (Aspect ratio ~1.72/1) */}
          {featured && (
            <FadeInView delay={0.2}>
              <Link
                to={path(`/project/${featured.id}`)}
                className="p-4 sm:p-6 rounded-[32px] bg-black/[0.03] hover:bg-black/[0.05] group cursor-pointer flex flex-col justify-between block transition-colors duration-300"
              >
                {/* Clean Image Container with Aspect ratio 1.72/1, ZERO Badges */}
                <div className="relative rounded-[24px] overflow-hidden bg-black/5 aspect-[1.13/1] md:aspect-[1.72/1] shadow-2xs">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Clean Bottom Bar */}
                <div className="project-caption pt-4 px-1 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-medium font-display text-black tracking-tight">
                    <RollingText text={featured.title.split('—')[0].trim()} />
                  </h3>
                  <span className="text-sm font-normal text-black/60 font-sans">
                    {t(featured.category)}
                  </span>
                </div>
              </Link>
            </FadeInView>
          )}

          {/* Row 3: 2 Columns (Aspect ratio ~1.13/1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {row3.map((project, idx) => (
              <FadeInView key={project.id} delay={idx * 0.15}>
                <Link
                  to={path(`/project/${project.id}`)}
                  className="p-4 sm:p-5 rounded-[32px] bg-black/[0.03] hover:bg-black/[0.05] group cursor-pointer flex flex-col justify-between block h-full transition-colors duration-300"
                >
                  {/* Clean Image Container with Exact Rounded Corners, ZERO Badges */}
                  <div className="relative rounded-[24px] overflow-hidden bg-black/5 aspect-[1.13/1] shadow-2xs">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Clean Bottom Bar */}
                  <div className="project-caption pt-4 px-1 flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-medium font-display text-black tracking-tight">
                      <RollingText text={project.title.split('—')[0].trim()} />
                    </h3>
                    <span className="text-sm font-normal text-black/60 font-sans">
                      {t(project.category)}
                    </span>
                  </div>
                </Link>
              </FadeInView>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
