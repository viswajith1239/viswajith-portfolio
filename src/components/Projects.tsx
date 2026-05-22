import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub,} from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

// Custom 3D Tilt Card implementation
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation (-10deg to +10deg)
    const rotateY = ((x / width) - 0.5) * 12;
    const rotateX = (0.5 - (y / height)) * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.08s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

// Premium SVG mockups representing project interfaces
const ProjectMockup: React.FC<{ type: string }> = ({ type }) => {

  switch (type) {
    
   
   

      case 'doctor':
  return (
    <div className="w-full h-48 bg-slate-950 relative flex flex-col justify-between p-3 overflow-hidden border-b border-white/5">

      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-cyan-400 font-mono">
          WECARE
        </span>

        <span className="text-[9px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full">
          Online
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">

        <div className="bg-slate-900 rounded-lg p-2 border border-cyan-500/20 flex flex-col gap-1">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
            👨‍⚕️
          </div>

          <div className="h-1.5 w-3/4 bg-slate-600 rounded" />
          <div className="h-1.5 w-1/2 bg-slate-700 rounded" />
        </div>

        <div className="bg-slate-900 rounded-lg p-2 border border-cyan-500/20 flex flex-col gap-1">
          <div className="h-6 w-full bg-slate-800 rounded" />
          <div className="h-6 w-full bg-cyan-500/20 rounded border border-cyan-500/30" />
          <div className="h-4 w-14 bg-cyan-500 rounded text-[8px]" />
        </div>

      </div>

      <div className="flex justify-between items-center text-[8px] text-slate-500">
        <span>Doctors</span>
        <span>Appointments</span>
        <span>Payments</span>
      </div>

    </div>
  );
  case 'fashion':
  return (
    <div className="w-full h-48 bg-[#111827] relative flex flex-col justify-between p-3 overflow-hidden border-b border-white/5">

      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-pink-400 font-mono">
          FASHION CLUB
        </span>

        <span className="text-[9px] bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded-full">
          Store
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">

        <div className="bg-slate-900 rounded-lg p-2 border border-pink-500/20 flex flex-col gap-1">
          <div className="h-10 w-full rounded bg-slate-800" />
          <div className="h-1.5 w-3/4 bg-slate-600 rounded" />
          <div className="h-1.5 w-1/2 bg-slate-700 rounded" />
          <div className="w-12 h-3 bg-pink-500 rounded" />
        </div>

        <div className="bg-slate-900 rounded-lg p-2 border border-pink-500/20 flex flex-col gap-1">
          <div className="flex justify-between text-[8px] text-slate-400">
            <span>Cart</span>
            <span>2 Items</span>
          </div>

          <div className="h-2 w-full bg-slate-800 rounded" />
          <div className="h-2 w-3/4 bg-slate-700 rounded" />

          <div className="mt-auto h-5 bg-pink-500 rounded" />
        </div>

      </div>

      <div className="flex justify-between text-[8px] text-slate-500">
        <span>Products</span>
        <span>Orders</span>
        <span>Payments</span>
      </div>

    </div>
  );
  case 'blog':
  return (
    <div className="w-full h-48 bg-slate-950 relative flex flex-col justify-between p-3 overflow-hidden border-b border-white/5">

      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-orange-400 font-mono">
          BLOG APP
        </span>

        <span className="text-[9px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full">
          Publish
        </span>
      </div>

      <div className="space-y-2 my-auto">

        <div className="bg-slate-900 border border-orange-500/20 rounded-lg p-2">
          <div className="h-2 w-3/4 bg-slate-700 rounded mb-2" />
          <div className="space-y-1">
            <div className="h-1.5 w-full bg-slate-800 rounded" />
            <div className="h-1.5 w-5/6 bg-slate-800 rounded" />
            <div className="h-1.5 w-2/3 bg-slate-800 rounded" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-12 h-4 rounded bg-orange-500/20 border border-orange-500/30" />
          <div className="w-12 h-4 rounded bg-slate-800" />
          <div className="w-12 h-4 rounded bg-red-500/20 border border-red-500/30" />
        </div>

      </div>

      <div className="flex justify-between text-[8px] text-slate-500">
        <span>Create</span>
        <span>Edit</span>
        <span>Delete</span>
      </div>

    </div>
  );
  case 'chat':
  return (
    <div className="w-full h-48 bg-slate-950 relative flex flex-col justify-between p-3 overflow-hidden border-b border-white/5">

      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-emerald-400 font-mono">
          CHAT APP
        </span>

        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
          Online
        </span>
      </div>

      <div className="space-y-2 my-auto">

        <div className="flex justify-start">
          <div className="bg-slate-800 rounded-lg px-3 py-2 w-24">
            <div className="h-1.5 w-16 bg-slate-600 rounded" />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-3 py-2 w-28">
            <div className="h-1.5 w-20 bg-emerald-400 rounded" />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-slate-800 rounded-lg px-3 py-2 w-20">
            <div className="h-1.5 w-14 bg-slate-600 rounded" />
          </div>
        </div>

      </div>

      <div className="flex justify-between text-[8px] text-slate-500">
        <span>Messages</span>
        <span>Realtime</span>
        <span>Users</span>
      </div>

    </div>
  );
  case 'netflix':
      return (
        <div className="w-full h-48 bg-black relative flex items-center justify-center overflow-hidden border-b border-white/5">
          {/* Mockup screen overlay */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-red-600 font-bold">NETFLIX CLONE</div>
          <div className="absolute top-2 right-2 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          </div>
          <svg viewBox="0 0 100 60" className="w-3/5 text-red-600" fill="currentColor">
            <path d="M20,10 L35,10 L35,50 L20,50 Z M65,10 L80,10 L80,50 L65,50 Z M35,10 L65,50 L80,50 L35,10 Z" />
          </svg>
          <div className="absolute bottom-2 inset-x-2 flex gap-2 overflow-hidden">
            <div className="w-8 h-10 bg-slate-800 rounded border border-red-600/30 shrink-0" />
            <div className="w-8 h-10 bg-slate-800 rounded border border-red-600/30 shrink-0" />
            <div className="w-8 h-10 bg-slate-800 rounded border border-red-600/30 shrink-0" />
            <div className="w-8 h-10 bg-slate-800 rounded border border-red-600/30 shrink-0" />
          </div>
        </div>
      );
   
    case 'olx':
      return (
        <div className="w-full h-48 bg-slate-900 relative flex flex-col justify-between p-3 overflow-hidden border-b border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-cyan-400 font-mono">OLX MARKET</span>
            <span className="text-[9px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full">Ernakulam</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-2 bg-slate-800 rounded border border-white/5 flex flex-col gap-1">
              <div className="h-7 w-full bg-slate-700 rounded" />
              <div className="h-1.5 w-3/4 bg-slate-500 rounded" />
              <span className="text-[9px] font-bold text-green-400">$240</span>
            </div>
            <div className="p-2 bg-slate-800 rounded border border-white/5 flex flex-col gap-1">
              <div className="h-7 w-full bg-slate-700 rounded" />
              <div className="h-1.5 w-1/2 bg-slate-500 rounded" />
              <span className="text-[9px] font-bold text-green-400">$1,200</span>
            </div>
          </div>
        </div>
      );
    default:
      return <div className="w-full h-48 bg-linear-to-br from-violet-600/30 to-cyan-500/30" />;
  }
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            My <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', idx * 0.15)}
            >
              <TiltCard className="h-full rounded-3xl glass-card border border-slate-200/50 dark:border-white/5 overflow-hidden flex flex-col justify-between shadow-lg relative group">
                <div>
                  {/* Visual Interface Graphic */}
                  <ProjectMockup type={project.imageType} />

                  {/* Info details */}
                  <div className="p-6 text-left space-y-4">
                    <h3 className="text-xl font-display font-bold text-slate-800 dark:text-gray-100 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 text-left space-y-5">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((techItem, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-300/30 dark:border-white/5"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* CTA link buttons */}
                  <div className="flex items-center gap-4 pt-1.5 border-t border-slate-200/50 dark:border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 text-xs font-semibold flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 text-xs font-semibold flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={13} /> Live Demo
                    </a> */}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
