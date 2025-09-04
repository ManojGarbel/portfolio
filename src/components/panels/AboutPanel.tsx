'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, speechBubbleVariants } from '@/lib/framer';
import { PERSONAL_INFO } from '@/lib/data';

export function AboutPanel() {
  const highlights = [
    'Innovative and detail-oriented B.Tech CSE student',
    'Passionate about building impactful web applications',
    'Experienced in frontend & backend development',
    'AI integration and UI/UX design expertise',
    'Skilled at leading teams and solving complex problems',
    'Delivers high-quality solutions under deadlines'
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-retro-blue/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-retro-yellow/20 rounded-full blur-xl" />
      
      <motion.div
        className="max-w-4xl mx-auto"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-retro-red mx-auto rounded-full" />
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio section */}
          <motion.div
            className="space-y-6"
            variants={speechBubbleVariants}
          >
            <div className="speech-bubble">
              <p className="font-retro text-base lg:text-lg text-ink leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>
            
            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white/50 rounded-lg border-2 border-ink/20"
                  variants={speechBubbleVariants}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="w-2 h-2 bg-retro-red rounded-full mt-2 flex-shrink-0" />
                  <p className="font-retro text-sm lg:text-base text-ink">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual elements */}
          <motion.div
            className="space-y-6"
            variants={speechBubbleVariants}
          >
            {/* Skills preview */}
            <div className="bg-white/80 comic-border comic-shadow-lg p-6 rounded-2xl">
              <h3 className="font-comic text-2xl text-ink mb-4">Quick Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AI/ML'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-retro-yellow/30 border-2 border-retro-yellow rounded-lg p-2 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="font-retro text-sm font-medium text-ink">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="bg-white/80 comic-border comic-shadow-lg p-6 rounded-2xl">
              <h3 className="font-comic text-2xl text-ink mb-4">Fun Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <p className="font-retro text-sm text-ink">
                    Loves solving complex problems with creative solutions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <p className="font-retro text-sm text-ink">
                    Always learning new technologies and frameworks
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤝</span>
                  <p className="font-retro text-sm text-ink">
                    Enjoys collaborating and mentoring team members
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          variants={speechBubbleVariants}
        >
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="font-retro text-base lg:text-lg text-ink">
              Ready to see what I&apos;ve built? Let&apos;s explore my projects and see how 
              I turn ideas into reality through code! 🎨✨
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-4xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      >
        💡
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      >
        ⚡
      </motion.div>
    </div>
  );
}