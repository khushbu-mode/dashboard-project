"use client";

import { useState } from "react";
import { Bell, Phone, Video, MoreVertical, Calendar, Users, BarChart2, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";   // ✅ Add this line


export default function MobileResponsivePage() {
  const [filter, setFilter] = useState("Today");
  const [showMore, setShowMore] = useState(false); // 👈 state for More menu

  const meetings = [
    {
      name: "Divyanshu Gupta",
      email: "divyanshu12@gmail.com",
      date: "August 28, 2025",
      time: "10:00 AM",
      duration: "30 minutes",
      status: "Cancelled",
      tag: "Consultation",
      tagColor: "bg-blue-100 text-blue-600",
    },
    {
      name: "Rashid Khan",
      email: "rashid780@gmail.com",
      date: "August 29, 2025",
      time: "10:30 AM",
      duration: "45 minutes",
      status: "Pending",
      tag: "Demo",
      tagColor: "bg-green-100 text-green-600",
    },
    {
      name: "Lalita Pandey",
      email: "pandey09@gmail.com",
      date: "August 29, 2025",
      time: "02:00 PM",
      duration: "60 minutes",
      status: "Confirmed",
      tag: "Partnership",
      tagColor: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Bell className="w-6 h-6 text-gray-600" />
        <Image
          src="/profile.jpg"
          alt="profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>

      {/* Overview */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Overview</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-sm border rounded-md px-2 py-1"
        >
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <OverviewCard icon={<Calendar className="text-blue-600" />} title="Total Meetings" value="248" />
        <OverviewCard icon={<Users className="text-green-600" />} title="Total Visitors" value="1,842" />
        <OverviewCard icon={<BarChart2 className="text-purple-600" />} title="Conversion Rate" value="248" />
        <OverviewCard icon={<Crown className="text-orange-500" />} title="Active Members" value="1,842" />
      </div>

      {/* Recent Meetings */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Recent Meetings</h2>
        <button className="text-sm text-indigo-600">View All</button>
      </div>

      <div className="space-y-3">
        {meetings.map((m, idx) => (
          <div key={idx} className="p-3 border rounded-xl shadow-sm" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.email}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-lg font-medium ${m.tagColor}`}>
                {m.tag}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {m.date}, {m.time}
            </p>
            <p className="text-sm text-gray-500">{m.duration}</p>
            <div className="flex items-center justify-between mt-2">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  m.status === "Confirmed"
                    ? "bg-green-100 text-green-600"
                    : m.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {m.status}
              </span>
              <div className="flex space-x-3 text-gray-500">
                <Phone className="w-5 h-5" />
                <Video className="w-5 h-5" />
                <MoreVertical className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <NavItem label="Dashboard" icon={<Calendar className="w-6 h-6" />} active={false} />
        <NavItem label="Meetings" icon={<Users className="w-6 h-6" />} active={true} />
        <NavItem label="Business" icon={<BarChart2 className="w-6 h-6" />} active={false} />
        
        {/* More with dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex flex-col items-center text-xs text-gray-500"
          >
            <MoreVertical className="w-6 h-6" />
            <span>More</span>
          </button>

          {showMore && (
            <div className="absolute bottom-12 right-0 bg-white border rounded-lg shadow-lg w-40">
              <Link href="/dashboard">
                <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                  Dashboard
                </div>
              </Link>
              <Link href="/addmember">
                <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                  Add Member
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OverviewCard({ icon, title, value }) {
  return (
    <div className="p-4 rounded-xl border flex flex-col space-y-1" style={{ borderColor: '#E5E7EB' }}>
      <div className="flex items-center space-x-2">{icon}</div>
      <h3 className="text-lg font-bold">{value}</h3>
      <span className="text-xs text-gray-500">{title}</span>
    </div>
  );
}

function NavItem({ label, icon, active }) {
  return (
    <button
      className={`flex flex-col items-center text-xs ${
        active ? "text-indigo-600" : "text-gray-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
