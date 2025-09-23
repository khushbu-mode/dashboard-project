"use client";

import Sidebar from "../layout/sidebar/sidebar";
import Header from "../layout/header/header";
import StatCard from "../reusables/cards/statCard";
import MembersTable from "../reusables/tables/memberTable";
import { FaUsers, FaCrown, FaGem, FaAward } from "react-icons/fa";
import headerStyles from "../layout/header/header.module.css";

export default function Dashboard() {
  return (
    <div>

      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, background: "#f8fafc" }}>
          <Header />
          <div style={{ padding: "95px", }}>
            <div style={{padding:"13px"}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "30px", margin: 0 }}>
                  Members Management System
                </p>
                <div style={{ display: "flex", gap: "15px" }}>
                  <button className={headerStyles.eventBtn}>Event Entries</button>
                  <button className={headerStyles.addBtn}>+ Add New Member</button>
                </div>
              </div>

              {/* Subtext */}
              <p style={{ color: "gray", marginBottom: "20px" }}>
                Generate unique codes, create and manage member profiles, and track
                membership status
              </p>

            </div>


            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" }}>
              <StatCard icon={FaUsers} value="350" label="Active Member" iconColor="#22c55e" bgColor="#7ef7abff" />
              <StatCard icon={FaCrown} value="135" label="Gold" ic="#facc15" bgColor="#ffe682ff" />
              <StatCard icon={FaGem} value="121" label="Platinum" iconColor="#9ca3af" bgColor="#e8f0ffff" />
              <StatCard icon={FaAward} value="94" label="Titanium" iconColor="#a855f7" bgColor="#d2a2ffff" />
            </div>

            {/* Members Table */}
            <MembersTable />
          </div>
        </main>
      </div>
    </div>
  );
}


