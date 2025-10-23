"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick,
  type = "button",
  disabled = false,
  ariaLabel
}: MagneticButtonProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return (
      <button
        className={className}
        onClick={onClick}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
  
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });

  useEffect(() => {
    if (!ref.current) return;
    
    const el = ref.current;
    const radius = 120;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      
      if (dist < radius) {
        x.set((dx / radius) * 8);
        y.set((dy / radius) * 8);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ 
        x: sx, 
        y: sy,
        transition: 'transform 150ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`${className} min-h-[48px] rounded-xl`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
