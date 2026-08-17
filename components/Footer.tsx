'use client';

import { motion } from 'framer-motion';
import { Play, Instagram, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-cinematic-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 text-cinematic-accent fill-current" />
            <span className="text-lg md:text-xl font-bold">
              <span className="text-white">Nitin</span>
              <span className="text-cinematic-accent">Editz</span>
            </span>
          </motion.div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs md:text-sm text-cinematic-text-muted hover:text-cinematic-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4">
            <motion.a
              href="mailto:nitinbasod512@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 md:w-10 md:h-10 rounded-lg glass flex items-center justify-center text-cinematic-text-muted hover:text-cinematic-accent transition-colors"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/nitin__.editz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 md:w-10 md:h-10 rounded-lg glass flex items-center justify-center text-cinematic-text-muted hover:text-cinematic-accent transition-colors"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 md:my-8 h-px bg-white/5" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-cinematic-text-dim">
            © 2026 Nitin Editz | Freelance Video Editor
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-10 h-10 md:w-12 md:h-12 bg-cinematic-accent text-white rounded-full shadow-glow flex items-center justify-center z-40 hover:bg-cinematic-accent-dark transition-colors"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </motion.button>
    </footer>
  );
}
