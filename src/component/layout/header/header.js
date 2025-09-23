import { FaUsers, FaBell } from "react-icons/fa";
import styles from "./header.module.css";



export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>AURUM CoNexus</div>
      <div className={styles.right}>
        <div className={styles.notification}>
          <FaBell />
        </div>
        <div className={styles.profile}>
          <div className={styles.profileIcon}>
            <FaUsers />
          </div>
          <div>
            <p>Lucy Williams</p>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </header>
  );
}
