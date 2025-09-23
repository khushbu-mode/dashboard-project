import styles from "./form.module.css";

export default function FormSection({ title, children }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.toggle}>v</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
