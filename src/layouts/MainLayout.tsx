import React, { type ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';
import { CursorGlow } from '../components/CursorGlow';
import { ScrollProgress } from '../components/ScrollProgress';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen relative w-full overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#030014] text-gray-300' : 'bg-[#f8fafc] text-slate-700'
    }`}>
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      {/* Ambient background blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[120px] animate-float-slow-1" />
            <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px] animate-float-slow-2" />
            <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[130px] animate-float-slow-1" />
          </>
        ) : (
          <>
            <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-violet-300/30 blur-[100px] animate-float-slow-1" />
            <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-300/30 blur-[120px] animate-float-slow-2" />
            <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-300/30 blur-[110px] animate-float-slow-1" />
          </>
        )}
      </div>

      {/* Interactive Global Indicators */}
      <ScrollProgress />
      <CursorGlow />

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};
