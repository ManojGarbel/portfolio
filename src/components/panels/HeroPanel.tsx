'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '@/lib/data';
import { actionBurstVariants, speechBubbleVariants } from '@/lib/framer';

export function HeroPanel() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-retro-yellow/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-retro-red/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-retro-blue/20 rounded-full blur-xl" />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-ink mb-4 leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <motion.div
            className="font-comic-alt text-xl sm:text-2xl lg:text-3xl text-retro-red mb-6"
            variants={actionBurstVariants}
            initial="idle"
            animate="burst"
            transition={{ delay: 1 }}
          >
            {PERSONAL_INFO.title}
          </motion.div>
          <p className="font-retro text-base sm:text-lg lg:text-xl text-ink/80 max-w-2xl mx-auto">
            {PERSONAL_INFO.tagline}
          </p>
        </motion.div>

        {/* Speech bubble with intro */}
        <motion.div
          className="speech-bubble max-w-2xl mx-auto"
          variants={speechBubbleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <p className="font-retro text-base lg:text-lg text-ink leading-relaxed">
            Welcome to my retro comic portfolio! I&apos;m a passionate B.Tech CSE student 
            who loves turning creative ideas into reality through code. Explore my 
            projects, skills, and journey in the world of full-stack development.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-xl comic-shadow-lg hover:bg-ink-light transition-colors focus-comic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span className="font-retro font-medium">GitHub</span>
          </motion.a>
          
          <motion.a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-retro-blue text-white rounded-xl comic-shadow-lg hover:bg-retro-blue-light transition-colors focus-comic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-retro font-medium">LinkedIn</span>
          </motion.a>
          
          <motion.a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-retro-red text-white rounded-xl comic-shadow-lg hover:bg-retro-red-light transition-colors focus-comic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span className="font-retro font-medium">Email</span>
          </motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm text-ink/70 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="font-retro">{CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-retro">{CONTACT_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-retro">📍 {CONTACT_INFO.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative comic elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        💻
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-5xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      >
        🚀
      </motion.div>
    </div>
  );
}