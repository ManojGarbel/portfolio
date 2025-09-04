'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { staggerContainer, speechBubbleVariants } from '@/lib/framer';

export function ProjectsAPanel() {
  const featuredProjects = PROJECTS.filter(project => project.featured).slice(0, 3);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-28 h-28 bg-retro-red/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-retro-blue/20 rounded-full blur-xl" />
      
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
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-retro-red mx-auto rounded-full mb-4" />
          <p className="font-retro text-base sm:text-lg text-ink/80 max-w-2xl mx-auto">
            Here are some of my most exciting projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/90 comic-border comic-shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={speechBubbleVariants}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-retro-blue/20 to-retro-red/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">
                  {project.category === 'ai' ? '🤖' : 
                   project.category === 'web' ? '🌐' : 
                   project.category === 'mobile' ? '📱' : '🛠️'}
                </div>
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
                      className="px-2 py-1 bg-retro-yellow/30 border border-retro-yellow rounded text-xs font-retro text-ink"
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
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-retro-blue text-white rounded-lg text-sm font-retro hover:bg-retro-blue-light transition-colors focus-comic"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          variants={speechBubbleVariants}
        >
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="font-retro text-base lg:text-lg text-ink">
              Want to see more projects? Check out the next page for additional 
              projects and future endeavors! 🚀
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        🎨
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      >
        💻
      </motion.div>
    </div>
  );
}