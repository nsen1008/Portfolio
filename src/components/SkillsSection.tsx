import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const skillGroups = [
    {
      title: "Frontend Core & Frameworks",
      badge: "Cốt lõi",
      lead: "Kiến trúc giao diện hiện đại với React, Next.js và hệ sinh thái TypeScript.",
      items: [
        { name: "React / Next.js", desc: "App Router, SSR, Server & Client Components" },
        { name: "TypeScript / JavaScript ES6+", desc: "Kiểu dữ liệu chặt chẽ, tối ưu runtime logic" },
        { name: "HTML5 / Semantic Web", desc: "Cấu trúc chuẩn SEO, A11y & Web Vitals" },
      ],
      tags: ["React", "Next.js", "TypeScript", "JavaScript", "React Hooks", "Vite", "Turbopack"],
    },
    {
      title: "UI System & Motion",
      badge: "Trải nghiệm",
      lead: "Xây dựng trải nghiệm trực quan sống động, chuyển động mượt mà và responsive đa màn hình.",
      items: [
        { name: "Tailwind CSS & Vanilla CSS", desc: "Hệ thống Design Tokens, Responsive & Flex/Grid" },
        { name: "Framer Motion & GSAP", desc: "Scroll-driven animations, micro-interactions" },
        { name: "Ant Design & Radix UI", desc: "Component library accessible, headless UI" },
      ],
      tags: ["Tailwind CSS", "Framer Motion", "GSAP", "Ant Design", "Radix UI", "Responsive Design"],
    },
    {
      title: "Data Flow & State Management",
      badge: "Dữ liệu",
      lead: "Quản trị trạng thái ứng dụng đồng bộ, xử lý caching dữ liệu và kết nối API tối ưu.",
      items: [
        { name: "TanStack Query (React Query)", desc: "Caching dữ liệu bất đồng bộ, stale-time, prefetch" },
        { name: "Zustand & Context API", desc: "Quản lý state toàn cục gọn nhẹ, tối ưu re-render" },
        { name: "RESTful API & Axios Client", desc: "Interceptors, token refresh, error boundary" },
      ],
      tags: ["TanStack Query", "Zustand", "REST API", "Axios", "Fetch API", "JSON-LD"],
    },
    {
      title: "Performance, i18n & Tools",
      badge: "Vận hành",
      lead: "Bộ công cụ hoàn thiện sản phẩm thực chiến cho doanh nghiệp và người dùng cuối.",
      items: [
        { name: "i18next Đa ngôn ngữ", desc: "Hỗ trợ 8 ngôn ngữ động (ConDaoTrip & Odyssey)" },
        { name: "SEO & Performance", desc: "Meta tags, Open Graph, Sitemap & Image optimization" },
        { name: "Git & Version Control", desc: "Quy chuẩn Git Flow, GitHub, Postman, Vercel" },
      ],
      tags: ["i18next", "Technical SEO", "Git", "GitHub", "Postman", "Vercel", "Lighthouse"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono font-medium text-black/40 uppercase tracking-widest block mb-2">
              Capabilities & Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-display">
              Kỹ năng & Năng lực kỹ thuật
            </h2>
          </div>
          <p className="max-w-md text-sm text-black/60 leading-relaxed font-sans">
            Được đúc kết từ quá trình thực chiến tại <strong>DUDI Software</strong>, các sản phẩm du lịch quy mô thực và chứng chỉ <strong>Meta Front-End Developer</strong>.
          </p>
        </div>

        {/* 4 Vexoo Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="vexoo-card p-8 sm:p-10 flex flex-col justify-between hover:border-black/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight font-display">
                    {group.title}
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-black/70 border border-black/[0.05]">
                    {group.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-black/55 leading-relaxed mb-8">
                  {group.lead}
                </p>

                {/* Sub items */}
                <div className="space-y-4 mb-8">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="pb-3 border-b border-black/[0.04] last:border-none">
                      <div className="text-sm font-semibold text-[#111111]">
                        {item.name}
                      </div>
                      <div className="text-xs text-black/50 mt-0.5 font-sans">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Pills */}
              <div className="pt-5 border-t border-black/[0.04] flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white text-black/70 text-xs font-mono border border-black/[0.06] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Quality Bar */}
        <div className="mt-8 vexoo-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-black/[0.05] flex items-center justify-center font-display font-extrabold text-lg text-[#111111]">
              M
            </div>
            <div>
              <div className="text-sm font-bold text-[#111111]">Meta Front-End Certified Developer</div>
              <div className="text-xs text-black/50">Chứng chỉ quốc tế chuẩn mực về React, JavaScript và Web Performance</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_INFO.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-colors"
            >
              Xem chi tiết trong CV (PDF) ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
