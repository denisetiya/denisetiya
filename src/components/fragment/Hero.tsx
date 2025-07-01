import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

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
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.1}deg)`
          }}
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * -0.08}deg)`
          }}
        />
        <motion.div
          animate={{
            rotate: 180,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-teal-200/20 dark:from-cyan-600/15 dark:to-teal-600/15 rounded-full blur-3xl"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * -0.2}px) scale(${1 + scrollY * 0.0002})`
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`
              }}
            >
              {t('hero.greeting')}{' '}
              <span className="gradient-text">
                {t('hero.name')}
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.25}px)`
              }}
            >
              {t('hero.title')}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`
              }}
            >
              {t('hero.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { Icon: Github, href: 'https://github.com/denisetiya', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/deni-setiya-920a092a5', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:denisetiya@gmail.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              {t('hero.cta')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-500"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
