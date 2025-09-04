'use client';

import { useEffect, useRef } from 'react';
import { usePageState } from './providers/PageStateProvider';

export function GestureLayer() {
  const { goToNextChapter, goToPreviousChapter, isFlipping } = usePageState();
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFlipping) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPreviousChapter();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNextChapter();
          break;
        case 'Home':
          event.preventDefault();
          // Go to first page (Cover)
          break;
        case 'End':
          event.preventDefault();
          // Go to last page (Contact)
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextChapter, goToPreviousChapter, isFlipping]);

  // Touch/Swipe navigation
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (isFlipping) return;
      
      const touch = event.touches[0];
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
      isDragging.current = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isFlipping) return;
      
      const touch = event.touches[0];
      const deltaX = touch.clientX - touchStartX.current;
      const deltaY = touch.clientY - touchStartY.current;
      
      // Check if this is a horizontal swipe (not vertical scroll)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        isDragging.current = true;
        event.preventDefault(); // Prevent scrolling
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isFlipping || !isDragging.current) return;
      
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX.current;
      const threshold = 50; // Minimum swipe distance
      
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          // Swipe right - go to previous page
          goToPreviousChapter();
        } else {
          // Swipe left - go to next page
          goToNextChapter();
        }
      }
      
      isDragging.current = false;
    };

    // Mouse drag navigation (for desktop)
    const handleMouseDown = (event: MouseEvent) => {
      if (isFlipping) return;
      
      touchStartX.current = event.clientX;
      touchStartY.current = event.clientY;
      isDragging.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isFlipping) return;
      
      const deltaX = event.clientX - touchStartX.current;
      const deltaY = event.clientY - touchStartY.current;
      
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        isDragging.current = true;
      }
    };

    const handleMouseUp = (event: MouseEvent) => {
      if (isFlipping || !isDragging.current) return;
      
      const deltaX = event.clientX - touchStartX.current;
      const threshold = 50;
      
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          goToPreviousChapter();
        } else {
          goToNextChapter();
        }
      }
      
      isDragging.current = false;
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [goToNextChapter, goToPreviousChapter, isFlipping]);

  // Click navigation on page edges
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isFlipping) return;
      
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      // const clickY = event.clientY - rect.top;
      
      // Check if click is in left or right edge (12% of width)
      const edgeThreshold = rect.width * 0.12;
      
      if (clickX < edgeThreshold) {
        // Left edge - go to previous page
        goToPreviousChapter();
      } else if (clickX > rect.width - edgeThreshold) {
        // Right edge - go to next page
        goToNextChapter();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [goToNextChapter, goToPreviousChapter, isFlipping]);

  return null; // This component doesn't render anything visible
}