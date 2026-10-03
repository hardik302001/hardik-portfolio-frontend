import { contacts } from "../data/contacts";
import styles from "../styles/ContactCode.module.css";

export default function ContactCode() {
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span>contact.css</span>
        <span>CSS</span>
      </div>
      <div className={styles.codeBody}>
        <div className={styles.codeLine}>
          <span className={styles.keyword}>.socials</span>
          <span className={styles.punctuation}>&nbsp;{"{"}</span>
        </div>
        {contacts.map((c) => (
          <div key={c.property} className={styles.codeLine}>
            <span className={`${styles.property} ${styles.indent1}`}>
              {c.property}
            </span>
            <span className={styles.punctuation}>:&nbsp;</span>
            <a
              className={styles.link}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.value}
            </a>
            <span className={styles.punctuation}>;</span>
          </div>
        ))}
        <div className={styles.codeLine}>
          <span className={styles.punctuation}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}
