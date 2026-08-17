'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase, Zap, Globe } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '2+',
    label: 'Years Experience',
    description: 'Professional video editing',
  },
  {
    icon: Briefcase,
    value: '100+',
    label: 'Projects Edited',
    description: 'Successfully delivered',
  },
  {
    icon: Zap,
    value: 'Reliable',
    label: 'Delivery',
    description: 'Consistent & On-Time',
  },
  {
    icon: Globe,
    value: 'Remote Ready',
    label: 'Work',
    description: 'Available for remote projects',
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cinematic-gradient" />
        <div className="absolute inset-0 bg-cinematic-black/85" />
      </div>

      {/* Animated red accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinematic-accent/40 to-transparent"
        />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinematic-accent/20 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-cinematic-accent/10 rounded-2xl blur-xl group-hover:bg-cinematic-accent/20 transition-colors duration-500" />

                <div className="relative p-5 md:p-6 lg:p-8 rounded-2xl glass">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl bg-cinematic-accent/10 flex items-center justify-center group-hover:bg-cinematic-accent/20 transition-colors duration-300"
                  >
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-cinematic-accent" />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-0.5 md:mb-1"
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-xs md:text-sm lg:text-base font-medium text-cinematic-text-muted">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-cinematic-text-dim mt-1 hidden md:block">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
