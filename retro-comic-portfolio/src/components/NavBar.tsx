'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CHAPTERS } from '@/lib/chapters';
import { navHighlightVariants } from '@/lib/framer';
import { usePageState } from './providers/PageStateProvider';

interface NavBarProps {
  currentChapter: number;
}

export function NavBar({ currentChapter }: NavBarProps) {
  const { goToChapter, isFlipping } = usePageState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (chapterId: number) => {
    if (!isFlipping) {
      goToChapter(chapterId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-ink">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="font-comic text-2xl text-ink"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hakkan Parbej Shah
            </motion.div>
            
            {/* Navigation Links */}
            <div className="flex space-x-1">
              {CHAPTERS.map((chapter) => (
                <motion.button
                  key={chapter.id}
                  className={`px-4 py-2 rounded-lg font-retro text-sm transition-all duration-200 focus-comic ${
                    chapter.id === currentChapter
                      ? 'bg-retro-red text-white'
                      : 'text-ink hover:bg-retro-yellow'
                  }`}
                  variants={navHighlightVariants}
                  initial="inactive"
                  animate={chapter.id === currentChapter ? 'active' : 'inactive'}
                  whileHover="hover"
                  onClick={() => handleNavClick(chapter.id)}
                  disabled={isFlipping}
                >
                  {chapter.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-ink">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <motion.div
            className="font-comic text-lg text-ink"
            whileTap={{ scale: 0.95 }}
          >
            Hakkan Parbej Shah
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 rounded-lg border-2 border-ink bg-white comic-shadow focus-comic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-ink" />
            ) : (
              <Menu className="w-6 h-6 text-ink" />
            )}
          </motion.button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white border-b-4 border-ink shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-2 space-y-1">
                {CHAPTERS.map((chapter) => (
                  <motion.button
                    key={chapter.id}
                    className={`w-full text-left px-4 py-3 rounded-lg font-retro text-sm transition-all duration-200 focus-comic ${
                      chapter.id === currentChapter
                        ? 'bg-retro-red text-white'
                        : 'text-ink hover:bg-retro-yellow'
                    }`}
                    whileHover={{ x: 4 }}
                    onClick={() => handleNavClick(chapter.id)}
                    disabled={isFlipping}
                  >
                    <span className="mr-2">{chapter.icon}</span>
                    {chapter.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-16 lg:h-20" />
    </>
  );
}