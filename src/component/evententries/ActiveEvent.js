"use client";
import { useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, Clock } from "lucide-react";
export default function CurrentEventCard({ event }) {

  return (
    <>
      <div className="p-6 flex flex-col lg:flex-row items-start gap-6">
        <div className="flex flex-col flex-1 gap-5">
          <h3 className="text-md font-semibold mb-3 text-gray-700" style={{fontSize:"25px"}}>Venue Information</h3>
          <p className="font-medium text-gray-900 mb-2">{event.title}</p>
          <div className="flex flex-col space-y-2 text-sm text-gray-600 gap-3">
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
            className="mt-4 max-w-[300px] max-h-[64px] rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Add Entries+
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 max-w-[450px] h-auto">
          <Image
            src="/images/hall.jpg"
            alt={event.title}
            width={337}
            height={200}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

    </>
  );
}
