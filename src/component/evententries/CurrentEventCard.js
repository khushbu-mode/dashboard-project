"use client";
import { useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import EventEntries from "./AddEvent";
export default function CurrentEventCard({ event }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="border rounded-lg bg-white shadow-sm p-6 flex flex-col lg:flex-row items-start gap-6">
        {/* Left - Venue Info */}
        <div className="flex-1">
          <h3 className="text-md font-semibold mb-3 text-gray-700">Venue Information</h3>
          <p className="font-medium text-gray-900 mb-2">{event.title}</p>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.address}</span>
            </div>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="mt-4 rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Add Entries+
          </button>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-[337px] h-[260px]">
          <Image
            src={event.image || "/images/event.png"}
            alt={event.title}
            width={237}
            height={260}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Popup */}
      <EventEntries open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
