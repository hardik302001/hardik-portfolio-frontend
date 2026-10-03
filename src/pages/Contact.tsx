import { useState, type FormEvent } from "react";
import { api } from "../api.ts";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await api("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem",
    background: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: 4,
    color: "#e0e0e0",
    fontSize: "1rem",
    marginBottom: "1rem",
  };

  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Contact</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem 2rem",
            background: "#64b5f6",
            color: "#000",
            border: "none",
            borderRadius: 4,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Send
        </button>
        {status && <p style={{ marginTop: "1rem", color: "#aaa" }}>{status}</p>}
      </form>
    </div>
  );
}
