'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Eye, Heart } from 'lucide-react';

type Category =
  | 'Tech'
  | 'Real Estate'
  | 'Viral / Trend'
  | 'Short-form Content'
  | 'Event';

const categories: Category[] = [
  'Tech',
  'Real Estate',
  'Viral / Trend',
  'Short-form Content',
  'Event',
];

const filterLabels = ['All', ...categories] as const;

interface Project {
  id: number;
  title: string;
  category: Category;
  description?: string;
  videoUrl: string;
  thumbnail: string;
  instagramUrl?: string;
  stats?: { views: string; likes: string };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Tech Video Edit',
    category: 'Tech',
    description:
      'Fast-paced tech content with clean visuals, engaging pacing, motion graphics and sound design.',
    thumbnail:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/so_2,w_600,h_1067,c_fill/v1786825720/tech_vidoe_edit.jpg',
    videoUrl:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/v1786825720/tech_vidoe_edit.mp4',
  },
  {
    id: 2,
    title: 'Real Estate Video',
    category: 'Real Estate',
    description:
      'Cinematic real estate editing focused on smooth pacing, clean transitions, visual presentation and premium storytelling.',
    thumbnail:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/so_2,w_600,h_1067,c_fill/v1786825888/Real_Estate_Video.jpg',
    videoUrl:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/v1786825888/Real_Estate_Video.mp4',
  },
  {
    id: 3,
    title: 'Viral Reel',
    category: 'Viral / Trend',
    description:
      'High-performing short-form content showcasing fast-paced editing, storytelling, sound design and visual effects.',
    thumbnail:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/so_2,w_600,h_1067,c_fill/v1786825880/Viral_Reel.jpg',
    videoUrl:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/v1786825880/Viral_Reel.mp4',
    instagramUrl:
      'https://www.instagram.com/reel/DbLBEPRJW8h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    stats: { views: '750K+ Views', likes: '100K+ Likes' },
  },
  {
    id: 4,
    title: 'Head Talking Video',
    category: 'Short-form Content',
    description:
      'Engaging talking-head content with clean cuts, captions, pacing, sound design and supporting visuals.',
    thumbnail:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/so_2,w_600,h_1067,c_fill/v1786825883/Head_Talking_Video.jpg',
    videoUrl:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/v1786825883/Head_Talking_Video.mp4',
  },
  {
    id: 5,
    title: 'Baby Birthday Reel',
    category: 'Event',
    description:
      'Emotional event storytelling with cinematic shots, music synchronization, smooth transitions and creative pacing.',
    thumbnail:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/so_2,w_600,h_1067,c_fill/v1786825853/Baby_Birthday_Reel.jpg',
    videoUrl:
      'https://res.cloudinary.com/c0hfzzgd/video/upload/v1786825853/Baby_Birthday_Reel.mp4',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [playingProject, setPlayingProject] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterChange = (label: string) => {
    setActiveFilter(label);
    setPlayingProject(null);
  };

  const handlePlayClick = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project?.videoUrl) {
      setPlayingProject(projectId);
    }
  };

  return (
    <section id="portfolio" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cinematic-dark/30" />
      <div className="absolute inset-0 cinematic-grid opacity-20" />

      {/* Red glow accent */}
      <motion.div
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cinematic-accent/10 rounded-full blur-[100px]"
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-cinematic-accent text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            Featured <span className="text-cinematic-accent">Work</span>
          </h2>
          <p className="text-cinematic-text-muted mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A selection of my video editing work across different content styles and industries.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14"
        >
          {filterLabels.map((label) => (
            <motion.button
              key={label}
              onClick={() => handleFilterChange(label)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === label
                  ? 'bg-cinematic-accent text-white'
                  : 'bg-white/5 text-cinematic-text-muted hover:bg-white/10 hover:text-white'
              }`}
              style={activeFilter === label ? { boxShadow: '0 0 20px rgba(255, 45, 45, 0.4)' } : {}}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid — all cards 9:16 vertical */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-start justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handlePlayClick(project.id)}
                className="group relative aspect-[9/16] w-full max-w-[280px] md:max-w-[300px] rounded-xl overflow-hidden cursor-pointer select-none touch-manipulation"
              >
                {playingProject === project.id && project.videoUrl ? (
                  <video
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    src={project.videoUrl}
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Cinematic dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/50 to-cinematic-black/20 opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                    {/* Red glow on hover */}
                    <motion.div
                      animate={{
                        opacity: hoveredProject === project.id ? 0.2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-cinematic-accent/10 pointer-events-none"
                    />

                    {/* Border glow */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-cinematic-accent/40 transition-colors duration-300 pointer-events-none" />

                    {/* Play Button — always visible on mobile, hover-driven on desktop */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 min-w-[44px] min-h-[44px] rounded-full bg-cinematic-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110 opacity-80 md:opacity-0 md:group-hover:opacity-100"
                        style={{
                          boxShadow:
                            '0 0 30px rgba(255, 45, 45, 0.5), 0 0 60px rgba(255, 45, 45, 0.3)',
                        }}
                      >
                        <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 pointer-events-none">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-1 px-2 md:px-3 py-1 rounded-md bg-cinematic-accent/20 backdrop-blur-sm text-cinematic-accent text-xs font-medium mb-2">
                        {project.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-semibold text-base md:text-lg group-hover:text-cinematic-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      {project.description && (
                        <p className="text-cinematic-text-muted text-xs md:text-sm mt-1 line-clamp-2">
                          {project.description}
                        </p>
                      )}

                      {/* Stats */}
                      {project.stats && (
                        <div className="flex items-center gap-3 md:gap-4 mt-2">
                          <span className="flex items-center gap-1 text-cinematic-accent text-xs font-medium">
                            <Eye className="w-3 h-3" />
                            {project.stats.views}
                          </span>
                          <span className="flex items-center gap-1 text-cinematic-accent text-xs font-medium">
                            <Heart className="w-3 h-3" />
                            {project.stats.likes}
                          </span>
                        </div>
                      )}

                      {project.instagramUrl && (
                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center mt-3 px-3 py-1.5 rounded-md bg-white/10 text-white text-xs font-medium transition-colors duration-300 hover:bg-cinematic-accent hover:text-white pointer-events-auto"
                        >
                          View on Instagram
                        </a>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 md:mt-14"
        >
          <p className="text-cinematic-text-muted text-sm md:text-base">
            Want to see more?{' '}
            <a href="#contact" className="text-cinematic-accent hover:underline">
              Contact me
            </a>{' '}
            for a full portfolio showcase.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
