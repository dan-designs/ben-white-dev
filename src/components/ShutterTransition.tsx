import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export function ShutterTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setDisplayChildren(children);
        setIsAnimating(false);
      }, 600); // Wait for shutter to close before changing route
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [location.pathname, children, currentPath]);

  const blades = [0, 60, 120, 180, 240, 300];

  return (
    <>
      <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex items-center justify-center" style={{ perspective: '1000px' }}>
        <motion.div 
          className="relative w-0 h-0"
          style={{ transformStyle: 'preserve-3d' }}
          initial={false}
          animate={{ rotate: isAnimating ? 0 : 90 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {blades.map((angle, i) => (
            <div
              key={i}
              className="absolute top-0 left-0"
              style={{ 
                transform: `rotate(${angle}deg) rotateY(-1deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div
                className="absolute bg-zinc-900"
                style={{
                  width: '200vmax',
                  height: '200vmax',
                  left: '-100vmax', // Center horizontally relative to the rotated container
                  top: '0',         // Top edge is at the center
                  borderTop: '2px solid #1B4332',
                  boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
                }}
                initial={false}
                animate={{ 
                  y: isAnimating ? "0vmax" : "100vmax" 
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
        </motion.div>
      </div>
      {displayChildren}
    </>
  );
}
