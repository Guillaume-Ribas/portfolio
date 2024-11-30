import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, Database, Layout, Server } from 'lucide-react';
import Section from '../ui/Section';
import { fadeInUp } from '../../utils/animations';

export default function About() {
  const { translations } = useLanguage();

  const skills = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Frontend',
      items: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Twig']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend',
      items: ['Node.js', 'Symfony', 'Laravel', 'PHP']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database',
      items: ['MariaDB', 'Supabase']
    }
  ];

  return (
    <Section id="about" title={translations.about.title}>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          {translations.about.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-xl p-5 shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
              <ul className={`grid ${skill.items.length > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 gap-y-2`}>
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:bg-purple-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}