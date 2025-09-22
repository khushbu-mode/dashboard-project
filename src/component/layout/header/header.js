import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <div className={styles.right}>
        <button className={styles.eventBtn}>Event Entries</button>
        <button className={styles.addBtn}>+ Add New Member</button>
        <div className={styles.profile}>
          <img src="/user.jpg" alt="user" className={styles.avatar} />
          <div>
            <p>Lucy Williams</p>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </header>
  );
}
