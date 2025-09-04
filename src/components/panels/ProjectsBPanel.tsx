'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Clock } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { staggerContainer, speechBubbleVariants } from '@/lib/framer';

export function ProjectsBPanel() {
  const remainingProjects = PROJECTS.filter(project => !project.featured);

  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-retro-yellow/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-retro-red/20 rounded-full blur-xl" />
      
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
          <h2 className="font-comic text-5xl lg:text-6xl text-ink mb-4">
            More Projects
          </h2>
          <div className="w-32 h-1 bg-retro-blue mx-auto rounded-full mb-4" />
          <p className="font-retro text-lg text-ink/80 max-w-2xl mx-auto">
            Additional projects and exciting developments coming soon
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {remainingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/90 comic-border comic-shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={speechBubbleVariants}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-retro-yellow/20 to-retro-blue/20 flex items-center justify-center relative">
                <div className="text-6xl opacity-50">
                  {project.category === 'ai' ? '🤖' : 
                   project.category === 'web' ? '🌐' : 
                   project.category === 'mobile' ? '📱' : '🛠️'}
                </div>
                {project.id.includes('placeholder') && (
                  <div className="absolute top-4 right-4 bg-retro-yellow text-ink px-2 py-1 rounded-full text-xs font-retro flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Coming Soon
                  </div>
                )}
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-comic text-xl text-ink">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-retro ${
                    project.category === 'ai' ? 'bg-purple-100 text-purple-800' :
                    project.category === 'web' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'mobile' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
                
                <p className="font-retro text-sm text-ink/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-retro-blue/30 border border-retro-blue rounded text-xs font-retro text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-retro text-gray-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-retro-red text-white rounded-lg text-sm font-retro hover:bg-retro-red-light transition-colors focus-comic"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  
                  {project.repoUrl && project.repoUrl !== '#' && (
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-ink text-white rounded-lg text-sm font-retro hover:bg-ink-light transition-colors focus-comic"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                  
                  {project.id.includes('placeholder') && (
                    <div className="flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-retro cursor-not-allowed">
                      <Clock className="w-4 h-4" />
                      In Development
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future projects section */}
        <motion.div
          className="mt-12 bg-white/80 comic-border comic-shadow-lg rounded-2xl p-8"
          variants={speechBubbleVariants}
        >
          <h3 className="font-comic text-3xl text-ink mb-6 text-center">
            What&apos;s Next?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-retro text-lg font-semibold text-ink">
                Upcoming Projects:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-red rounded-full" />
                  <span className="font-retro text-sm text-ink">Advanced AI Chatbot Platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-blue rounded-full" />
                  <span className="font-retro text-sm text-ink">Real-time Collaboration Tool</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-yellow rounded-full" />
                  <span className="font-retro text-sm text-ink">Mobile App with React Native</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-retro text-lg font-semibold text-ink">
                Learning Goals:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-red rounded-full" />
                  <span className="font-retro text-sm text-ink">Advanced Machine Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-blue rounded-full" />
                  <span className="font-retro text-sm text-ink">Cloud Architecture (AWS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-yellow rounded-full" />
                  <span className="font-retro text-sm text-ink">Blockchain Development</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-4xl"
        animate={{ rotate: [0, 25, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      >
        🔮
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-5xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        ⚡
      </motion.div>
    </div>
  );
}