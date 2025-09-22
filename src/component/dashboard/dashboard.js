"use client";

import Sidebar from "../layout/sidebar/sidebar";
import Header from "../layout/header/header";
import StatCard from "../reusables/cards/statCard";
import MembersTable from "../reusables/tables/memberTable";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, background: "#f8fafc" }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <h1>Members Management System</h1>
          <p style={{ color: "gray", marginBottom: "20px" }}>
            Generate unique codes, create and manage member profiles, and track membership status
          </p>

          {/* Stats Row */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <StatCard value="350" label="Active Member" />
            <StatCard value="135" label="Gold" />
            <StatCard value="121" label="Platinum" />
            <StatCard value="94" label="Titanium" />
          </div>

          {/* Members Table */}
          <MembersTable />
        </div>
      </main>
    </div>
  );
}


