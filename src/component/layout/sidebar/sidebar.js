"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/meetings", label: "Meetings" },
    { href: "/dashboard/members", label: "Members" },
    { href: "/dashboard/business", label: "Business" },
    { href: "/dashboard/events", label: "Event" },
    { href: "/dashboard/podcast", label: "Podcast" },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${
              pathname === link.href ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

/* import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Dashboard</Link>
        <Link href="/meetings" className={styles.link}>Meetings</Link>
        <Link href="/members" className={styles.link}>Members</Link>
        <Link href="/business" className={styles.link}>Business</Link>
        <Link href="/event" className={styles.link}>Event</Link>
        <Link href="/podcast" className={styles.link}>Podcast</Link>
      </nav>
    </aside>
  );
}
 */