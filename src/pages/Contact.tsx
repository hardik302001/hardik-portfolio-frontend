import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Have a question or want to work together? Reach out through any of the
        channels below.
      </p>
      <div className={styles.content}>
        <ContactCode />
      </div>
    </div>
  );
}
