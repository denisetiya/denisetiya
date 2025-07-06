import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Hero = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useScrollAnimation({ once: false });
  const subtitleRef = useScrollAnimation({ once: false });
  const descRef = useScrollAnimation({ once: false });
  const socialRef = useScrollAnimation({ once: false });
  const ctaRef = useScrollAnimation({ once: false });
  const scrollIndicatorRef = useScrollAnimation({ once: false });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
        style={{
          transform: `translateY(${scrollY * 0.7}px) scale(${1 + scrollY * 0.0005})`
        }}
      />
      
      {/* Enhanced Animated background shapes with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.1}deg)`,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * -0.08}deg)`,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-teal-200/20 dark:from-cyan-600/15 dark:to-teal-600/15 rounded-full blur-3xl animate-bounce"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * -0.2}px) scale(${1 + scrollY * 0.0002})`,
            animation: 'float 30s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 md:space-y-8">
          <div ref={titleRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-300">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`
              }}
            >
              {t('hero.greeting')}{' '}
              <span className="gradient-text">
                {t('hero.name')}
              </span>
            </h1>
          </div>

          <div ref={subtitleRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-500">
            <p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2"
              style={{
                transform: `translateY(${scrollY * 0.25}px)`
              }}
            >
              {t('hero.title')}
            </p>
          </div>

          <div ref={descRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-700">
            <p 
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto px-2"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`
              }}
            >
              {t('hero.subtitle')}
            </p>
          </div>

          <div ref={socialRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-900">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {[
                { Icon: Github, href: 'https://github.com/denisetiya', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com/in/deni-setiya-920a092a5', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:denisetiya@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:-translate-y-1"
                >
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-1100">
            <div className="pt-6 md:pt-8">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base hover:scale-105">
                {t('hero.cta')}
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div ref={scrollIndicatorRef as React.RefObject<HTMLDivElement>} className="animate-fade-up animate-delay-1300">
            <div className="pt-12 md:pt-16">
              <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 animate-bounce">
                <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
                <ArrowDown size={16} className="sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
