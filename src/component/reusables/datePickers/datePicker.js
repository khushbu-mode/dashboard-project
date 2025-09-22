import styles from "./datePicker.module.css";

export default function DatePicker({ label, required }) {
  return (
    <div className={styles.dateGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input type="date" className={styles.input} />
    </div>
  );
}
