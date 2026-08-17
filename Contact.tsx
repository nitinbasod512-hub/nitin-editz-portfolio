'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Instagram, Send, MessageCircle, ExternalLink } from 'lucide-react';

const projectTypes = [
  'YouTube Video',
  'Shorts / Reels',
  'Gaming Video',
  'Cinematic Video',
  'Social Media Content',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Video Editing Project - ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hi Nitin,

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}

Best regards,
${formData.name}`
    );

    window.location.href = `mailto:nitinbasod512@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-accent/5 via-transparent to-cinematic-accent/5" />
        <div className="absolute inset-0 cinematic-grid opacity-20" />

        {/* Red glow */}
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cinematic-accent/10 rounded-full blur-[100px]"
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-cinematic-accent text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            Let&apos;s <span className="text-cinematic-accent">Work Together</span>
          </h2>
          <p className="text-cinematic-text-muted mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind? I&apos;d love to hear about it. Get in touch and let&apos;s
            create something engaging together.
          </p>
          <p className="text-cinematic-text-muted mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Available for freelance, remote and full-time video editing opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4 md:space-y-5"
          >
            {/* Email */}
            <motion.a
              href="mailto:nitinbasod512@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="block p-4 md:p-5 rounded-2xl glass card-glow card-glow-hover transition-all group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-cinematic-accent/10 flex items-center justify-center group-hover:bg-cinematic-accent/20 transition-colors">
                  <Mail className="w-5 h-5 md:w-5 md:h-5 text-cinematic-accent" />
                </div>
                <div>
                  <div className="text-xs text-cinematic-text-muted mb-0.5">Email</div>
                  <div className="text-white font-medium group-hover:text-cinematic-accent transition-colors text-sm md:text-base">
                    nitinbasod512@gmail.com
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/nitin__.editz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block p-4 md:p-5 rounded-2xl glass card-glow card-glow-hover transition-all group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-cinematic-accent/10 flex items-center justify-center group-hover:bg-cinematic-accent/20 transition-colors">
                  <Instagram className="w-5 h-5 md:w-5 md:h-5 text-cinematic-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-cinematic-text-muted mb-0.5">Instagram</div>
                  <div className="text-white font-medium group-hover:text-cinematic-accent transition-colors text-sm md:text-base">
                    @nitin__.editz
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-cinematic-text-muted group-hover:text-cinematic-accent transition-colors" />
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919098606448"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block p-4 md:p-5 rounded-2xl glass card-glow card-glow-hover transition-all group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-cinematic-accent/10 flex items-center justify-center group-hover:bg-cinematic-accent/20 transition-colors">
                  <MessageCircle className="w-5 h-5 md:w-5 md:h-5 text-cinematic-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-cinematic-text-muted mb-0.5">WhatsApp</div>
                  <div className="text-white font-medium group-hover:text-cinematic-accent transition-colors text-sm md:text-base">
                    +91 9098606448
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-cinematic-text-muted group-hover:text-cinematic-accent transition-colors" />
              </div>
            </motion.a>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleEmailSubmit} className="space-y-5 md:space-y-6 p-5 md:p-8 rounded-2xl glass">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-cinematic-text-dim focus:outline-none focus:border-cinematic-accent/50 focus:ring-2 focus:ring-cinematic-accent/20 transition-all text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-cinematic-text-dim focus:outline-none focus:border-cinematic-accent/50 focus:ring-2 focus:ring-cinematic-accent/20 transition-all text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-white mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cinematic-accent/50 focus:ring-2 focus:ring-cinematic-accent/20 transition-all appearance-none cursor-pointer text-sm md:text-base"
                >
                  <option value="" className="bg-cinematic-dark">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-cinematic-dark">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-cinematic-text-dim focus:outline-none focus:border-cinematic-accent/50 focus:ring-2 focus:ring-cinematic-accent/20 transition-all resize-none text-sm md:text-base"
                  placeholder="Tell me about your project, timeline, references and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 md:py-4 bg-cinematic-accent hover:bg-cinematic-accent-dark text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                style={{
                  boxShadow: '0 0 30px rgba(255, 45, 45, 0.3)'
                }}
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                Send Message
              </motion.button>

              <p className="text-xs text-cinematic-text-dim text-center">
                This will open your default email app to send the message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
