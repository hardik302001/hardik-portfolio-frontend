import { Link, useLocation } from "react-router-dom";
import { sidebarTop, sidebarBottom } from "../data/navigation";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div>
        {sidebarTop.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.iconContainer} ${
              pathname === item.path ? styles.active : ""
            }`}
          >
            <item.icon className={styles.icon} />
          </Link>
        ))}
      </div>
      <div>
        {sidebarBottom.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.iconContainer} ${
              pathname === item.path ? styles.active : ""
            }`}
          >
            <item.icon className={styles.icon} />
          </Link>
        ))}
      </div>
    </aside>
  );
}
