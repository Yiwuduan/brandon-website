"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number; // Between 0 and 10, default 5
  [key: string]: any; // Allow other props
}

export default function ParallaxImage({ 
  src,
  alt,
  className = "",
  strength = 5,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Calculate the translation amount based on strength (5 = ~6% visually)
  const ty = useTransform(scrollYProgress, [0, 1], [-(strength * 1.2), strength * 1.2]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: ty }}>
        <img src={src} alt={alt} {...props} className="w-full h-auto" />
      </motion.div>
    </div>
  );
}