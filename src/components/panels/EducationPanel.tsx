'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { EDUCATION } from '@/lib/data';
import { staggerContainer, speechBubbleVariants } from '@/lib/framer';

export function EducationPanel() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-28 h-28 bg-retro-yellow/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-retro-blue/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-retro-red/20 rounded-full blur-xl" />

      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          variants={speechBubbleVariants}
        >
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink mb-4">
            Education Journey
          </h2>
          <div className="w-32 h-1 bg-retro-blue mx-auto rounded-full mb-4" />
          <p className="font-retro text-base sm:text-lg text-ink/80 max-w-2xl mx-auto">
            My academic path and continuous learning adventure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-retro-blue/30 rounded-full" />
          
          {/* Education entries */}
          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative flex items-start gap-6"
                variants={speechBubbleVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-white comic-border comic-shadow rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-retro-blue" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/90 comic-border comic-shadow-lg rounded-2xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="font-comic text-2xl text-ink mb-2 lg:mb-0">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-retro-blue">
                      <Calendar className="w-4 h-4" />
                      <span className="font-retro text-sm">{edu.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-retro text-lg font-semibold text-ink mb-2">
                    {edu.institution}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-retro-yellow" />
                    <span className="font-retro text-base font-medium text-retro-red">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <p className="font-retro text-sm text-ink/80 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-8"
          variants={speechBubbleVariants}
        >
          {/* Current Studies */}
          <div className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-6">
            <h3 className="font-comic text-2xl text-ink mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-retro-blue" />
              Current Focus
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-retro-red rounded-full" />
                <span className="font-retro text-sm text-ink">Advanced Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-retro-blue rounded-full" />
                <span className="font-retro text-sm text-ink">Machine Learning & AI</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-retro-yellow rounded-full" />
                <span className="font-retro text-sm text-ink">Software Engineering Principles</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-retro-red rounded-full" />
                <span className="font-retro text-sm text-ink">Database Management Systems</span>
              </div>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-6">
            <h3 className="font-comic text-2xl text-ink mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-retro-yellow" />
              Key Achievements
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">🎯</span>
                <span className="font-retro text-sm text-ink">Consistent academic performance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">🚀</span>
                <span className="font-retro text-sm text-ink">Active in coding competitions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">🤝</span>
                <span className="font-retro text-sm text-ink">Team project leadership</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">💡</span>
                <span className="font-retro text-sm text-ink">Innovative project development</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-retro-blue/20 to-retro-red/20 comic-border comic-shadow-lg rounded-2xl p-6"
          variants={speechBubbleVariants}
        >
          <h3 className="font-comic text-2xl text-ink mb-4 text-center">
            📚 Learning Philosophy
          </h3>
          <div className="speech-bubble max-w-3xl mx-auto">
            <p className="font-retro text-base text-ink leading-relaxed text-center">
              I believe in continuous learning and hands-on experience. My education journey 
              combines theoretical knowledge with practical application, always staying 
              curious about new technologies and methodologies. Every project is an 
              opportunity to learn and grow! 🌱
            </p>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-8"
          variants={speechBubbleVariants}
        >
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="font-retro text-base lg:text-lg text-ink">
              Want to see my professional certifications and training? 
              Check out the next page for my credential collection! 🏆
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      >
        🎓
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      >
        📖
      </motion.div>
    </div>
  );
}