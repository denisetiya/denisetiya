import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Skills = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'C++' },
        { name: 'HTML' },
        { name: 'CSS' }
      ]
    },
    {
      title: t('skills.frameworks'),
      skills: [
        { name: 'React' },
        { name: 'Svelte' },
        { name: 'Express' },
        { name: 'NestJS' },
        { name: 'Hono' },
        { name: 'Django' }
      ]
    },
    {
      title: t('skills.databases'),
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'Firebase' }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Node.js' },
        { name: 'Bun' },
        { name: 'Docker' },
        { name: 'Git' },
        { name: 'VS Code' },
        { name: 'Postman' },
        { name: 'ApiDog' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background parallax elements - Enhanced */}
      <div 
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.0005})`
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.15}deg) scale(${1 + scrollY * 0.0003})`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-600/5 dark:to-blue-600/5 rounded-full blur-3xl"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
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
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
            {t('skills.tech_title')}
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              'TypeScript', 'JavaScript', 'Python', 'React', 'Svelte', 'Express', 'NestJS', 'Hono',
              'Node.js', 'Bun', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'VS Code', 'Firebase'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
