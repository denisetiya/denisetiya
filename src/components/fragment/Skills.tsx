/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Skills = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useScrollAnimation({ once: false });

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
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background parallax elements - Enhanced */}
      <div 
        className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.0005})`
        }}
      />
      <div 
        className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.15}deg) scale(${1 + scrollY * 0.0003})`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-600/5 dark:to-blue-600/5 rounded-full blur-3xl"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-200">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {t('skills.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              {t('skills.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const categoryRef = useScrollAnimation({ once: false });
            return (
              <div
                key={category.title}
                ref={categoryRef as React.RefObject<HTMLDivElement>}
                className="animate-fade-up"
                style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
                    {category.title}
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    {category.skills.map((skill, skillIndex) => {
                      const skillRef = useScrollAnimation({ once: false });
                      return (
                        <div
                          key={skill.name}
                          ref={skillRef as React.RefObject<HTMLDivElement>}
                          className="animate-fade-left"
                          style={{ transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                        >
                          <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 hover:translate-x-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {skill.name}
                              </span>
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Icons Grid */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-10 px-4">
            {t('skills.tech_title')}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {[
              'TypeScript', 'JavaScript', 'Python', 'React', 'Svelte', 'Express', 'NestJS', 'Hono',
              'Node.js', 'Bun', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'VS Code', 'Firebase'
            ].map((tech, index) => {
              const techRef = useScrollAnimation({ once: false });
              return (
                <div
                  key={tech}
                  ref={techRef as React.RefObject<HTMLDivElement>}
                  className="animate-scale"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 hover:-translate-y-1">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                      {tech}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
