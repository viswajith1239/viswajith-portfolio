import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaCreditCard } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiCloudinary, 
  SiJsonwebtokens 
} from 'react-icons/si';
import { skillCategories } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

// Mapping string keys to imported react-icons
const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  FaReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  FaGitAlt,
  SiCloudinary,
  FaCreditCard,
  SiJsonwebtokens,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            My <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={fadeIn('up', catIdx * 0.1)}
              className="p-6 sm:p-8 glass-card rounded-3xl border border-slate-200/50 dark:border-white/5 relative overflow-hidden group"
            >
              {/* Radial gradient background hover highlight */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-linear-to-br from-violet-600/10 to-cyan-500/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <h3 className="text-xl font-display font-bold text-slate-800 dark:text-gray-100 text-left mb-6 border-b border-slate-200/50 dark:border-white/5 pb-3">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = iconMap[skill.iconName] || FaReact;
                  return (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 text-slate-700 dark:text-gray-300">
                          <Icon className="text-violet-500 dark:text-violet-400" size={18} />
                          <span className="font-sans font-semibold text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-bold text-violet-500 dark:text-violet-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
