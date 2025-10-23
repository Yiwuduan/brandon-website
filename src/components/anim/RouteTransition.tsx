import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface RouteTransitionProps {
  children: ReactNode;
}

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(children as React.ReactElement, {
        key: location.pathname,
      })}
    </AnimatePresence>
  );
};

export default RouteTransition;