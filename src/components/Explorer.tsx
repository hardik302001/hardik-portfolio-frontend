import { useState } from "react";
import { Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import { explorerFiles } from "../data/navigation";
import styles from "../styles/Explorer.module.css";

export default function Explorer() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <div
          className={styles.heading}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <VscChevronRight
            className={styles.chevron}
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
          <span>Portfolio</span>
        </div>
        {isOpen &&
          explorerFiles.map((file) => (
            <Link key={file.path} to={file.path} style={{ textDecoration: "none", color: "inherit" }}>
              <div className={styles.file}>
                <svg
                  className={styles.fileIcon}
                  viewBox="0 0 16 16"
                  fill={file.color}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="6" />
                </svg>
                <span className={styles.fileName}>{file.name}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
