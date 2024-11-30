import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { LazyImage } from '../ui/LazyImage';

export default function Hero() {
  const { translations } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <LazyImage
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000&h=1000"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-sm" />
      
      <motion.div 
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-purple-400 text-base sm:text-lg mb-4 font-medium"
        >
          {translations.hero.greeting}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient bg-300%">
            Guillaume Ribas
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {translations.hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full shadow-lg text-gray-300 hover:text-purple-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          <Button
            href="/cv.pdf"
            download
            icon={FileDown}
            className="w-full sm:w-auto"
          >
            {translations.hero.downloadCV}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}