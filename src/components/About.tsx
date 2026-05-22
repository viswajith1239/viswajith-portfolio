import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            About <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Summary */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-gray-100">
              My Journey as a Full-Stack Engineer
            </h3>
            
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed font-sans">
             I am a passionate MERN Stack Developer specialized in building scalable, secure, and performant web solutions. My journey into web development began with a strong interest in modern technologies, where I learned and developed MERN Stack development skills at Brototype.
            </p>
            
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed font-sans">
             Currently, I am working as a MERN Stack Developer at Datametron, Bengaluru, focusing on developing clean APIs, structured databases, and responsive client-side interfaces. I am always eager to learn new technologies and apply best coding practices to build efficient and user-friendly applications.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 glass-card rounded-2xl border border-slate-200/50 dark:border-white/5 text-left">
                <h4 className="font-display font-semibold text-violet-600 dark:text-violet-400">Core Philosophy</h4>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Write clean, testable, and reusable code that solves business problems efficiently.</p>
              </div>
              
              <div className="p-5 glass-card rounded-2xl border border-slate-200/50 dark:border-white/5 text-left">
                <h4 className="font-display font-semibold text-cyan-600 dark:text-cyan-400">Key Interests</h4>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Full stack architecture, server optimization, responsive state-flows, and web security.</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn('left', idx * 0.1)}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 glass-card rounded-3xl text-center flex flex-col justify-center items-center relative overflow-hidden group border border-slate-200/50 dark:border-white/5"
              >
                {/* Glowing hover background indicator */}
                <div className="absolute inset-0 bg-linear-to-r from-violet-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <span className="text-4xl sm:text-5xl font-display font-black bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </span>
                
                <span className="text-sm font-sans font-medium text-slate-500 dark:text-gray-400 tracking-widest uppercase">
                  {stat.label}
                </span>

                {stat.label.toLowerCase().includes('availability') && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">Open for work</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
