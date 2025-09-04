'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '@/lib/chapters';
import { panelRevealVariants } from '@/lib/framer';
import { HeroPanel } from './panels/HeroPanel';
import { AboutPanel } from './panels/AboutPanel';
import { ProjectsAPanel } from './panels/ProjectsAPanel';
import { ProjectsBPanel } from './panels/ProjectsBPanel';
import { SkillsPanel } from './panels/SkillsPanel';
import { EducationPanel } from './panels/EducationPanel';
import { CertificationsPanel } from './panels/CertificationsPanel';
import { ContactPanel } from './panels/ContactPanel';

interface PageProps {
  chapterId: number;
}

export function Page({ chapterId }: PageProps) {
  const renderPanel = () => {
    switch (chapterId) {
      case Chapter.COVER:
        return <HeroPanel />;
      case Chapter.ABOUT:
        return <AboutPanel />;
      case Chapter.PROJECTS_A:
        return <ProjectsAPanel />;
      case Chapter.PROJECTS_B:
        return <ProjectsBPanel />;
      case Chapter.SKILLS:
        return <SkillsPanel />;
      case Chapter.EDUCATION:
        return <EducationPanel />;
      case Chapter.CERTIFICATIONS:
        return <CertificationsPanel />;
      case Chapter.CONTACT:
        return <ContactPanel />;
      default:
        return <HeroPanel />;
    }
  };

  return (
    <motion.div
      className="w-full h-full bg-paper relative overflow-hidden"
      variants={panelRevealVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Page background with texture */}
      <div className="absolute inset-0 paper-texture opacity-20" />
      <div className="absolute inset-0 halftone-overlay opacity-30" />
      
      {/* Page content */}
      <div className="relative z-10 w-full h-full">
        {renderPanel()}
      </div>
      
      {/* Page border */}
      <div className="absolute inset-0 border-4 border-ink pointer-events-none" />
      
      {/* Page number */}
      <div className="absolute bottom-4 left-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm comic-border comic-shadow px-2 py-1 rounded">
          <span className="font-comic text-xs text-ink">
            {chapterId + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
}