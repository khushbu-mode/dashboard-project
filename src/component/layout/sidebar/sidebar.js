import styles from "./sidebar.module.css"

  
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <a className={styles.link}>Dashboard</a>
        <a className={styles.link}>Meetings</a>
        <a className={`${styles.link} ${styles.active}`}>Members</a>
        <a className={styles.link}>Business</a>
        <a className={styles.link}>Event</a>
        <a className={styles.link}>Podcast</a>
      </nav>
    </aside>
  );
}
