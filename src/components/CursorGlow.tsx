import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-35 w-125 h-125 rounded-full cursor-glow-orb opacity-75"
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
        backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.12) 40%, rgba(6, 182, 212, 0) 70%)',
      }}
    />
  );
};
