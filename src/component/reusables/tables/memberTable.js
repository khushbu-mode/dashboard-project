import styles from "./membertable.module.css";
import {  FaEye, FaGripVertical } from "react-icons/fa";


const members = [
  { name: "Sarah Mitchell", code: "G-101", tier: "Gold", status: "Active", joined: "Mar 15, 2024" },
  { name: "Michael Johnson", code: "P-101", tier: "Platinum", status: "Active", joined: "Mar 12, 2024" },
  { name: "Emily Watson", code: "P-101", tier: "Titanium", status: "Pending", joined: "Mar 10, 2024" },
  { name: "David Lee", code: "G-102", tier: "Gold", status: "Inactive", joined: "Mar 8, 2024" },
  { name: "Anna Chen", code: "P-102", tier: "Platinum", status: "Pending", joined: "Mar 5, 2024" },
];

export default function MembersTable() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <h3>Member Database</h3>
        <a href="#">View All</a>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Member</th>
            <th>Code</th>
            <th>Tier</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>{m.code}</td>
              <td><span className={`${styles.badge} ${styles[m.tier.toLowerCase()]}`}>{m.tier}</span></td>
              <td><span className={`${styles.status} ${s[m.status.toLowerCase()]}`}>{m.status}</span></td>
              <td>{m.joined}</td>
              <td><FaEye/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
