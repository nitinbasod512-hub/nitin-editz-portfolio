'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cinematic-black"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: [0, 0.5, 0.3] }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute inset-0 bg-cinematic-gradient"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 cinematic-grid"
            />

            {/* Red glow pulse */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-cinematic-accent/20 rounded-full blur-[100px]"
            />
          </div>

          {/* Main Logo */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              {/* Glow layers */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 blur-3xl bg-cinematic-accent/30 scale-150"
              />

              {/* Text */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider relative"
              >
                <span className="text-glow text-white">Nitin</span>
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cinematic-accent ml-2 md:ml-3"
                >
                  Editz
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '150px', opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-cinematic-accent to-transparent mx-auto mt-6 md:mt-8 relative overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-white/50"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
