import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidUnderlineProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function LiquidUnderline({ 
  children, 
  href,
  className = ""
}: LiquidUnderlineProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const linkContent = prefersReducedMotion ? (
    <span className={`relative inline-block ${className} text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-4 decoration-[0.8px] decoration-white/40 hover:decoration-white/70`}>
      {children}
      <span
        className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent)] origin-left"
        style={{ 
          content: "''",
          display: "block",
          width: "0%",
        }}
      />
    </span>
  ) : (
    <motion.span
      className={`relative inline-block ${className} text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-4 decoration-[0.8px] decoration-white/40 hover:decoration-white/70`}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent)] origin-left"
        style={{ 
          content: "''",
          display: "block",
        }}
        initial={{ width: 0 }}
        whileHover={{ 
          width: "100%", 
          transition: { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }
        }}
      />
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {linkContent}
      </a>
    );
  }

  return linkContent;
}