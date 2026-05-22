import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiArrowUp } from 'react-icons/fi';
import { developerInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full py-12 border-t border-slate-200/50 dark:border-white/5 bg-dark-bg/40 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-bold text-lg tracking-wider bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              VISWAJITH k k
            </span>
            <p className="text-xs text-slate-500 dark:text-gray-500 font-sans">
              &copy; {currentYear} Viswajith K K. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href={developerInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={developerInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={developerInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400 transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode size={18} />
            </a>
            <a
              href={developerInfo.socials.email}
              className="text-slate-500 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full cursor-pointer bg-linear-to-r from-violet-600 via-blue-500 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} className="animate-bounce" />
        </button>
      )}
    </>
  );
};
