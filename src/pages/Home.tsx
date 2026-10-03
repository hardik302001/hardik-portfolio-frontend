import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscCode, VscGithubAlt, VscMail } from "react-icons/vsc";
import { api } from "../api";
import styles from "../styles/HomePage.module.css";

interface ProfileData {
  tagline: string;
  server_time: string;
  uptime_human: string;
}

export default function Home() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    api("/api/profile")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setProfile(data))
      .catch(() => {});
  }, []);

  return (
    <div className={styles.container}>
      <VscCode
        style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "1.5rem", opacity: 0.8 }}
      />
      <p className={styles.greeting}>Hello, I'm</p>
      <h1 className={styles.name}>Hardik Sharma</h1>
      <p className={styles.role}>SDE II @ Zomato</p>
      <hr className={styles.divider} />
      <p className={styles.description}>
        I build high-scale distributed systems with Go, gRPC, and Kafka.
        Ex-Amazon. LeetCode Guardian (Rating 2256).
      </p>

      {profile && (
        <p className={styles.tagline}>
          &ldquo;{profile.tagline}&rdquo;
        </p>
      )}

      <div className={styles.actions}>
        <Link to="/projects" className={styles.primaryAction}>
          View Projects
        </Link>
        <Link to="/about" className={styles.secondaryAction}>
          Learn More
        </Link>
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
        <a
          href="https://github.com/hardik302001"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-color)", opacity: 0.5, fontSize: "1.25rem", transition: "opacity 0.2s" }}
        >
          <VscGithubAlt />
        </a>
        <Link
          to="/contact"
          style={{ color: "var(--text-color)", opacity: 0.5, fontSize: "1.25rem", transition: "opacity 0.2s" }}
        >
          <VscMail />
        </Link>
      </div>

      {profile && (
        <p className={styles.serverInfo}>
          Server uptime: {profile.uptime_human} &middot; {profile.server_time}
        </p>
      )}
    </div>
  );
}
