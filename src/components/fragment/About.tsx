import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, User } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useState } from 'react';
import profile from '../../assets/profile.jpeg'


const About = () => {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Svelte, TypeScript, JavaScript'
    },
    {
      icon: Globe,
      title: 'Backend Development',
      description: 'Node.js, Express, NestJS, Hono'
    },
    {
      icon: Smartphone,
      title: 'Database Management',
      description: 'PostgreSQL, MongoDB, MySQL, Firebase'
    },
    {
      icon: Palette,
      title: 'Tools & Platforms',
      description: 'Docker, Git, VS Code, Bun, Postman'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Main photo */}
              {!imageError ? (
                <motion.img 
                  src={profile} 
                  alt="Denisetiya Profile" 
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl relative z-10 border-4 border-white dark:border-gray-100" 
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <motion.div 
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 shadow-2xl relative z-10 border-4 border-white dark:border-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <User className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                </motion.div>
              )}
              
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-blue-300/30 animate-ping animation-delay-1000"></div>
              <div className="absolute -inset-4 rounded-full border border-purple-400/20 dark:border-purple-300/20 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 px-4 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {t('hero.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {t('about.description2')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {t('about.description3')}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {skill.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
