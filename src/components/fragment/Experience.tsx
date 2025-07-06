/* eslint-disable react-hooks/rules-of-hooks */
import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Experience = () => {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useScrollAnimation({ once: false });
  const statsRef = useScrollAnimation({ once: false });
  const ctaRef = useScrollAnimation({ once: false });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to calculate duration from start date to current date
  const calculateDuration = (startDate: string, current: boolean = false): string => {
    if (!current) return '';
    
    const start = new Date(startDate);
    const now = new Date();
    
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days per month
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    let duration = '';
    
    if (language === 'id') {
      if (years > 0) {
        duration += `${years} tahun`;
        if (months > 0) duration += ` ${months} bulan`;
      } else {
        duration = `${months} bulan`;
      }
    } else if (language === 'jp') {
      if (years > 0) {
        duration += `${years}年`;
        if (months > 0) duration += `${months}ヶ月`;
      } else {
        duration = `${months}ヶ月`;
      }
    } else { // English
      if (years > 0) {
        duration += `${years} yr${years > 1 ? 's' : ''}`;
        if (months > 0) duration += ` ${months} mo${months > 1 ? 's' : ''}`;
      } else {
        duration = `${months} mo${months > 1 ? 's' : ''}`;
      }
    }
    
    return duration;
  };

  // Helper function to get period text with auto-calculated duration for current positions
  const getPeriodText = (exp: {
    periodKey: string;
    current: boolean;
    startDate?: string;
  }): string => {
    const baseText = t(exp.periodKey);
    
    if (exp.current && exp.startDate) {
      const duration = calculateDuration(exp.startDate, true);
      
      if (language === 'id') {
        return baseText.replace('5 bulan', duration);
      } else if (language === 'jp') {
        return baseText.replace('5ヶ月', duration);
      } else {
        return baseText.replace('5 mos', duration);
      }
    }
    
    return baseText;
  };

  const experiences = [
    {
      companyKey: 'exp.hes.company',
      positionKey: 'exp.hes.position',
      locationKey: 'exp.hes.location',
      periodKey: 'exp.hes.period',
      descriptionKey: 'exp.hes.description',
      type: 'fulltime',
      current: true,
      startDate: '2025-03-01', // March 2025
      skills: ['TypeScript', 'MongoDB', 'Node.js', 'Express.js', 'API Development', 'Database Design', 'Server Architecture', 'Backend Development']
    },
    {
      companyKey: 'exp.uin.company',
      positionKey: 'exp.uin.position',
      locationKey: 'exp.uin.location',
      periodKey: 'exp.uin.period',
      descriptionKey: 'exp.uin.description',
      type: 'internship',
      current: false,
      skills: ['Django', 'MySQL', 'Python', 'Full Stack Development', 'Web Applications', 'Database Management', 'REST APIs', 'Frontend Integration', 'Backend Systems']
    },
    {
      companyKey: 'exp.assistant.company',
      positionKey: 'exp.assistant.position',
      locationKey: 'exp.assistant.location',
      periodKey: 'exp.assistant.period',
      descriptionKey: 'exp.assistant.description',
      type: 'parttime',
      current: false,
      skills: ['Python (Programming Language)', 'Time Management', 'Teaching', 'Mentoring']
    },
    {
      companyKey: 'exp.freelance.company',
      positionKey: 'exp.freelance.position',
      locationKey: 'exp.freelance.location',
      periodKey: 'exp.freelance.period',
      descriptionKey: 'exp.freelance.description',
      type: 'freelance',
      current: false,
      skills: ['React.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Web Development', 'Frontend Development', 'Backend Development', 'Full Stack Development']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Enhanced Background parallax elements */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 bg-green-200/20 dark:bg-green-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.08}deg) scale(${1 + scrollY * 0.0002})`
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-200/20 dark:bg-yellow-600/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * -0.06}deg) scale(${1 + scrollY * 0.0001})`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/15 to-cyan-200/15 dark:from-indigo-600/8 dark:to-cyan-600/8 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.04}deg)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef as React.RefObject<HTMLDivElement> } className="animate-fade-up animate-delay-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('experience.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const expRef = useScrollAnimation({ once: false });
            return (
              <div
                key={index}
                ref={expRef as React.RefObject<HTMLDivElement>}
                className={index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
              <div className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></div>
              
              {/* Timeline dot */}
              <div className={`absolute left-2.5 sm:left-6 top-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg ${
                exp.current 
                  ? 'bg-green-500 dark:bg-green-400 animate-pulse' 
                  : 'bg-blue-500 dark:bg-blue-400'
              }`}></div>
              
              {/* Experience card */}
              <div className="ml-12 sm:ml-20 bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                <div className="flex flex-wrap items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t(exp.positionKey)}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <Building2 size={16} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {t(exp.companyKey)}
                        </span>
                      </div>
                      {exp.current && (
                        <span className="px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs sm:text-sm font-medium animate-pulse w-fit">
                          {t('experience.current')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="flex-shrink-0" />
                    <span>{getPeriodText(exp)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="flex-shrink-0" />
                    <span>{t(exp.locationKey)}</span>
                  </div>
                </div>

                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {t(exp.descriptionKey).split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Skills used */}
                {exp.skills && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                      {t('experience.skills_used')}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience type badge */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'freelance' 
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : exp.type === 'fulltime'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : exp.type === 'internship'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                  }`}>
                    {t(`experience.type.${exp.type}`)}
                  </span>
                </div>
              </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Professional summary */}
        <div ref={statsRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-500">
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('experience.summary.title')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('experience.summary.description')}
            </p>
            
            {/* Key achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-300">{t('experience.stats.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-300">{t('experience.stats.positions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-300">{t('experience.stats.technologies')}</div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Call to action */}
        <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-700">
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('experience.cta_text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base hover:scale-105"
              >
                <span>{t('experience.cta_button')}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/deni-setiya-920a092a5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm sm:text-base hover:scale-105"
              >
                <span>{t('experience.linkedin_button')}</span>
                <ExternalLink size={16} className="sm:w-4.5 sm:h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;