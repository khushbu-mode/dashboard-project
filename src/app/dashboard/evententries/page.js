import PageHeader from "@/component/evententries/PageHeader";
import EventCard from "@/component/evententries/EventCard";
import Header from "@/component/layout/header/header";
import Sidebar from "@/component/layout/sidebar/sidebar";
// import MainLayout from "@/component/layouts/MainLayouts";

export default function EventsPage() {
  const currentEvent = {
    title: "Manhattan Conference Center",
    date: "Sep 5, 2025",
    time: "3:00 PM - 6:00 PM IST",
    address: "1230 Broadway, Gurugram, India 10001",
    image: "/images/event.png",   // ✅ stored inside /public/images
    tag: "Conference",
    spots: 42,
    description:
      "Join industry leaders for insights on emerging technologies and networking opportunities.",
  };

  const upcomingEvents = [
    {
      title: "Future of Tech Conference",
      date: "Sep 5, 2025",
      time: "6:00 PM - 9:00 PM IST",
      location: "Gurugram",
      spots: 42,
      tag: "Conference",
      description:
        "Join industry leaders for insights on emerging technologies and networking opportunities.",
      image: "/images/event.png",
    },
    {
      title: "Future of Tech Conference",
      date: "Sep 5, 2025",
      time: "6:00 PM - 9:00 PM IST",
      location: "Virtual",
      spots: 22,
      tag: "Conference",
      description:
        "Join industry leaders for insights on emerging technologies and networking opportunities.",
      image: "/images/event.png",
    },
    {
      title: "Future of Tech Conference",
      date: "Sep 5, 2025 ",
      time: "6:00 PM - 9:00 PM IST",
      location: "Virtual",
      spots: 22,
      tag: "Conference",
      description:
        "Join industry leaders for insights on emerging technologies and networking opportunities.",
      image: "/images/event.png",
    },
  ];

  return (
    <div className="p-6 mt-20">
      {/* Full-width header with stats + current event */}
      <PageHeader currentEvent={currentEvent} />

      {/* Upcoming Events */}
      <h2 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Upcoming Events</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((e, i) => (
          <EventCard key={i} event={e} />
        ))}
      </div>
    </div>
  );
}