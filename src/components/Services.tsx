import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLayerGroup, FaLaptopCode, FaExchangeAlt } from 'react-icons/fa';
import { services } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

// Mapping string keys to imported react-icons
const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaLaptopCode,
  FaExchangeAlt,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            My <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || FaCode;
            return (
              <motion.div
                key={idx}
                variants={fadeIn('up', idx * 0.1)}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-8 rounded-3xl glass-card border border-slate-200/50 dark:border-white/5 flex flex-col items-start text-left relative group overflow-hidden"
              >
                {/* Floating blur ring inside card */}
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="p-4 rounded-2xl bg-linear-to-br from-violet-500/10 to-cyan-400/10 text-violet-500 dark:text-violet-400 border border-violet-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-display font-bold text-slate-800 dark:text-gray-100 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base font-sans leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
