import React from 'react';

interface RollingTextProps {
  text: string;
  className?: string;
}

export const RollingText: React.FC<RollingTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`relative inline-block overflow-hidden align-baseline ${className}`}>
      {/* First text in natural flow */}
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
        {text}
      </span>
      {/* Second text positioned exactly below */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-full inline-block transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform select-none"
      >
        {text}
      </span>
    </span>
  );
};
