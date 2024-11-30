import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import Section from '../ui/Section';
import Modal from '../ui/Modal';
import { Project } from '../../types';
import { fadeInUp } from '../../utils/animations';
import { LazyImage } from '../ui/LazyImage';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const { translations } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js',
      longDescription: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. The application handles thousands of products and transactions while maintaining excellent performance.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=500',
      github: 'https://github.com',
      link: 'https://example.com',
      duration: '6 months',
      team: '4 developers',
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Admin dashboard',
        'Analytics and reporting',
        'Mobile-responsive design'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      longDescription: 'A comprehensive task management solution designed for team collaboration. Features include real-time updates, task dependencies, time tracking, and detailed progress reporting.',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=500',
      github: 'https://github.com',
      link: 'https://example.com',
      duration: '4 months',
      team: '3 developers',
      features: [
        'Real-time collaboration',
        'Task dependencies',
        'Time tracking',
        'Progress reporting',
        'Team chat integration'
      ]
    },
    {
      title: 'Real-time Chat App',
      description: 'A real-time chat application with WebSocket',
      longDescription: 'A modern chat application supporting multiple conversation types, file sharing, and end-to-end encryption. Built with scalability in mind, it handles thousands of concurrent connections efficiently.',
      tech: ['React', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500',
      github: 'https://github.com',
      link: 'https://example.com',
      duration: '5 months',
      team: '2 developers',
      features: [
        'End-to-end encryption',
        'File sharing',
        'Group conversations',
        'Message search',
        'Push notifications'
      ]
    }
  ];

  return (
    <Section id="projects" title={translations.projects.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="p-4 sm:p-6">
            <LazyImage
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={20} className="text-purple-400 shrink-0" />
                <span>{selectedProject.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users size={20} className="text-purple-400 shrink-0" />
                <span>{selectedProject.team}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star size={20} className="text-purple-400 shrink-0" />
                <span>{selectedProject.tech.length} Technologies</span>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  View Live
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}