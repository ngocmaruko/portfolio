// src/components/Projects.js
import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("websites"); // Default active tab

  // Filter projects based on the active tab
  const filteredProjects = projects.filter((project) => {
    return project.type === activeTab; // Filter based on active tab
  });

  // Brief descriptions for each tab
  const descriptions = {
    websites: "A collection of websites that I manage, showcasing my ability to oversee and optimize online platforms.",
    official: "Projects developed during my tenure at various companies, reflecting my collaborative efforts and professional expertise.",
    personal: "Self-initiated projects that highlight my skills and passion for continuous learning and development."
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === "websites" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("websites")}
        >
          Websites Managed
        </div>
        <div className={`${styles.tab} ${activeTab === "official" ? styles.activeTab : ""}`} 
          onClick={() => setActiveTab("official")}
        >
          Professional Projects
        </div>
        <div className={`${styles.tab} ${activeTab === "personal" ? styles.activeTab : ""}`} 
          onClick={() => setActiveTab("personal")}
        >
          Personal Projects
        </div>
      </div>
      <div className={styles.description}>
        {descriptions[activeTab]} {/* Display the description based on active tab */}
      </div>
      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
