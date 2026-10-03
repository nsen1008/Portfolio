import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { usePortfolioData } from '../i18n/portfolio';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SplitText } from '../components/animations/SplitText';
import { FadeInView } from '../components/animations/FadeInView';
import { RollingText } from '../components/animations/RollingText';

export const ProjectDetailPage: React.FC = () => {
  const { t, path } = useLanguage();
  const { projects: PROJECTS } = usePortfolioData();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = currentIndex !== -1 ? PROJECTS[currentIndex] : null;

  const prevProject = project
    ? PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
    : null;
  const nextProject = project
    ? PROJECTS[(currentIndex + 1) % PROJECTS.length]
    : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title.split('—')[0].trim()} — ${t("Nguyễn Thanh Sang")}`;
    }
    window.scrollTo(0, 0);
  }, [project, id, t]);

  if (!project) {
    return (
      <div className="min-h-screen text-black flex flex-col justify-between pt-24 text-center">
        <Navbar />
        <div className="py-24 space-y-4">
          <h1 className="text-3xl font-bold font-display">{t("Không tìm thấy dự án")}</h1>
          <p className="text-sm text-black/60">{t("Dự án bạn tìm kiếm không tồn tại hoặc đã được cập nhật.")}</p>
          <button
            onClick={() => navigate(path('/project'))}
            className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold cursor-pointer"
          >
            {t("Quay lại Project")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black flex flex-col justify-between">
      <Navbar />

      <main className="project-detail flex-1 pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-left">
          
          {/* Top Title & Metadata */}
          <div className="pt-10 pb-8 space-y-6">
            <FadeInView delay={0.05} className="flex items-center gap-3">
              <span className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-black/[0.04] text-black/70 border border-black/[0.05]">
                {t(project.category)}
              </span>
            </FadeInView>

            <h1 className="text-4xl sm:text-6xl font-bold text-black tracking-tight font-display leading-[1.08]">
              <SplitText text={project.title.split('—')[0].trim()} delay={0.1} />
            </h1>

            <FadeInView delay={0.2}>
              <p className="text-lg sm:text-xl text-black/70 leading-relaxed font-sans max-w-3xl">
                {project.longDescription || project.description}
              </p>
            </FadeInView>

            {/* Metadata Columns */}
            <FadeInView delay={0.25}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-black/[0.06]">
                <div>
                  <span className="text-xs font-sans font-medium text-black/40 uppercase block mb-1">
                    {t("Đơn vị phát triển")}
                  </span>
                  <span className="text-sm font-medium text-black font-display tracking-tight">
                    {project.company || "DUDI Software"}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-sans font-medium text-black/40 uppercase block mb-1">
                    {t("Vai trò đảm nhiệm")}
                  </span>
                  <span className="text-sm font-medium text-black font-display tracking-tight">
                    {t("Front-End Developer")}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-sans font-medium text-black/40 uppercase block mb-1">
                    {t("Thời gian")}
                  </span>
                  <span className="text-sm font-medium text-black font-display tracking-tight">
                    {project.period || "2024 - 2025"}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-sans font-medium text-black/40 uppercase block mb-1">
                    {t("Trực tuyến")}
                  </span>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link text-sm font-medium text-black font-display tracking-tight inline-flex"
                    >
                      <span>{t("Xem website")}</span>
                      <span className="transform transition-transform">↗</span>
                    </a>
                  ) : (
                    <span className="text-sm font-sans text-black/40">{t("Nội bộ / On-prem")}</span>
                  )}
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Key Metrics / Highlights Stat Cards */}
          {project.metrics && project.metrics.length > 0 && (
            <FadeInView delay={0.28}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-2">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="vexoo-card p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <span className="text-xs font-sans font-medium text-black/45 uppercase tracking-wider block mb-2">
                      {t(metric.label)}
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight mb-1">
                      {metric.value}
                    </div>
                    {metric.desc && (
                      <span className="text-xs text-black/60 font-sans leading-relaxed">
                        {metric.desc}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FadeInView>
          )}

          {/* Large Hero Image Banner & Interactive Live Website Action Bar */}
          <FadeInView delay={0.3}>
            <div className="my-8 rounded-[32px] overflow-hidden bg-slate-200 border border-black/[0.06] shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover object-top hover:scale-[1.01] transition-transform duration-700 ease-out"
              />
              {project.demoUrl && (
                <div className="p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <div>
                      <div className="text-xs font-sans text-black/45">{t("Live Production")}</div>
                      <div className="text-sm font-medium font-mono text-black truncate">{project.demoUrl.replace(/^https?:\/\//, '')}</div>
                    </div>
                  </div>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-black/80 font-medium font-sans text-xs inline-flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>{t("Visit Live Website")}</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </FadeInView>

          {/* Deep Story & Technical Details */}
          <div className="space-y-10 pt-4">
            
            {/* 3 Story Cards: Challenge, Solution, Results */}
            <div className="project-story-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <FadeInView delay={0.15}>
                <div className="vexoo-card p-7 sm:p-8 space-y-3 h-full flex flex-col">
                  <span className="text-xs font-sans font-medium text-black/40 uppercase tracking-widest block">
                    {t("01 / Thách thức")}
                  </span>
                  <h3 className="text-xl font-bold font-display text-black">
                    {t("Yêu cầu bài toán")}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-sans flex-1">
                    {project.caseStudy?.challenge || t("Xây dựng giao diện web phản hồi nhanh, đáp ứng lượng truy cập thực tế, đồng thời hỗ trợ đa ngôn ngữ và tối ưu hiển thị SEO trên các công cụ tìm kiếm.")}
                  </p>
                </div>
              </FadeInView>

              <FadeInView delay={0.25}>
                <div className="vexoo-card p-7 sm:p-8 space-y-3 h-full flex flex-col">
                  <span className="text-xs font-sans font-medium text-black/40 uppercase tracking-widest block">
                    {t("02 / Giải pháp")}
                  </span>
                  <h3 className="text-xl font-bold font-display text-black">
                    {t("Kiến trúc kỹ thuật")}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-sans flex-1">
                    {project.caseStudy?.solution || t("Sử dụng React/Next.js kết hợp Tailwind CSS, triển khai client-side state mượt mà, đồng bộ URL parameters và tích hợp RESTful API với cơ chế interceptor an toàn.")}
                  </p>
                </div>
              </FadeInView>

              <FadeInView delay={0.35}>
                <div className="vexoo-card p-7 sm:p-8 space-y-3 h-full flex flex-col">
                  <span className="text-xs font-sans font-medium text-black/40 uppercase tracking-widest block">
                    {t("03 / Kết quả")}
                  </span>
                  <h3 className="text-xl font-bold font-display text-black">
                    {t("Giá trị thực tế")}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-sans flex-1">
                    {project.caseStudy?.result || t("Bàn giao sản phẩm đúng tiến độ cho khách hàng tại DUDI Software, hoạt động ổn định trên môi trường live production với phản hồi người dùng tích cực.")}
                  </p>
                </div>
              </FadeInView>

            </div>

            {/* Technical Architecture & Key Contributions */}
            {project.contributions && project.contributions.length > 0 && (
              <FadeInView delay={0.2}>
                <div className="vexoo-card p-8 sm:p-10 space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-sans font-medium text-black/40 uppercase tracking-widest block">
                      ENGINEERING & SCOPE
                    </span>
                    <h3 className="text-2xl font-bold font-display text-black">
                      {t("Technical Architecture & Key Contributions")}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {project.contributions.map((item, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.03] space-y-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-black/[0.06] text-black font-mono text-xs flex items-center justify-center font-bold shrink-0">
                            0{idx + 1}
                          </span>
                          <h4 className="text-base font-bold font-display text-black">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed pl-8.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            )}

            {/* Key Features & Tech Tags */}
            <FadeInView delay={0.22}>
              <div className="vexoo-card p-8 sm:p-10 space-y-6">
                <h3 className="text-2xl font-bold font-display text-black">
                  {t("Tính năng & Điểm nhấn kỹ thuật")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures?.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-black/[0.02]">
                      <span className="text-xs font-sans font-semibold text-black/40 shrink-0 mt-0.5">
                        0{fIdx + 1}
                      </span>
                      <span className="text-sm text-black/80 font-sans leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="pt-6 border-t border-black/[0.04] space-y-3">
                  <span className="text-xs font-sans font-medium text-black/40 uppercase tracking-wider block">
                    {t("Công nghệ & Thư viện sử dụng")}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white text-black/80 text-xs font-sans border border-black/[0.06] shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Project Pagination (Previous & Next) */}
            <FadeInView delay={0.25}>
              <div className="project-pagination pt-8 flex items-center justify-between border-t border-black/[0.08] gap-4">
                {prevProject ? (
                  <Link
                    to={path(`/project/${prevProject.id}`)}
                    className="flex items-center gap-3 group text-left max-w-[45%]"
                  >
                    <span className="text-2xl font-light text-black transform group-hover:-translate-x-1 transition-transform">
                      ←
                    </span>
                    <div>
                      <span className="text-xs font-sans text-black/40 block">{t("Previous project")}</span>
                      <span className="text-sm sm:text-base font-bold font-display text-black truncate block">
                        <RollingText text={prevProject.title.split('—')[0].trim()} />
                      </span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    to={path("/project")}
                    className="group text-xs font-sans font-medium text-black/50 flex items-center gap-1.5"
                  >
                    <span>←</span>
                    <RollingText text={t("Tất cả dự án")} />
                  </Link>
                )}

                <Link
                  to={path("/project")}
                  className="hidden md:inline-flex text-xs font-sans font-medium text-black/50 hover:text-black transition-colors"
                >
                  <RollingText text={t("Tất cả dự án")} />
                </Link>

                {nextProject && (
                  <Link
                    to={path(`/project/${nextProject.id}`)}
                    className="flex items-center gap-3 group text-right max-w-[45%]"
                  >
                    <div>
                      <span className="text-xs font-sans text-black/40 block">{t("Dự án kế tiếp")}</span>
                      <span className="text-sm sm:text-base font-bold font-display text-black truncate block">
                        <RollingText text={nextProject.title.split('—')[0].trim()} />
                      </span>
                    </div>
                    <span className="text-2xl font-light text-black transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </FadeInView>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
