"use client";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export default function Reveal({ 
  children, 
  delay = 0, 
  y = 16, 
  once = true, 
  as = "div",
  className = ""
}: RevealProps) {
  const M = (motion as any)[as] || motion.div;
  
  return (
    <M 
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.32, 
        delay,
        ease: [0.22, 1, 0.36, 1],
        type: "tween"
      }}
    >
      {children}
    </M>
  );
}