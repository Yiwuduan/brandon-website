"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface MaskRevealProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  duration?: number;
  once?: boolean;
}

export default function MaskReveal({ 
  children, 
  as = "div",
  className = "",
  duration = 0.42,
  once = true
}: MaskRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once]);

  // Don't animate again if it's meant to run only once and has already animated
  const shouldAnimate = once ? !hasAnimated && isVisible : isVisible;

  const M = (motion as any)[as] || motion.div;

  return (
    <M
      ref={elementRef}
      className={className}
      initial="initial"
      animate={shouldAnimate ? "animate" : "initial"}
      variants={{
        initial: {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          letterSpacing: "0.02em",
        },
        animate: {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          letterSpacing: "0em",
          transition: {
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
            type: "tween"
          }
        }
      }}
    >
      {children}
    </M>
  );
}