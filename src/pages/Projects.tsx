import { VscFolderOpened } from "react-icons/vsc";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <VscFolderOpened />
        </div>
        <div className={styles.headerText}>
          <h1 className={styles.headerTitle}>Featured Work</h1>
          <span className={styles.headerSubtitle}>
            Things I've built and shipped
          </span>
        </div>
        <span className={styles.countBadge}>
          {projects.length} Projects
        </span>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Footer */}
      <a
        href="https://github.com/hardik302001"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        Explore more on GitHub
        <span className={styles.footerLinkIcon}>&rarr;</span>
      </a>
    </div>
  );
}
