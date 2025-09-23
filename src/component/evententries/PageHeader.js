import StatsCard from "./StatsCard";
import CurrentEventCard from "./CurrentEventCard";
import Link from "next/link";
import { User2, FileText } from "lucide-react";
import { Plus } from "lucide-react";
export default function PageHeader({ currentEvent }) {
  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-6 mb-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
       <Link href="/members" className="block mb-6">
        <h1 className="text-lg font-semibold text-gray-900 hover:text-[#0B1F44] flex items-center gap-2">
          &larr; Add New Member
        </h1>
      </Link>
        <Link href="/addmember">
      <button
        className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700"
      >
        <span>Add New Member</span>
        <Plus className="h-4 w-4" />
      </button>
    </Link>
      </div>

      {/* Current Event + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <h2 className="text-md font-semibold mb-3 text-gray-700">Current Events</h2>
          <CurrentEventCard event={currentEvent} />
        </div>
        <div className="space-y-4">
              <Link href="/viewmembers">
      <button className="w-full flex justify-between items-center rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
        Detailed Entries <span>→</span>
      </button>
    </Link>

         <div className="grid grid-cols-1 gap-4 w-[200px] mt-4">
      <StatsCard
        icon={<User2 className="text-green-600" />}
        value="350"
        label="Total Members"
        color="#D1FAE5" // light green
      />
      <StatsCard
        icon={<FileText className="text-purple-600" />}
        value="94"
        label="Event Entries"
        color="#EDE9FE" // light purple
      />
    </div>
        </div>
      </div>
    </div>
  );
}
