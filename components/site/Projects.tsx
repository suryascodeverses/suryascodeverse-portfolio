'use client';

import { useState } from 'react';
import styles from '@/styles/Projects.module.css';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Dummy data - will be replaced with API call
const dummyProjects: Project[] = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with advanced features including real-time inventory, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    _id: '2',
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with natural language processing and sentiment analysis.',
    image: '/projects/chat.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'WebSocket', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    _id: '3',
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates, team analytics, and project tracking.',
    image: '/projects/tasks.jpg',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  const [projects] = useState<Project[]>(dummyProjects);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section id="projects" className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'featured' ? styles.active : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project._id} className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <span className="text-6xl">🚀</span>
                </div>
                {project.featured && (
                  <span className={styles.badge}>Featured</span>
                )}
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}