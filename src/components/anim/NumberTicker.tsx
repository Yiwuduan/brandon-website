"use client";
import { useEffect, useState } from 'react';

interface NumberTickerProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function NumberTicker({ 
  value, 
  suffix = "", 
  duration = 2,
  className = ""
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 30); // 30fps approximation
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.ceil(start));
      }
    }, 1000 / 30);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className={className}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}