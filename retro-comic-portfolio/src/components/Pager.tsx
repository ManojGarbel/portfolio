'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOTAL_CHAPTERS } from '@/lib/chapters';
import { usePageState } from './providers/PageStateProvider';

interface PagerProps {
  currentChapter: number;
}

export function Pager({ currentChapter }: PagerProps) {
  const { goToNextChapter, goToPreviousChapter, isFlipping } = usePageState();

  const canGoPrevious = currentChapter > 0;
  const canGoNext = currentChapter < TOTAL_CHAPTERS - 1;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm comic-border comic-shadow-lg px-6 py-3 rounded-2xl">
        {/* Previous Button */}
        <motion.button
          className={`p-3 rounded-xl border-2 transition-all duration-200 focus-comic ${
            canGoPrevious && !isFlipping
              ? 'border-ink bg-white hover:bg-retro-yellow text-ink'
              : 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={canGoPrevious && !isFlipping ? { scale: 1.05 } : {}}
          whileTap={canGoPrevious && !isFlipping ? { scale: 0.95 } : {}}
          onClick={goToPreviousChapter}
          disabled={!canGoPrevious || isFlipping}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Page Indicator */}
        <div className="flex items-center space-x-2">
          <span className="font-comic text-sm text-ink">
            {currentChapter + 1} / {TOTAL_CHAPTERS}
          </span>
        </div>

        {/* Next Button */}
        <motion.button
          className={`p-3 rounded-xl border-2 transition-all duration-200 focus-comic ${
            canGoNext && !isFlipping
              ? 'border-ink bg-white hover:bg-retro-yellow text-ink'
              : 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={canGoNext && !isFlipping ? { scale: 1.05 } : {}}
          whileTap={canGoNext && !isFlipping ? { scale: 0.95 } : {}}
          onClick={goToNextChapter}
          disabled={!canGoNext || isFlipping}
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
      
      {/* Keyboard hints for desktop */}
      <div className="hidden lg:block mt-2 text-center">
        <p className="text-xs text-ink/60 font-retro">
          Use ← → arrow keys or swipe to navigate
        </p>
      </div>
    </div>
  );
}