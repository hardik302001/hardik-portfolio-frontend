import { useEffect, useState } from "react";
import { api } from "../api.ts";

interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  repo_url?: string;
  live_url?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api("/api/projects")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>
      {projects.length === 0 && <p style={{ color: "#aaa" }}>Loading...</p>}
      {projects.map((p) => (
        <div
          key={p.id}
          style={{
            background: "#1a1a1a",
            padding: "1.5rem",
            borderRadius: 8,
            marginBottom: "1rem",
          }}
        >
          <h2>{p.title}</h2>
          <p style={{ color: "#aaa", margin: "0.5rem 0" }}>{p.description}</p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            {p.tech_stack.map((t) => (
              <span
                key={t}
                style={{
                  background: "#333",
                  padding: "0.2rem 0.6rem",
                  borderRadius: 4,
                  fontSize: "0.85rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          {p.repo_url && <a href={p.repo_url} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
      ))}
    </div>
  );
}
