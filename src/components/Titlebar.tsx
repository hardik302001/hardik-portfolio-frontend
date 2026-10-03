import { VscCode } from "react-icons/vsc";
import styles from "../styles/Titlebar.module.css";

interface TitlebarProps {
  onOpenCommandPalette: () => void;
}

export default function Titlebar({ onOpenCommandPalette }: TitlebarProps) {
  return (
    <div className={styles.titlebar}>
      <VscCode style={{ fontSize: "1rem", marginRight: "0.75rem" }} />
      <div className={styles.items}>
        <span>File</span>
        <span>Edit</span>
        <span onClick={onOpenCommandPalette}>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
      <span className={styles.title}>
        Hardik Sharma - Visual Studio Code
      </span>
      <div className={styles.windowButtons}>
        <span className={styles.minimize} />
        <span className={styles.maximize} />
        <span className={styles.close} />
      </div>
    </div>
  );
}
