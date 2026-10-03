import styles from "../styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    link: string;
    slug: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <a
          className={styles.link}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
