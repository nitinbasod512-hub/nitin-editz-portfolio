'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Youtube,
  Smartphone,
  Gamepad2,
  Film,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Youtube,
    title: 'YouTube Video Editing',
    description:
      'Professional editing for long-form YouTube content with strong pacing, storytelling and audience retention.',
    features: ['Storytelling', 'Sound Design', 'Pacing', 'Retention'],
  },
  {
    icon: Smartphone,
    title: 'Short Form Content Editing',
    description:
      'Engaging Shorts, Reels and TikToks designed with fast pacing, captions and visual effects to capture attention.',
    features: ['Quick Cuts', 'Captions', 'Effects', 'Social Media'],
  },
  {
    icon: Gamepad2,
    title: 'Gaming Video Editing',
    description:
      'Dynamic gaming videos, highlights and montages with energetic pacing, effects and music synchronization.',
    features: ['Gaming', 'Montages', 'Highlights', 'Sync Editing'],
  },
  {
    icon: Film,
    title: 'Cinematic Editing',
    description:
      'Cinematic video editing with strong visual storytelling, color grading, sound design and seamless transitions.',
    features: ['Color Grading', 'Visual Effects', 'Sound Design', 'Storytelling'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cinematic-accent/5 to-transparent" />
      </div>

      {/* Red glow accent */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cinematic-accent/10 rounded-full blur-[100px]"
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-cinematic-accent text-sm font-semibold uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            What I Can <span className="text-cinematic-accent">Do For You</span>
          </h2>
          <p className="text-cinematic-text-muted mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From raw footage to polished content that captivates audiences and drives engagement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 md:p-8 rounded-2xl glass card-glow card-glow-hover transition-all duration-500"
            >
              {/* Number badge */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 text-3xl md:text-4xl font-bold text-white/5 group-hover:text-cinematic-accent/10 transition-colors">
                0{index + 1}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-cinematic-accent/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-cinematic-accent/20 transition-colors"
              >
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-cinematic-accent" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-cinematic-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-cinematic-text-muted text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 md:px-3 py-1 text-xs rounded-lg bg-white/5 text-cinematic-text-muted"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-5 md:bottom-6 right-5 md:right-6 flex items-center gap-1 text-cinematic-accent text-xs md:text-sm"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 md:mt-16"
        >
          <p className="text-cinematic-text-muted mb-4 text-sm md:text-base">
            Need something specific? Let&apos;s discuss your project.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-cinematic-accent hover:bg-cinematic-accent-dark text-white font-semibold rounded-xl transition-all text-sm md:text-base"
            style={{ boxShadow: '0 0 30px rgba(255, 45, 45, 0.3)' }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
