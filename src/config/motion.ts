// config/motion.ts
interface MotionConfig {
  enableTilt: boolean;
  parallaxStrength: number;
  shimmerSpeed: number;
  useThreeHover: boolean;
  reducedMotion: boolean;
}

export const motionConfig: MotionConfig = {
  enableTilt: true,
  parallaxStrength: 5,
  shimmerSpeed: 1.1,
  useThreeHover: true,
  reducedMotion: false,
};

// Function to update motion preferences based on user settings
export const updateMotionPreferences = (newConfig: Partial<MotionConfig>) => {
  Object.assign(motionConfig, newConfig);
  
  // Save user preferences to localStorage
  localStorage.setItem('motionPreferences', JSON.stringify(newConfig));
  
  // Update reduced motion based on system preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionConfig.reducedMotion = mediaQuery.matches;
};

// Function to check if motion should be enabled
export const shouldEnableMotion = () => {
  // Check system preference first
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) return false;
  
  // Check user preference override if it exists
  const savedPreferences = localStorage.getItem('motionPreferences');
  if (savedPreferences) {
    const prefs = JSON.parse(savedPreferences);
    if (prefs.reducedMotion !== undefined) {
      return !prefs.reducedMotion;
    }
  }
  
  // Default to enabled
  return true;
};