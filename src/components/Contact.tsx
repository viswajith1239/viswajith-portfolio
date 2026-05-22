import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaPaperPlane, FaCheck } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { developerInfo } from '../data/portfolioData';
import { fadeIn } from '../animations/variants';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Invalid email address';
    }
    
    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate Email Integration (e.g. EmailJS placeholder)
    setTimeout(() => {
      console.log('Sending Form Data:', form);
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', message: '' });
      
      // Auto-clear success state after 4 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Get In <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Info cards left col */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-gray-100">
                Let's discuss a project
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base font-sans leading-relaxed">
                Whether you're looking to hire a full-time MERN developer or need freelance assistance on an interface layout, API backend, or database setup, I am ready to collaborate.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5">
                  <div className="p-3.5 rounded-xl bg-violet-500/10 text-violet-500 dark:text-violet-400 border border-violet-500/10">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Email Me</h4>
                    <a href={developerInfo.socials.email} className="text-sm sm:text-base font-sans font-semibold text-slate-700 dark:text-gray-200 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
                      viswajithkanayi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/10">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Based in</h4>
                    <span className="text-sm sm:text-base font-sans font-semibold text-slate-700 dark:text-gray-200">
                      Ernakulam, Kerala, India
                    </span>
                  </div>
                </div>

                {/* Freelance Availability */}
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/10">
                    <FaBriefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Freelance Work</h4>
                    <span className="text-sm sm:text-base font-sans font-semibold text-slate-700 dark:text-gray-200 flex items-center gap-2">
                      Available <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles bottom */}
            <div className="pt-6 border-t border-slate-200/50 dark:border-white/5 space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href={developerInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:text-violet-500 hover:border-violet-500 transition-all text-slate-600 dark:text-gray-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={developerInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:text-violet-500 hover:border-violet-500 transition-all text-slate-600 dark:text-gray-400"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={developerInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:text-violet-500 hover:border-violet-500 transition-all text-slate-600 dark:text-gray-400"
                  aria-label="LeetCode"
                >
                  <SiLeetcode size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form input fields right col */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/50 dark:border-white/5 space-y-5 relative">
              
              {/* Name */}
              <div className="flex flex-col space-y-1.5 text-left">
                <label htmlFor="name" className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 uppercase">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border text-slate-800 dark:text-white placeholder-slate-400 font-sans focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all ${
                    errors.name ? 'border-red-500/50' : 'border-slate-300/50 dark:border-white/5'
                  }`}
                />
                {errors.name && <span className="text-xs text-red-500 font-mono font-semibold">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5 text-left">
                <label htmlFor="email" className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 uppercase">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border text-slate-800 dark:text-white placeholder-slate-400 font-sans focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all ${
                    errors.email ? 'border-red-500/50' : 'border-slate-300/50 dark:border-white/5'
                  }`}
                />
                {errors.email && <span className="text-xs text-red-500 font-mono font-semibold">{errors.email}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5 text-left">
                <label htmlFor="message" className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hey Viswajith! Let's talk about building a MERN application..."
                  className={`px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border text-slate-800 dark:text-white placeholder-slate-400 font-sans focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-slate-300/50 dark:border-white/5'
                  }`}
                />
                {errors.message && <span className="text-xs text-red-500 font-mono font-semibold">{errors.message}</span>}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl font-display font-bold text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-white overflow-hidden relative ${
                  isSuccess 
                    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/20' 
                    : 'bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 glow-btn-purple'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Message...
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheck size={14} /> Message Sent Successfully!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message <FaPaperPlane size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
