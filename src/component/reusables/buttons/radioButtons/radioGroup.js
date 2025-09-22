import styles from "./radioGroup.module.css";

export default function RadioGroup({ label, options }) {
  return (
    <div className={styles.radioGroup}>
      <p className={styles.label}>{label}</p>
      <div className={styles.options}>
        {options.map((opt) => (
          <label key={opt.value} className={styles.option}>
            <input type="radio" name={label} value={opt.value} />
            <span className={styles.custom}></span>
            {opt.icon && <span className={styles.icon}>{opt.icon}</span>}
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
