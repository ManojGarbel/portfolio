'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/data';
import { staggerContainer, speechBubbleVariants } from '@/lib/framer';

export function SkillsPanel() {
  const skillCategories = {
    frontend: SKILLS.filter(skill => skill.category === 'frontend'),
    backend: SKILLS.filter(skill => skill.category === 'backend'),
    database: SKILLS.filter(skill => skill.category === 'database'),
    tools: SKILLS.filter(skill => skill.category === 'tools'),
    ai: SKILLS.filter(skill => skill.category === 'ai'),
    languages: SKILLS.filter(skill => skill.category === 'languages'),
    soft: SKILLS.filter(skill => skill.category === 'soft'),
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-retro-red text-white';
      case 'advanced': return 'bg-retro-blue text-white';
      case 'intermediate': return 'bg-retro-yellow text-ink';
      case 'beginner': return 'bg-gray-200 text-gray-700';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert': return 'w-full';
      case 'advanced': return 'w-4/5';
      case 'intermediate': return 'w-3/5';
      case 'beginner': return 'w-2/5';
      default: return 'w-2/5';
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-retro-blue/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-retro-yellow/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-retro-red/20 rounded-full blur-xl" />
      
      <motion.div
        className="max-w-6xl mx-auto w-full"
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
            Skills & Power-ups
          </h2>
          <div className="w-32 h-1 bg-retro-yellow mx-auto rounded-full mb-4" />
          <p className="font-retro text-base sm:text-lg text-ink/80 max-w-2xl mx-auto">
            My technical arsenal and superpowers for building amazing applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Technical Skills */}
          <div className="space-y-6">
            {Object.entries(skillCategories).filter(([category]) => category !== 'soft').map(([category, skills]) => (
              <motion.div
                key={category}
                className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-6"
                variants={speechBubbleVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-comic text-2xl text-ink mb-4 capitalize flex items-center gap-2">
                  {category === 'ai' ? '🤖' : 
                   category === 'frontend' ? '🎨' : 
                   category === 'backend' ? '⚙️' : 
                   category === 'database' ? '🗄️' : 
                   category === 'tools' ? '🛠️' : 
                   category === 'languages' ? '💻' : '🔧'}
                  {category.replace('_', ' ')}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="bg-white/50 border-2 border-ink/20 rounded-lg p-3 hover:border-retro-blue transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-retro ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="font-retro text-sm font-medium text-ink">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className={`h-2 rounded-full transition-all duration-500 ${getLevelWidth(skill.level)} ${
                          skill.level === 'expert' ? 'bg-retro-red' :
                          skill.level === 'advanced' ? 'bg-retro-blue' :
                          skill.level === 'intermediate' ? 'bg-retro-yellow' :
                          'bg-gray-400'
                        }`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <motion.div
              className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-6"
              variants={speechBubbleVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-comic text-2xl text-ink mb-4 flex items-center gap-2">
                🤝 Soft Skills
              </h3>
              <div className="space-y-4">
                {skillCategories.soft.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="flex items-center gap-4 p-4 bg-white/50 border-2 border-ink/20 rounded-lg hover:border-retro-yellow transition-colors"
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <span className="text-3xl">{skill.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-retro text-base font-medium text-ink">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className={`h-2 rounded-full transition-all duration-500 ${getLevelWidth(skill.level)} ${
                          skill.level === 'expert' ? 'bg-retro-red' :
                          skill.level === 'advanced' ? 'bg-retro-blue' :
                          skill.level === 'intermediate' ? 'bg-retro-yellow' :
                          'bg-gray-400'
                        }`} />
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-retro ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill Summary */}
            <motion.div
              className="bg-gradient-to-br from-retro-blue/20 to-retro-red/20 comic-border comic-shadow-lg rounded-2xl p-6"
              variants={speechBubbleVariants}
            >
              <h3 className="font-comic text-2xl text-ink mb-4">
                🎯 Skill Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-retro text-sm text-ink">Frontend Development</span>
                  <span className="font-retro text-sm font-bold text-retro-blue">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-retro text-sm text-ink">Backend Development</span>
                  <span className="font-retro text-sm font-bold text-retro-yellow">Intermediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-retro text-sm text-ink">AI/ML Integration</span>
                  <span className="font-retro text-sm font-bold text-retro-red">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-retro text-sm text-ink">Problem Solving</span>
                  <span className="font-retro text-sm font-bold text-retro-red">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-retro text-sm text-ink">Team Leadership</span>
                  <span className="font-retro text-sm font-bold text-retro-blue">Advanced</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          variants={speechBubbleVariants}
        >
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="font-retro text-base lg:text-lg text-ink">
              Always learning and expanding my skill set! Check out my education 
              and certifications to see my continuous growth journey. 📚
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ rotate: [0, 30, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
      >
        ⚡
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      >
        🎯
      </motion.div>
    </div>
  );
}