'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/data';
import { staggerContainer, speechBubbleVariants } from '@/lib/framer';

export function CertificationsPanel() {
  const getCategoryColor = (title: string) => {
    if (title.toLowerCase().includes('aws') || title.toLowerCase().includes('ai-ml')) {
      return 'bg-orange-100 border-orange-300 text-orange-800';
    }
    if (title.toLowerCase().includes('cyber') || title.toLowerCase().includes('security')) {
      return 'bg-red-100 border-red-300 text-red-800';
    }
    if (title.toLowerCase().includes('automation') || title.toLowerCase().includes('blue prism')) {
      return 'bg-blue-100 border-blue-300 text-blue-800';
    }
    if (title.toLowerCase().includes('full-stack') || title.toLowerCase().includes('bct')) {
      return 'bg-green-100 border-green-300 text-green-800';
    }
    return 'bg-purple-100 border-purple-300 text-purple-800';
  };

  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('aws') || title.toLowerCase().includes('ai-ml')) {
      return '☁️';
    }
    if (title.toLowerCase().includes('cyber') || title.toLowerCase().includes('security')) {
      return '🔒';
    }
    if (title.toLowerCase().includes('automation') || title.toLowerCase().includes('blue prism')) {
      return '🤖';
    }
    if (title.toLowerCase().includes('full-stack') || title.toLowerCase().includes('bct')) {
      return '💻';
    }
    return '🏆';
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-retro-red/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-retro-yellow/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-retro-blue/20 rounded-full blur-xl" />
      
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
            Certifications & Badges
          </h2>
          <div className="w-32 h-1 bg-retro-yellow mx-auto rounded-full mb-4" />
          <p className="font-retro text-lg text-ink/80 max-w-2xl mx-auto">
            Professional certifications and training achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              variants={speechBubbleVariants}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{getCategoryIcon(cert.title)}</div>
                  <div>
                    <h3 className="font-comic text-xl text-ink leading-tight">
                      {cert.title}
                    </h3>
                    <p className="font-retro text-sm text-ink/70">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-retro border-2 ${getCategoryColor(cert.title)}`}>
                  {cert.date}
                </div>
              </div>

              {/* Description */}
              <p className="font-retro text-sm text-ink/80 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-retro-blue">
                  <Calendar className="w-4 h-4" />
                  <span className="font-retro text-sm">Completed {cert.date}</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-retro text-sm">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Categories */}
        <motion.div
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={speechBubbleVariants}
        >
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 comic-border comic-shadow rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">☁️</div>
            <h4 className="font-comic text-lg text-orange-800">Cloud & AI</h4>
            <p className="font-retro text-sm text-orange-700">AWS, AI/ML</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-100 to-red-200 comic-border comic-shadow rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">🔒</div>
            <h4 className="font-comic text-lg text-red-800">Security</h4>
            <p className="font-retro text-sm text-red-700">Cybersecurity, Zero Trust</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 comic-border comic-shadow rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">🤖</div>
            <h4 className="font-comic text-lg text-blue-800">Automation</h4>
            <p className="font-retro text-sm text-blue-700">RPA, Intelligent Automation</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-200 comic-border comic-shadow rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">💻</div>
            <h4 className="font-comic text-lg text-green-800">Development</h4>
            <p className="font-retro text-sm text-green-700">Full-Stack, Blockchain</p>
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          className="mt-12 bg-white/90 comic-border comic-shadow-lg rounded-2xl p-8"
          variants={speechBubbleVariants}
        >
          <h3 className="font-comic text-3xl text-ink mb-6 text-center">
            🎯 Continuous Learning Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-retro text-lg font-semibold text-ink mb-4">
                Why Certifications Matter:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-red rounded-full" />
                  <span className="font-retro text-sm text-ink">Validate technical expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-blue rounded-full" />
                  <span className="font-retro text-sm text-ink">Stay updated with industry trends</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-yellow rounded-full" />
                  <span className="font-retro text-sm text-ink">Enhance professional credibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-red rounded-full" />
                  <span className="font-retro text-sm text-ink">Expand career opportunities</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-retro text-lg font-semibold text-ink mb-4">
                Next Learning Goals:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-blue rounded-full" />
                  <span className="font-retro text-sm text-ink">AWS Solutions Architect</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-red rounded-full" />
                  <span className="font-retro text-sm text-ink">Google Cloud Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-yellow rounded-full" />
                  <span className="font-retro text-sm text-ink">React Native Certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-retro-blue rounded-full" />
                  <span className="font-retro text-sm text-ink">Machine Learning Specialization</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-8"
          variants={speechBubbleVariants}
        >
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="font-retro text-base lg:text-lg text-ink">
              Ready to connect? Let&apos;s discuss how my skills and certifications 
              can contribute to your next project! 📧
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ rotate: [0, 25, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse' }}
      >
        🏆
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
      >
        ⭐
      </motion.div>
    </div>
  );
}