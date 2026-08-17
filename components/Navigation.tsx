'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X, Play } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cinematic-black/95 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#home')}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-cinematic-accent/20 rounded blur-xl"
                />
                <Play className="w-5 h-5 md:w-6 md:h-6 text-cinematic-accent fill-current relative z-10" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">
                <span className="text-white">Nitin</span>
                <span className="text-cinematic-accent">Editz</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cinematic-accent'
                      : 'text-cinematic-text-muted hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cinematic-accent rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-cinematic-accent to-cinematic-accent-dark hover:opacity-90 text-white text-sm font-semibold rounded-lg transition-all shadow-glow"
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-cinematic-black/98 backdrop-blur-xl" />
            <motion.nav className="relative pt-20 md:pt-24 px-6 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`text-left py-4 text-xl md:text-2xl font-semibold transition-colors border-b border-white/5 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cinematic-accent'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 py-4 bg-gradient-to-r from-cinematic-accent to-cinematic-accent-dark text-white font-semibold rounded-lg text-center text-base"
              >
                Hire Me
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
