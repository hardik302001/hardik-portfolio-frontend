import { Link } from "react-router-dom";
import { VscGithubAlt, VscMail } from "react-icons/vsc";
import { profile, experiences, skills, education } from "../data/about";
import styles from "../styles/AboutPage.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <h1 className={styles.headerName}>{profile.name}</h1>
          <span className={styles.headerRole}>{profile.role}</span>
          <span className={styles.headerLocation}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3fb950",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            {profile.location}
          </span>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.skillTag}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <VscGithubAlt />
            </a>
            <Link
              to="/contact"
              className={styles.skillTag}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <VscMail />
            </Link>
          </div>
        </div>
      </div>

      {/* 01 — About */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <h2 className={styles.sectionTitle}>About</h2>
        </div>
        <p className={styles.sectionBody}>{profile.bio}</p>
      </div>

      {/* 02 — Experience */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>02</span>
          <h2 className={styles.sectionTitle}>Experience</h2>
        </div>
        {experiences.map((exp) => (
          <div key={exp.company} className={styles.experienceCard}>
            <h3 className={styles.experienceTitle}>{exp.title}</h3>
            <span className={styles.experienceCompany}>{exp.company}</span>
            <p className={styles.experienceDuration}>{exp.duration}</p>
            <p className={styles.experienceDescription}>{exp.description}</p>
          </div>
        ))}
      </div>

      {/* 03 — Skills */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.sectionTitle}>Skills</h2>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((cat) => (
            <div key={cat.category} className={styles.skillCategory}>
              <p className={styles.skillCategoryTitle}>{cat.category}</p>
              <div className={styles.skillTags}>
                {cat.items.map((s) => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 04 — Competitive Programming */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>04</span>
          <h2 className={styles.sectionTitle}>Competitive Programming</h2>
        </div>
        <p className={styles.sectionBody}>{profile.competitiveProgramming}</p>
      </div>

      {/* 05 — Education */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>05</span>
          <h2 className={styles.sectionTitle}>Education</h2>
        </div>
        <div className={styles.experienceCard}>
          <h3 className={styles.experienceTitle}>{education.degree}</h3>
          <span className={styles.experienceCompany}>{education.institution}</span>
          <p className={styles.experienceDuration}>{education.duration}</p>
          <p className={styles.experienceDescription}>CGPA: {education.cgpa}</p>
        </div>
      </div>

      {/* Footer link */}
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <span
          style={{
            color: "var(--accent-color)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.85rem",
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
        >
          View my projects &rarr;
        </span>
      </Link>
    </div>
  );
}
