'use client';

import { motion } from 'framer-motion';
import { Play, ArrowDown, Film, Scissors, Sparkles, Video } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Dark Background */}
      <div className="absolute inset-0 bg-cinematic-black">
        {/* Deep Red Glow - Behind Heading */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.2],
            opacity: [0.5, 0.8, 0.6],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-cinematic-accent/25 rounded-full blur-[150px]"
        />

        {/* Secondary glow layers */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-cinematic-accent/15 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cinematic-accent/10 rounded-full blur-[130px]"
        />

        {/* Cinematic Grid Overlay */}
        <div className="absolute inset-0 cinematic-grid opacity-30" />

        {/* Timeline-inspired horizontal lines */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.1, width: '100%' }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute top-1/3 left-0 h-px bg-gradient-to-r from-transparent via-cinematic-accent to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.08, width: '100%' }}
            transition={{ delay: 1.2, duration: 2 }}
            className="absolute top-2/3 left-0 h-px bg-gradient-to-r from-cinematic-accent/20 via-white/10 to-cinematic-accent/20"
          />
        </div>

        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-cinematic-black/30 to-cinematic-black/90" />

        {/* Noise Texture */}
        <div className="absolute inset-0 noise" />
      </div>

      {/* Cinematic Red Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-cinematic-accent/50' : 'bg-cinematic-accent/30'
            }`}
            style={{
              width: i % 4 === 0 ? '3px' : '2px',
              height: i % 4 === 0 ? '3px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(255, 45, 45, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Timeline Markers */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-cinematic-accent"
        />
        <div className="w-px h-16 bg-cinematic-accent/30" />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="w-2 h-2 rounded-full bg-cinematic-accent"
        />
        <div className="w-px h-16 bg-cinematic-accent/30" />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="w-2 h-2 rounded-full bg-cinematic-accent"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-24">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass mb-8 md:mb-14"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Film className="w-4 h-4 md:w-5 md:h-5 text-cinematic-accent" />
          </motion.div>
          <span className="text-sm md:text-base font-medium text-white/90">Freelance Video Editor</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 md:mb-10"
        >
          <span className="block">I Turn</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative inline-block my-2 md:my-3"
          >
            <span className="relative z-10 text-white">Raw Footage</span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-4 bg-cinematic-accent/30 origin-left"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-cinematic-accent origin-left"
            />
          </motion.span>
          <span className="block">Into Content People</span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-cinematic-accent block mt-1"
            style={{
              textShadow: '0 0 40px rgba(255, 45, 45, 0.6), 0 0 80px rgba(255, 45, 45, 0.4), 0 0 120px rgba(255, 45, 45, 0.2)'
            }}
          >
            Can&apos;t Stop Watching
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-cinematic-text-muted max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed px-4"
        >
          Professional Video Editor specializing in YouTube Videos, Shorts, Gaming Content,
          Social Media Content and Cinematic Storytelling.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 md:mb-24"
        >
          <motion.button
            onClick={() => scrollToSection('#portfolio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 bg-cinematic-accent text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg"
            style={{
              boxShadow: '0 0 30px rgba(255, 45, 45, 0.4), 0 0 60px rgba(255, 45, 45, 0.2)'
            }}
          >
            <Play className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            View My Work
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-cinematic-accent/50 transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg"
          >
            Hire Me
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '2+', label: 'Years Experience', icon: Film },
            { value: '100+', label: 'Projects Edited', icon: Video },
            { value: 'Fast', label: 'Turnaround', icon: Scissors },
            { value: 'Global', label: 'Remote Work', icon: Sparkles },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="group p-4 md:p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-cinematic-accent mb-3 mx-auto" />
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-cinematic-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.8 },
          y: { delay: 1.8, duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cinematic-text-muted hover:text-cinematic-accent transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
