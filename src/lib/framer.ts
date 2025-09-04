import { Variants } from 'framer-motion';

// Common easing functions for comic-style animations
export const easings = {
  comic: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  elastic: [0.175, 0.885, 0.32, 1.275] as const,
  anticipate: [0.4, 0, 0.2, 1] as const,
  circOut: [0.55, 0, 0.1, 1] as const,
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
};

// Page flip animation variants
export const pageFlipVariants: Variants = {
  idle: {
    rotateY: 0,
    scaleX: 1,
    scaleY: 1,
    skewY: 0,
    z: 0,
    transition: {
      duration: 0.6,
      ease: easings.circOut,
    },
  },
  dragging: {
    rotateY: -15,
    scaleX: 0.95,
    scaleY: 0.98,
    skewY: 2,
    z: 10,
    transition: {
      duration: 0.1,
      ease: 'linear',
    },
  },
  flipping: {
    rotateY: -90,
    scaleX: 0.8,
    scaleY: 0.95,
    skewY: 5,
    z: 20,
    transition: {
      duration: 0.3,
      ease: easings.anticipate,
    },
  },
  settled: {
    rotateY: -180,
    scaleX: 1,
    scaleY: 1,
    skewY: 0,
    z: 0,
    transition: {
      duration: 0.3,
      ease: easings.circOut,
    },
  },
};

// Panel reveal animation variants
export const panelRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: easings.bounce,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -10,
    transition: {
      duration: 0.3,
      ease: easings.comic,
    },
  },
};

// Stagger animation for multiple panels
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Speech bubble animation
export const speechBubbleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.bounce,
    },
  },
};

// Action burst animation
export const actionBurstVariants: Variants = {
  idle: {
    scale: 1,
    rotate: 0,
  },
  burst: {
    scale: [1, 1.2, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.6,
      ease: easings.elastic,
    },
  },
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easings.comic,
    },
  },
  out: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
      ease: easings.comic,
    },
  },
};

// Reduced motion variants (for accessibility)
export const reducedMotionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// Gesture animation values
export const gestureConfig = {
  drag: {
    dragConstraints: { left: -50, right: 50 },
    dragElastic: 0.1,
    dragMomentum: false,
  },
  swipe: {
    swipeThreshold: 50,
    swipeVelocity: 0.5,
  },
};

// Page flip progress transforms
export const createPageFlipTransforms = (progress: number) => {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  return {
    rotateY: clampedProgress * -180,
    scaleX: 1 - (clampedProgress * 0.2),
    scaleY: 1 - (clampedProgress * 0.05),
    skewY: clampedProgress * 5,
    z: clampedProgress * 20,
    opacity: 1 - (clampedProgress * 0.1),
  };
};

// Corner fold animation
export const cornerFoldVariants: Variants = {
  idle: {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
  },
  folded: {
    rotateY: -15,
    rotateX: 5,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: easings.comic,
    },
  },
};

// Navigation highlight animation
export const navHighlightVariants: Variants = {
  inactive: {
    scale: 1,
    color: '#121212',
    backgroundColor: 'transparent',
  },
  active: {
    scale: 1.05,
    color: '#F8F3E7',
    backgroundColor: '#C84B31',
    transition: {
      duration: 0.2,
      ease: easings.comic,
    },
  },
  hover: {
    scale: 1.02,
    color: '#C84B31',
    transition: {
      duration: 0.1,
      ease: easings.comic,
    },
  },
};