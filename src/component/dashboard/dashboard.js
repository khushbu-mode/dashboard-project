"use client";

import { useRouter } from "next/navigation";
import { FaUsers, FaCrown, FaGem, FaAward } from "react-icons/fa";
import StatCard from "../reusables/cards/statCard";
import MembersTable from "../reusables/tables/memberTable";
import headerStyles from "../layout/header/header.module.css";
import Header from "../layout/header/header";
import Sidebar from "../layout/sidebar/sidebar";

export default function Dashboard() {
  const router = useRouter();
  const addmember = () => {
    router.push("/dashboard/addmember");
  };
  const evententries = () => {
    router.push("/dashboard/evententries");
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-[#f8fafc]">
        <Header />
       <div className="p-[95px]">
    <div className="p-3.5">

                 <div className="flex items-center justify-between">
              <p className="text-3xl m-0">
                Members Management System
              </p>
              <div className="flex gap-4">
                <button className={headerStyles.eventBtn} onClick={evententries}>Event Entries</button>
                <button className={headerStyles.addBtn} onClick={addmember}>+ Add New Member</button>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-gray-500 mb-5">
              Generate unique codes, create and manage member profiles, and track
              membership status
            </p>

          </div>


          <div className="grid grid-cols-4 gap-5 mb-5">
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

  );
}





