import styles from "./inputField.module.css";

export default function InputField({ label, required, placeholder, type = "text" }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input type={type} className={styles.input} placeholder={placeholder} />
    </div>
  );
}
