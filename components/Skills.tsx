'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Film, Sparkles, Layers, Palette } from 'lucide-react';

const skills = [
  {
    name: 'Adobe Premiere Pro',
    description: 'Professional video editing, pacing, storytelling and content assembly.',
    icon: Film,
  },
  {
    name: 'After Effects',
    description: 'Motion graphics, visual effects, transitions and animation.',
    icon: Sparkles,
  },
  {
    name: 'CapCut',
    description: 'Fast-paced short-form and social media content editing.',
    icon: Layers,
  },
  {
    name: 'DaVinci Resolve',
    description: 'Color grading and professional video finishing.',
    icon: Palette,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cinematic-dark/40" />

      {/* Subtle grid */}
      <div className="absolute inset-0 cinematic-grid opacity-10" />

      {/* Red glow accent */}
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cinematic-accent/10 rounded-full blur-[150px]"
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-cinematic-accent text-sm font-semibold uppercase tracking-widest">
            Expertise
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4"
          >
            Tools & <span className="text-cinematic-accent">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-cinematic-text-muted mt-4 max-w-2xl mx-auto text-sm md:text-base"
          >
            Professional tools and creative expertise to bring your vision to life.
          </motion.p>
        </motion.div>

        {/* Premium Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -6,
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-1 bg-gradient-to-r from-cinematic-accent/25 to-cinematic-accent/5 rounded-2xl blur-xl transition-opacity duration-500"
              />

              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-2xl glass border border-white/5 group-hover:border-cinematic-accent/30 transition-all duration-500 h-full flex items-center gap-5 md:gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-cinematic-accent/10 flex items-center justify-center shrink-0 group-hover:bg-cinematic-accent/20 transition-colors duration-300"
                  style={{
                    boxShadow: '0 0 25px rgba(255, 45, 45, 0.1)'
                  }}
                >
                  <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-cinematic-accent" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-cinematic-accent transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-cinematic-text-muted text-sm md:text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-cinematic-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
