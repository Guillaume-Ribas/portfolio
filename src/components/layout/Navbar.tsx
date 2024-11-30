import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollspy } from '../../hooks/useScrollspy';

export default function Navbar() {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollspy(['home', 'about', 'projects', 'contact'], 100);

  const navItems = [
    { href: '#home', label: translations.nav.home },
    { href: '#about', label: translations.nav.about },
    { href: '#projects', label: translations.nav.projects },
    { href: '#contact', label: translations.nav.contact },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient bg-300% cursor-pointer hover:scale-105 transition-transform"
          >
            Guillaume Ribas
          </motion.button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-3 py-2 rounded-lg font-medium transition-colors group
                  ${activeSection === item.href.slice(1) 
                    ? 'text-purple-400' 
                    : 'text-gray-200 hover:text-purple-400'}`}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform origin-left"
                  initial={false}
                  animate={{
                    scaleX: activeSection === item.href.slice(1) ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}

            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-3 py-1 rounded-lg bg-gray-800 text-gray-200 font-medium hover:bg-gray-700 transition-colors ml-4"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </motion.button>
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-gray-900"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg font-medium transition-colors
                    ${activeSection === item.href.slice(1)
                      ? 'text-purple-400 bg-gray-800'
                      : 'text-gray-200 hover:bg-gray-800'}`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 rounded-lg bg-gray-800 text-gray-200 font-medium"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}