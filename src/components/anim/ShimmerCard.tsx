import React, { useState } from 'react';

interface ShimmerCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function ShimmerCard({ children, className = "", href }: ShimmerCardProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [isHovered, setIsHovered] = useState(false);
  
  // If reduced motion is preferred, don't show the shimmer effect
  const cardContent = (
    <div 
      className={`
        relative overflow-hidden rounded-[var(--radius)] border border-white/10 bg-[var(--glass)] backdrop-blur
        transition-all duration-180 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${prefersReducedMotion ? '' : isHovered ? 'transform translate-y-[-2px] shadow-[0_12px_40px_rgba(0,0,0,0.06)]' : 'shadow-[0_12px_40px_rgba(0,0,0,0.06)]'}
        ${className}
      `}
      onMouseEnter={() => !prefersReducedMotion && setIsHovered(true)}
      onMouseLeave={() => !prefersReducedMotion && setIsHovered(false)}
    >
      <div className="relative z-10">{children}</div>
      {!prefersReducedMotion && isHovered && (
        <div className="shimmer absolute inset-0 z-0" />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}