import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/denisetiya',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/deni-setiya-920a092a5',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:denisetiya@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Deni<span className="text-blue-600 dark:text-blue-400">Setiya</span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating digital experiences that matter
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2025 Denisetiya. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
              <span>{t('footer.made_with')}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.div>
              <span>React {t('footer.by')} Denisetiya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
