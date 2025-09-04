'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { Chapter } from '@/lib/chapters';
import { Page } from './Page';

interface FlipLayerProps {
  currentChapter: number;
  progress: number;
}

export function FlipLayer({ currentChapter, progress }: FlipLayerProps) {
  // Create gradient for page curvature effect
  const gradientOpacity = Math.min(progress * 2, 1);
  const shadowOpacity = Math.min(progress * 3, 1);
  
  return (
    <div className="relative w-full h-full">
      {/* Front face of the flipping page */}
      <div className="absolute inset-0 bg-paper">
        <Page chapterId={currentChapter} />
      </div>
      
      {/* Back face of the flipping page (darker tint) */}
      <div 
        className="absolute inset-0 bg-paper-stain"
        style={{
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="w-full h-full opacity-60">
          <Page chapterId={currentChapter} />
        </div>
      </div>
      
      {/* Curvature gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            rgba(0,0,0,0) 0%, 
            rgba(0,0,0,${0.1 * gradientOpacity}) 30%, 
            rgba(0,0,0,${0.2 * gradientOpacity}) 50%, 
            rgba(0,0,0,${0.1 * gradientOpacity}) 70%, 
            rgba(0,0,0,0) 100%)`,
          opacity: gradientOpacity,
        }}
      />
      
      {/* Page shadow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(0,0,0,${0.3 * shadowOpacity}) 0%, 
            rgba(0,0,0,${0.1 * shadowOpacity}) 50%, 
            transparent 100%)`,
          transform: `translateX(${progress * 20}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: shadowOpacity }}
      />
      
      {/* Corner fold effect */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, 
            rgba(200,75,49,0.3) 0%, 
            rgba(200,75,49,0.1) 50%, 
            transparent 100%)`,
          clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)',
        }}
        animate={{
          opacity: progress > 0.1 ? 1 : 0,
          scale: 1 + (progress * 0.2),
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}