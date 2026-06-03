import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import { useScrollActive } from '../hooks/useScrollActive';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useScrollActive(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const scrollToSection = (id: string) => {
  //   setIsOpen(false);
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const offset = 80;
  //     const bodyRect = document.body.getBoundingClientRect().top;
  //     const elementRect = element.getBoundingClientRect().top;
  //     const elementPosition = elementRect - bodyRect;
  //     const offsetPosition = elementPosition - offset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    // Close mobile menu first
    setIsOpen(false);

    // Wait until menu animation completes
    setTimeout(() => {
      const navbarHeight = 80;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }, 400); // increase timeout for mobile animation
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'glass-navbar py-3 shadow-lg'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>

          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative font-sans text-sm font-medium transition-colors duration-200 cursor-pointer py-1 ${activeSection === link.id
                  ? 'text-violet-600 dark:text-violet-400 font-semibold'
                  : 'text-slate-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 to-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Theme Toggle Button */}
            {/* <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full cursor-pointer transition-colors duration-200 text-slate-700 dark:text-gray-300 hover:bg-slate-200/50 dark:hover:bg-white/10"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button> */}
          </div>

          {/* Mobile menu and theme toggle buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full cursor-pointer transition-colors duration-200 text-slate-700 dark:text-gray-300 hover:bg-slate-200/50 dark:hover:bg-white/10"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg cursor-pointer transition-colors duration-200 text-slate-700 dark:text-gray-300 hover:bg-slate-200/50 dark:hover:bg-white/10"
              aria-label="Open Menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden glass-navbar overflow-hidden border-t border-slate-200/10 dark:border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 cursor-pointer ${activeSection === link.id
                    ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold'
                    : 'text-slate-700 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-violet-600 dark:hover:text-violet-400'
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
