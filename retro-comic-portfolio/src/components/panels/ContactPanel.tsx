'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';
import { staggerContainer, speechBubbleVariants, actionBurstVariants } from '@/lib/framer';

export function ContactPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-retro-blue/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-retro-red/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-retro-yellow/20 rounded-full blur-xl" />
      
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
            Let&apos;s Connect!
          </h2>
          <div className="w-32 h-1 bg-retro-red mx-auto rounded-full mb-4" />
          <p className="font-retro text-lg text-ink/80 max-w-2xl mx-auto">
            Ready to collaborate? Send me a message and let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-8"
            variants={speechBubbleVariants}
          >
            <h3 className="font-comic text-2xl text-ink mb-6 flex items-center gap-2">
              <span className="text-2xl">💬</span>
              Write to the Hero
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-retro text-sm font-medium text-ink mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-ink/20 rounded-lg font-retro text-ink focus:border-retro-blue focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-retro text-sm font-medium text-ink mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-ink/20 rounded-lg font-retro text-ink focus:border-retro-blue focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-retro text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-ink/20 rounded-lg font-retro text-ink focus:border-retro-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-retro-red text-white rounded-lg font-retro font-medium hover:bg-retro-red-light transition-colors focus-comic disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={actionBurstVariants}
                initial="idle"
                animate={submitStatus === 'success' ? 'burst' : 'idle'}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Submit Status */}
            <AnimatePresence>
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-retro text-sm">Message sent successfully! 🎉</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-retro text-sm">Failed to send message. Please try again.</span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={speechBubbleVariants}
          >
            {/* Direct Contact */}
            <div className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-8">
              <h3 className="font-comic text-2xl text-ink mb-6 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3 bg-white/50 border-2 border-ink/20 rounded-lg hover:border-retro-blue transition-colors group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <Mail className="w-5 h-5 text-retro-red group-hover:text-retro-blue transition-colors" />
                  <div>
                    <p className="font-retro text-sm font-medium text-ink">Email</p>
                    <p className="font-retro text-sm text-ink/70">{CONTACT_INFO.email}</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 p-3 bg-white/50 border-2 border-ink/20 rounded-lg hover:border-retro-blue transition-colors group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <Phone className="w-5 h-5 text-retro-red group-hover:text-retro-blue transition-colors" />
                  <div>
                    <p className="font-retro text-sm font-medium text-ink">Phone</p>
                    <p className="font-retro text-sm text-ink/70">{CONTACT_INFO.phone}</p>
                  </div>
                </motion.a>
                
                <div className="flex items-center gap-3 p-3 bg-white/50 border-2 border-ink/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-retro-red" />
                  <div>
                    <p className="font-retro text-sm font-medium text-ink">Location</p>
                    <p className="font-retro text-sm text-ink/70">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/90 comic-border comic-shadow-lg rounded-2xl p-8">
              <h3 className="font-comic text-2xl text-ink mb-6 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Follow Me
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/50 border-2 border-ink/20 rounded-lg hover:border-retro-blue transition-colors group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <Github className="w-5 h-5 text-ink group-hover:text-retro-blue transition-colors" />
                  <div>
                    <p className="font-retro text-sm font-medium text-ink">GitHub</p>
                    <p className="font-retro text-sm text-ink/70">github.com/HakkanShah</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/50 border-2 border-ink/20 rounded-lg hover:border-retro-blue transition-colors group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-retro-blue transition-colors" />
                  <div>
                    <p className="font-retro text-sm font-medium text-ink">LinkedIn</p>
                    <p className="font-retro text-sm text-ink/70">linkedin.com/in/hakkan</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-retro-blue/20 to-retro-red/20 comic-border comic-shadow-lg rounded-2xl p-8">
              <h3 className="font-comic text-2xl text-ink mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-retro text-sm text-ink">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-retro text-sm text-ink">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-retro text-sm text-ink">Interested in collaboration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thank you message */}
        <motion.div
          className="text-center mt-12"
          variants={speechBubbleVariants}
        >
          <div className="speech-bubble max-w-3xl mx-auto">
            <p className="font-retro text-base lg:text-lg text-ink">
              Thank you for exploring my portfolio! Whether you&apos;re looking for a developer, 
              have a project idea, or just want to connect, I&apos;d love to hear from you. 
              Let&apos;s create something amazing together! 🚀✨
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ rotate: [0, 30, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      >
        📧
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      >
        🤝
      </motion.div>
    </div>
  );
}