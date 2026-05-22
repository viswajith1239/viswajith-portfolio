import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { developerInfo } from '../data/portfolioData';
import { fadeIn, staggerContainer, floatAnimation } from '../animations/variants';
import ProfileImg from "../assets/profile2.jpg"

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = developerInfo.role;
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Intro text col */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col text-left space-y-6"
        >
          <motion.h3
            variants={fadeIn('up', 0.1)}
            className="text-violet-500 dark:text-violet-400 font-display font-semibold tracking-widest text-lg uppercase"
          >
            Welcome to my portfolio
          </motion.h3>

          <motion.h1
            variants={fadeIn('up', 0.2)}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-none"
          >
            Hi, I'm <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">{developerInfo.name}</span>
          </motion.h1>

          <motion.h2
            variants={fadeIn('up', 0.3)}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-700 dark:text-gray-200"
          >
            A <span className="text-violet-500 dark:text-violet-400 font-mono underline decoration-cyan-400 decoration-2 underline-offset-4">{developerInfo.role}</span>
            <span className="animate-pulse text-violet-500">|</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            className="text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-xl font-sans"
          >
            {developerInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 cursor-pointer rounded-full font-display font-medium text-sm text-white bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 glow-btn-purple transition-all duration-300 flex items-center gap-2"
            >
              View Projects <FiArrowRight size={16} />
            </button>

            <a
              href={developerInfo.resumeUrl}
              download="Viswajith_KK_Resume.pdf"
              className="px-6 py-3.5 rounded-full font-display font-medium text-sm text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 hover:border-violet-500 hover:bg-violet-500/5 dark:hover:border-violet-400/50 dark:hover:bg-violet-400/5 transition-all duration-300 flex items-center gap-2"
            >
              Download Resume <FiDownload size={16} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex items-center space-x-4 pt-6"
          >
            <a
              href={developerInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:text-violet-500 hover:border-violet-500 transition-all duration-300 text-slate-600 dark:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={developerInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:text-violet-500 hover:border-violet-500 transition-all duration-300 text-slate-600 dark:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={developerInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:text-violet-500 hover:border-violet-500 transition-all duration-300 text-slate-600 dark:text-gray-400"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} />
            </a>
            <a
              href={developerInfo.socials.email}
              className="p-3 rounded-full glass-card hover:text-violet-500 hover:border-violet-500 transition-all duration-300 text-slate-600 dark:text-gray-400"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Avatar Illustration col */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Neon spinning background borders */}
          <div className="absolute w-70 h-70 sm:w-90 sm:h-90 rounded-full border border-dashed border-violet-500/30 animate-spin-slow pointer-events-none" />
          <div className="absolute w-77.5 h-77.5 sm:w-100 sm:h-100 rounded-full border border-dotted border-cyan-400/20 animate-spin-slow [animation-direction:reverse] pointer-events-none" />

          {/* Floating graphic element */}
          <motion.div
            variants={floatAnimation(4.5)}
            animate="animate"
            className="w-60 h-60 sm:w-[320px] sm:h-80 rounded-full relative z-10 p-1 bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400"
          >
            <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden relative">
              {/* Premium Vector Avatar Content */}
              <img
                src={ProfileImg}
                alt="Viswajith K K"
                className="w-full h-full object-cover rounded-full"
              />

              {/* Floating inner glow orb */}
              <div className="absolute inset-0 bg-radial from-violet-600/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating tech badges */}
          <motion.div
            variants={floatAnimation(3.5, 0.5)}
            animate="animate"
            className="absolute top-1/4 -left-4 z-20 px-3 py-1.5 glass-card rounded-full font-mono text-xs font-semibold text-violet-400 flex items-center gap-1.5 shadow-lg shadow-black/20"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            React.js
          </motion.div>

          <motion.div
            variants={floatAnimation(4, 1.2)}
            animate="animate"
            className="absolute bottom-1/4 -right-4 z-20 px-3 py-1.5 glass-card rounded-full font-mono text-xs font-semibold text-cyan-400 flex items-center gap-1.5 shadow-lg shadow-black/20"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Node.js
          </motion.div>

          <motion.div
            variants={floatAnimation(3.8, 1)}
            animate="animate"
            className="absolute top-1/4 -right-4 z-20 px-3 py-1.5 glass-card rounded-full font-mono text-xs font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg shadow-black/20"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Express.js
          </motion.div>

          <motion.div
            variants={floatAnimation(3, 0.8)}
            animate="animate"
            className="absolute -bottom-2 left-1/4 z-20 px-3 py-1.5 glass-card rounded-full font-mono text-xs font-semibold text-blue-400 flex items-center gap-1.5 shadow-lg shadow-black/20"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            MongoDB
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
