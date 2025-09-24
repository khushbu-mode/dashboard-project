import Image from "next/image";
import { CalendarDays, MapPin, Users } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="overflow-hidden bg-white">
      <Image
        src={event.image || "/images/hall.png"}
        alt={event.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4 gap-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
            {event.tag}
          </span>

          {event.location && (
            <span className="flex items-center text-xs text-gray-500 gap-1">
              <MapPin className="h-3 w-3" />
              {event.location}
            </span>
          )}
        </div>

        <h3 className="text-md font-semibold text-gray-900">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{event.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{event.spots} spots remaining</span>
          </div>
        </div>

        <button className="mt-3 w-full rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          Add Entries
        </button>
      </div>
    </div>
  );
}
