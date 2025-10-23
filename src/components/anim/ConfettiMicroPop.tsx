import { useEffect, useRef } from 'react';

interface ConfettiMicroPopProps {
  active: boolean;
  onComplete?: () => void;
}

export default function ConfettiMicroPop({ active, onComplete }: ConfettiMicroPopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion || !active) {
    // If reduced motion is preferred or not active, just call onComplete if provided
    useEffect(() => {
      if (active && onComplete) {
        const timer = setTimeout(onComplete, 0);
        return () => clearTimeout(timer);
      }
    }, [active, onComplete]);
    
    return null;
  }

  // Create simple confetti particles
  useEffect(() => {
    if (!active || prefersReducedMotion) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    // Create 24 confetti particles
    const particles = [];
    for (let i = 0; i < 24; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.position = 'fixed';
      particle.style.width = '6px';
      particle.style.height = '6px';
      particle.style.borderRadius = '50%';
      particle.style.opacity = '0.8';
      particle.style.zIndex = '9999';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = '50%';
      
      // Random colors from our palette
      const colors = ['#D4AF37', '#F7F7F5', '#C9CBCF'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Add to document
      document.body.appendChild(particle);
      particles.push(particle);
      
      // Animate particle
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 100;
      const vx = Math.cos(angle) * velocity;
      const vy = -Math.abs(Math.sin(angle)) * velocity; // Only upwards
        
      const startTime = Date.now();
      const duration = 600 + Math.random() * 400; // Random duration between 600-1000ms
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const x = vx * progress;
        const y = vy * progress + 0.5 * 0.5 * progress * progress * 100; // With gravity
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = String(1 - progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }
    
    // Call onComplete after 1000ms (longer than animation)
    if (onComplete) {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [active, onComplete, prefersReducedMotion]);

  return null;
}