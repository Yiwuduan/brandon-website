import { motion } from "framer-motion";
import { useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ 
  children, 
  className = "" 
}: SpotlightCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return (
      <div className={`relative rounded-[var(--radius)] bg-[var(--glass)] border border-white/10 backdrop-blur ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative rounded-[var(--radius)] bg-[var(--glass)] border border-white/10 backdrop-blur ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {isHovered && (
        <motion.div 
          className="absolute inset-0 rounded-[var(--radius)] opacity-60 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 80%)`,
          }}
          initial={false}
        />
      )}
      {children}
    </motion.div>
  );
}