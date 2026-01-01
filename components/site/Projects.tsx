'use client';

import { useEffect, useState } from "react";
import { getProjects } from "@/lib/services";
import { Project } from "@/lib/types";
import styles from "@/styles/Projects.module.css";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    }
    loadProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesFeatured =
      filter === "All" || (filter === "Featured" && project.featured);
    const matchesCategory =
      categoryFilter === "All" || project.category === categoryFilter;
    return matchesFeatured && matchesCategory;
  });

  const categories = [
    "All",
    "Web App",
    "Mobile App",
    "API",
    "Desktop App",
    "Game",
    "Other",
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          Explore my latest work and creative solutions
        </p>
        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <button
              onClick={() => setFilter("All")}
              className={filter === "All" ? styles.filterActive : styles.filter}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("Featured")}
              className={
                filter === "Featured" ? styles.filterActive : styles.filter
              }
            >
              Featured
            </button>
          </div>

          {/* Category Filter */}
          <div className={styles.categoryFilters}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={
                  categoryFilter === cat
                    ? styles.categoryActive
                    : styles.category
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        Projects.module.css
        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project._id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                {project.featured && (
                  <span className={styles.badge}>Featured</span>
                )}
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.tech}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
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
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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