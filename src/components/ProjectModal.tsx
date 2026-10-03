import React from 'react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl text-left text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer shadow-sm"
          aria-label="Đóng"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/40 backdrop-blur-md uppercase tracking-wider font-semibold">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold font-display mt-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs text-slate-200 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Live Link Button if available */}
          {project.demoUrl && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-slate-500 font-mono block">Website thực tế (Live Demo):</span>
                <span className="font-semibold text-slate-900 text-sm">{project.demoUrl}</span>
              </div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer shrink-0"
              >
                Mở website →
              </a>
            </div>
          )}

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 font-mono text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <div className="text-[11px] text-slate-500">{m.label}</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              Tổng quan bài toán & Kiến trúc:
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              Điểm nhấn kỹ thuật:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5 font-bold">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              Công nghệ & Thư viện:
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Close button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
