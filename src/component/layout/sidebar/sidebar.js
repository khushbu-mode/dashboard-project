"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard/members", label: "Dashboard" },
    { href: "/dashboard/meetings", label: "Meetings" },
    { href: "/dashboard", label: "Members" },
    { href: "/dashboard/business", label: "Business" },
    { href: "/dashboard/evententries", label: "Event" },
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
