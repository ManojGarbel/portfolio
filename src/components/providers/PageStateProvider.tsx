'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Chapter, TOTAL_CHAPTERS } from '@/lib/chapters';

interface PageState {
  currentChapter: Chapter;
  isFlipping: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
}

interface PageStateContextType extends PageState {
  setCurrentChapter: (chapter: Chapter) => void;
  setIsFlipping: (flipping: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
  setSoundEnabled: (enabled: boolean) => void;
  goToNextChapter: () => void;
  goToPreviousChapter: () => void;
  goToChapter: (chapter: Chapter) => void;
}

const PageStateContext = createContext<PageStateContextType | undefined>(undefined);

export function usePageState() {
  const context = useContext(PageStateContext);
  if (context === undefined) {
    throw new Error('usePageState must be used within a PageStateProvider');
  }
  return context;
}

interface PageStateProviderProps {
  children: ReactNode;
}

interface PageStateProviderProps {
  children: React.ReactNode;
  initialChapter?: Chapter;
}

export function PageStateProvider({ children, initialChapter }: PageStateProviderProps) {
  const [currentChapter, setCurrentChapter] = useState<Chapter>(initialChapter ?? Chapter.COVER);
  const [isFlipping, setIsFlipping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Sync currentChapter with initialChapter prop changes
  useEffect(() => {
    if (initialChapter !== undefined && initialChapter !== currentChapter) {
      setCurrentChapter(initialChapter);
    }
  }, [initialChapter]);

  // Check for reduced motion preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedSoundEnabled = localStorage.getItem('soundEnabled');
    if (savedSoundEnabled !== null) {
      setSoundEnabled(JSON.parse(savedSoundEnabled));
    }
  }, []);

  // Save sound preference to localStorage
  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  const goToNextChapter = () => {
    if (currentChapter < TOTAL_CHAPTERS - 1 && !isFlipping) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapter > 0 && !isFlipping) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const goToChapter = (chapter: Chapter) => {
    if (chapter !== currentChapter && !isFlipping) {
      setCurrentChapter(chapter);
    }
  };

  const value: PageStateContextType = {
    currentChapter,
    isFlipping,
    reducedMotion,
    soundEnabled,
    setCurrentChapter,
    setIsFlipping,
    setReducedMotion,
    setSoundEnabled,
    goToNextChapter,
    goToPreviousChapter,
    goToChapter,
  };

  return (
    <PageStateContext.Provider value={value}>
      {children}
    </PageStateContext.Provider>
  );
}
