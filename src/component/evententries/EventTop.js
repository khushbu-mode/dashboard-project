"use client";

import CurrentEventCard from "./ActiveEvent";
import Link from "next/link";
import { Plus } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import StatCard from "../reusables/cards/statCard";
import { FaUsers, FaCrown} from "react-icons/fa";



export default function PageHeader({ currentEvent }) {

  const router = useRouter();
  const addmember = () => {
    router.push("/dashboard/addmember");
  };
  return (
    <div className="w-full mx-auto px-8 py-6">
      <div className="flex items-center justify-between mb-6  pb-4">
 <Link href="/dashboard" className="flex items-center gap-3">
          <FaArrowLeft className="text-xl text-gray-700" />
          <h2 className="text-lg font-semibold text-gray-800">Events Entry</h2>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/addmember">
            <button
              onClick={addmember}
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-[#dfe6f4] text-sm font-medium text-[#2b3a4a] hover:bg-white/50 bg-white shadow-sm"
            >
              Add New Member
              <Plus className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-lg border border-[#e6e6e9] bg-white">
          <div className="border-b border-[#f0f0f2] pt-6 pb-6 pl-6">
            <h3 className="text-md font-semibold text-gray-700 text-[20px]" >Current Events</h3>
          </div>
          <CurrentEventCard event={currentEvent} />
        </div>
        <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col justify-between">
          <Link href="/viewmembers">
            <button className="w-full flex justify-between items-center rounded-lg border border-[#e6e6e9] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Detailed Entries <span className="text-lg">→</span>
            </button>
          </Link>
          <div className="flex flex-col gap-4">
            <StatCard icon={FaUsers} value="350" label="Active Member" iconColor="#22c55e" bgColor="#7ef7abff" />
                        <StatCard icon={FaCrown} value="135" label="Gold" ic="#facc15" bgColor="#ffe682ff" />
              
            {/* <StatsCard
              icon={<User2 className="text-green-600" />}
              value="350"
              label="Total Members"
              bg="#D1FAE5"
            />
            <StatsCard
              icon={<FileText className="text-purple-600" />}
              value="94"
              label="Event Entries"
              bg="#EDE9FE"
            /> */}
          </div>
        </aside>
      </div>
    </div>
  );
}
