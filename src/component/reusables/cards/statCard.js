import styles from "./statcard.module.css";

export default function StatCard({ icon, value, label, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ color }}>
        {icon}
      </div>
      <h2 className={styles.value}>{value}</h2>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
