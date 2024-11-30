import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, GraduationCap } from 'lucide-react';
import type { Experience, Education } from '../types';

export default function ExperienceSection() {
  const { translations } = useLanguage();

  const experiences: Experience[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Labs',
      period: '2020 - Present',
      description: [
        'Lead developer on multiple high-impact projects',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and improved deployment processes'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      period: '2018 - 2020',
      description: [
        'Developed and maintained multiple web applications',
        'Collaborated with design team to implement UI/UX improvements',
        'Optimized database queries and improved application performance'
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: 'Master en Informatique',
      school: 'École Polytechnique',
      period: '2016 - 2018',
      description: 'Spécialisation en développement web et architecture logicielle'
    },
    {
      degree: 'Licence en Informatique',
      school: 'Université de Paris',
      period: '2013 - 2016',
      description: 'Formation générale en informatique et programmation'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {translations.experience.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                {translations.experience.title}
              </h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-blue-500"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                  <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                {translations.experience.education}
              </h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-blue-500"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                  <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-purple-400 mb-2">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}