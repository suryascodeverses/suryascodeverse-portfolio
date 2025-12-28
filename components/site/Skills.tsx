'use client';

import { useState } from 'react';
import styles from '@/styles/Skills.module.css';

interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
}

// Dummy data
const dummySkills: Skill[] = [
  { _id: '1', name: 'React', category: 'Frontend', proficiency: 95, icon: '⚛️' },
  { _id: '2', name: 'Next.js', category: 'Frontend', proficiency: 90, icon: '▲' },
  { _id: '3', name: 'TypeScript', category: 'Frontend', proficiency: 88, icon: '📘' },
  { _id: '4', name: 'Node.js', category: 'Backend', proficiency: 92, icon: '🟢' },
  { _id: '5', name: 'MongoDB', category: 'Backend', proficiency: 85, icon: '🍃' },
  { _id: '6', name: 'PostgreSQL', category: 'Backend', proficiency: 80, icon: '🐘' },
  { _id: '7', name: 'Docker', category: 'DevOps', proficiency: 75, icon: '🐳' },
  { _id: '8', name: 'AWS', category: 'DevOps', proficiency: 78, icon: '☁️' },
  { _id: '9', name: 'Three.js', category: 'Frontend', proficiency: 70, icon: '🎨' },
];

export default function Skills() {
  const [skills] = useState<Skill[]>(dummySkills);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(skills.map(s => s.category)))];
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Expertise</h2>
          <p className={styles.subtitle}>
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className={styles.categoryFilter}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill) => (
            <div key={skill._id} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{skill.icon}</span>
                </div>
                <div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.category}>{skill.category}</span>
                </div>
              </div>
              
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className={styles.proficiency}>{skill.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}