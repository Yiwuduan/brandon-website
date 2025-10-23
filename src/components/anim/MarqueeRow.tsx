"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface MarqueeRowProps {
  children: React.ReactNode[];
  className?: string;
}

export default function MarqueeRow({ 
  children, 
  className = ""
}: MarqueeRowProps) {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    containScroll: "keepSnaps",
    dragFree: true,
  });
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Duplicate children for seamless looping effect
  const duplicatedChildren = [...children, ...children];

  return (
    <div 
      className={`overflow-hidden ${className}`}
      aria-label="Partners carousel"
      role="region"
    >
      <div 
        ref={emblaRef} 
        className="embla"
        {...(prefersReducedMotion ? { 'aria-hidden': 'true' } : {})}
      >
        <div className="embla__container flex">
          {duplicatedChildren.map((child, index) => (
            <div 
              key={index} 
              className="embla__slide flex-shrink-0 px-4"
              aria-hidden={prefersReducedMotion ? "true" : undefined}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* For users with reduced motion, provide an alternative static list */}
      {prefersReducedMotion && (
        <div className="flex justify-center flex-wrap gap-4">
          {children.map((child, index) => (
            <div key={`static-${index}`} className="p-2">
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}