import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Tab.module.css";

interface TabProps {
  color: string;
  filename: string;
  path: string;
}

export default function Tab({ color, filename, path }: TabProps) {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link
      to={path}
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 16 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="6" />
      </svg>
      <span>{filename}</span>
    </Link>
  );
}
