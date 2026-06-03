import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { timelineItems } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            History & <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-200/50 dark:border-white/5 ml-4 sm:ml-6 space-y-12">
          {timelineItems.map((item, idx) => {
            const isWork = item.type === 'experience';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10 text-left"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-4.25 top-1.5 w-8 h-8 rounded-full bg-dark-bg border border-violet-500 flex items-center justify-center text-violet-500 shadow-lg shadow-violet-500/20 z-10 transition-transform duration-300 hover:scale-110">
                  {isWork ? <FiBriefcase size={14} /> : <FiBookOpen size={14} />}
                </div>

                {/* Event Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/50 dark:border-white/5 hover:border-violet-500/30 dark:hover:border-violet-400/20 transition-all duration-300 shadow-sm relative group overflow-hidden">
                  {/* Subtle card glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-violet-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-display font-bold text-slate-800 dark:text-gray-100">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 w-fit">
                      {item.period}
                    </span>
                  </div>

                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase mb-4 inline-block hover:underline"
                  >
                    {item.companyOrInstitution}
                  </a>

                  <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
