import { useEffect, useState } from "react";
import { api } from "../api.ts";

interface AboutInfo {
  name: string;
  bio: string;
  skills: string[];
}

export default function About() {
  const [about, setAbout] = useState<AboutInfo | null>(null);

  useEffect(() => {
    api("/api/about")
      .then((res) => res.json())
      .then(setAbout)
      .catch(console.error);
  }, []);

  if (!about) return <p style={{ color: "#aaa" }}>Loading...</p>;

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>About</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>{about.bio}</p>
      <h2 style={{ marginBottom: "1rem" }}>Skills</h2>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {about.skills.map((s) => (
          <span
            key={s}
            style={{
              background: "#1a1a1a",
              padding: "0.4rem 1rem",
              borderRadius: 4,
              border: "1px solid #333",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
