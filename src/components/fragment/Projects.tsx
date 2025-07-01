import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Projects = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      titleKey: 'project.mebel.title',
      descriptionKey: 'project.mebel.desc',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center',
      tech: ['React', 'Express', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/denisetiya/mabel-store.git',
      live: 'https://github.com/denisetiya/mabel-store.git'
    },
    {
      titleKey: 'project.medisense.title',
      descriptionKey: 'project.medisense.desc',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
      tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB'],
      github: 'https://github.com/denisetiya/medisense-api.git',
      live: 'https://github.com/denisetiya/medisense-api.git'
    },
    {
      titleKey: 'project.restapi.title',
      descriptionKey: 'project.restapi.desc',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=center',
      tech: ['Express', 'TypeScript', 'JWT', 'Zod'],
      github: 'https://github.com/denisetiya/Rest-api-Template.git',
      live: 'https://github.com/denisetiya/Rest-api-Template.git'
    },
    {
      titleKey: 'project.restquick.title',
      descriptionKey: 'project.restquick.desc',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop&crop=center',
      tech: ['Node.js', 'CLI', 'TypeScript', 'NPM'],
      github: 'https://github.com/denisetiya/restquick.git',
      live: 'https://www.npmjs.com/package/restquick'
    },
    {
      titleKey: 'project.svelte.title',
      descriptionKey: 'project.svelte.desc',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=center',
      tech: ['Svelte', 'TypeScript', 'Animation', 'Library'],
      github: 'https://github.com/denisetiya/svelte-inscroll.git',
      live: 'https://www.npmjs.com/package/svelte-inscroll'
    },
    {
      titleKey: 'project.singlestore.title',
      descriptionKey: 'project.singlestore.desc',
      image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?w=600&h=400&fit=crop&crop=center',
      tech: ['Express', 'TypeScript', 'Prisma', 'MongoDB'],
      github: 'https://github.com/denisetiya/single-store-api.git',
      live: 'https://github.com/denisetiya/single-store-api.git'
    },
    {
      titleKey: 'project.qera.title',
      descriptionKey: 'project.qera.desc',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&crop=center',
      tech: ['uWebSockets.js', 'TypeScript', 'Framework', 'High-performance'],
      github: 'https://github.com/denisetiya/Qera.git',
      live: 'https://github.com/denisetiya/Qera.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background parallax elements */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.0003})`
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * -0.08}deg) scale(${1 + scrollY * 0.0002})`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-200/15 to-orange-200/15 dark:from-pink-600/8 dark:to-orange-600/8 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`
        }}
      />
      <div 
        className="absolute bottom-10 right-1/3 w-72 h-72 bg-gradient-to-r from-green-200/15 to-teal-200/15 dark:from-green-600/8 dark:to-teal-600/8 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * -0.03}deg)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLDivElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 hidden items-center justify-center"
                >
                  <span className="text-white/70 text-lg font-medium">Project Preview</span>
                </div>
                <div 
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {t(project.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {t(project.descriptionKey)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Github size={16} className="sm:w-4.5 sm:h-4.5" />
                    <span>{t('projects.view_code')}</span>
                  </motion.a>
                  {/* <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>{t('projects.view_live')}</span>
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/denisetiya"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300 text-sm sm:text-base"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span>{t('projects.view_all')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
