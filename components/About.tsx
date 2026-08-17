'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap, Users, Globe } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Award, title: 'Quality First', desc: 'Premium editing focused on clean and engaging content.' },
    { icon: Zap, title: 'Fast Delivery', desc: 'Reliable turnaround while maintaining editing quality.' },
    { icon: Users, title: 'Client-Focused', desc: 'Your vision, my craft.' },
    { icon: Globe, title: 'Remote-Ready', desc: 'Available for remote projects and collaborations.' },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cinematic-gradient-bottom opacity-30" />
        <div className="absolute inset-0 cinematic-grid opacity-30" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-sm md:max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-cinematic-accent/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 md:inset-6 rounded-full border border-white/10"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 md:inset-12 rounded-full border border-cinematic-accent/10"
              />

              {/* Central glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-16 md:inset-20 rounded-full bg-cinematic-accent/10 blur-2xl"
              />

              {/* Central content */}
              <div className="absolute inset-12 md:inset-16 rounded-full glass-dark flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-cinematic-accent text-glow">2+</div>
                  <div className="text-xs md:text-sm text-cinematic-text-muted mt-2">Years of Experience</div>
                </motion.div>
              </div>

              {/* Floating icons */}
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute glass p-2.5 md:p-3 rounded-xl shadow-glow"
                  style={{
                    top: `${15 + (index % 2) * 70}%`,
                    left: index < 2 ? '-3%' : 'auto',
                    right: index >= 2 ? '-3%' : 'auto',
                  }}
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-cinematic-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-cinematic-accent text-sm font-semibold uppercase tracking-widest"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              I&apos;m Nitin Basod
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-cinematic-text-muted leading-relaxed text-sm md:text-base"
            >
              <p>
                I&apos;m Nitin Basod, a video editor specializing in YouTube videos, Shorts, Gaming Content and Social Media Content.
              </p>
              <p>
                I focus on pacing, storytelling, audience retention, sound design and visual effects to turn raw footage into engaging content.
              </p>
              <p className="text-white/80 font-medium">
                My goal is simple: create content that looks good, feels engaging and keeps viewers watching.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8"
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-3 md:p-4 rounded-xl glass card-glow-hover transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-cinematic-accent mb-1.5 md:mb-2" />
                  <div className="text-white font-semibold text-sm md:text-base">{item.title}</div>
                  <div className="text-xs text-cinematic-text-muted">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
