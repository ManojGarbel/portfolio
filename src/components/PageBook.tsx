'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { pageFlipVariants, reducedMotionVariants } from '@/lib/framer';
import { usePageState } from './providers/PageStateProvider';
import { Page } from './Page';
import { FlipLayer } from './FlipLayer';

interface PageBookProps {
  currentChapter: number;
}

export function PageBook({ currentChapter }: PageBookProps) {
  const { reducedMotion, isFlipping, setIsFlipping } = usePageState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [flipProgress, setFlipProgress] = useState(0);
  
  const progress = useMotionValue(0);
  const rotateY = useTransform(progress, [0, 1], [0, -180]);
  const scaleX = useTransform(progress, [0, 0.5, 1], [1, 0.8, 1]);
  const scaleY = useTransform(progress, [0, 0.5, 1], [1, 0.95, 1]);
  const skewY = useTransform(progress, [0, 1], [0, 5]);
  const z = useTransform(progress, [0, 1], [0, 20]);

  useEffect(() => {
    if (isFlipping) {
      setIsAnimating(true);
      setFlipProgress(0);
      
      if (reducedMotion) {
        // For reduced motion, use simple crossfade
        setTimeout(() => {
          setIsAnimating(false);
          setIsFlipping(false);
        }, 300);
      } else {
        // Animate the page flip
        const duration = 600;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const currentProgress = Math.min(elapsed / duration, 1);
          
          setFlipProgress(currentProgress);
          progress.set(currentProgress);
          
          if (currentProgress < 1) {
            requestAnimationFrame(animate);
          } else {
            setIsAnimating(false);
            setIsFlipping(false);
            setFlipProgress(0);
            progress.set(0);
          }
        };
        
        requestAnimationFrame(animate);
      }
    }
  }, [isFlipping, reducedMotion, progress, setIsFlipping]);

  if (reducedMotion) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            variants={reducedMotionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full h-full"
          >
            <Page chapterId={currentChapter} />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[600px] lg:h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-8">
      {/* Book container with perspective */} 
      <div className="relative w-full max-w-6xl h-full max-h-[800px] perspective-1000">
        {/* Current page */}
        <div className="absolute inset-0 z-10">
          <Page chapterId={currentChapter} />
        </div>
        
        {/* Flip layer for animation */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              key={`flip-${currentChapter}`}
              className="absolute inset-0 z-20"
              style={{
                rotateY,
                scaleX,
                scaleY,
                skewY,
                z,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
              variants={pageFlipVariants}
              initial="idle"
              animate="flipping"
              exit="settled"
            >
              <FlipLayer 
                currentChapter={currentChapter}
                progress={flipProgress}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Next page (peeking through) */}
        {isAnimating && flipProgress > 0.3 && (
          <div className="absolute inset-0 z-5 opacity-50">
            <Page chapterId={currentChapter + 1} />
          </div>
        )}
      </div>
      
      {/* Corner fold indicator */}
      <div className="absolute top-4 right-4 z-30">
        <motion.div
          className="w-8 h-8 bg-retro-yellow/20 border-2 border-retro-yellow rounded-tl-lg"
          animate={{
            scale: isFlipping ? [1, 1.1, 1] : 1,
            rotate: isFlipping ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 0.6,
            repeat: isFlipping ? Infinity : 0,
            repeatType: 'reverse',
          }}
        />
      </div>
    </div>
  );
}