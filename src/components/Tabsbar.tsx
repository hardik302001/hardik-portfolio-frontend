import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const tabs = [
  { filename: "home.tsx", path: "/", color: "#519aba" },
  { filename: "about.html", path: "/about", color: "#e37933" },
  { filename: "contact.css", path: "/contact", color: "#a074c4" },
  { filename: "projects.js", path: "/projects", color: "#cbcb41" },
];

export default function Tabsbar() {
  return (
    <div className={styles.tabsbar}>
      {tabs.map((tab) => (
        <Tab
          key={tab.path}
          filename={tab.filename}
          path={tab.path}
          color={tab.color}
        />
      ))}
    </div>
  );
}
