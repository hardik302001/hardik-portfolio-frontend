import {
  VscSourceControl,
  VscError,
  VscWarning,
  VscTerminal,
  VscCheck,
  VscBell,
} from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import styles from "../styles/Bottombar.module.css";

interface BottombarProps {
  onTerminalToggle: () => void;
  isTerminalOpen: boolean;
}

export default function Bottombar({
  onTerminalToggle,
  isTerminalOpen,
}: BottombarProps) {
  return (
    <div className={styles.bottombar}>
      <div className={styles.left}>
        <div className={styles.section}>
          <span className={styles.sectionIcon}>
            <VscSourceControl />
          </span>
          <span>main</span>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionIcon}>
            <VscError />
          </span>
          <span>0</span>
          <span className={styles.sectionIcon}>
            <VscWarning />
          </span>
          <span>0</span>
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={`${styles.section} ${
            isTerminalOpen ? styles.active : ""
          }`}
          onClick={onTerminalToggle}
        >
          <span className={styles.sectionIcon}>
            <VscTerminal />
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionIcon}>
            <FaReact />
          </span>
          <span>Powered by React</span>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionIcon}>
            <VscCheck />
          </span>
          <span>Prettier</span>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionIcon}>
            <VscBell />
          </span>
        </div>
      </div>
    </div>
  );
}
