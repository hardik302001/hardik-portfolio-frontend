import { Link } from "react-router-dom";

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  background: "#1a1a1a",
  borderBottom: "1px solid #333",
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  gap: "1.5rem",
};

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>
        Hardik Sharma
      </Link>
      <div style={linksStyle}>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
