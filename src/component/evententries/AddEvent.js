"use client";
import { useState, useEffect } from "react";
import { Search, Check, X } from "lucide-react";

export default function EventEntries({ open, onClose }) {
  const [step, setStep] = useState("search"); // search | details | success
  const [query, setQuery] = useState("");
  const [member, setMember] = useState(null);

  // Reset state when modal closes
  const handleClose = () => {
    setStep("search");
    setQuery("");
    setMember(null);
    onClose();
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Mock search function
  const handleSearch = () => {
    if (query === "G-101") {
      setMember({
        id: "G-101",
        type: "Gold Member",
        name: "Sarah Mitchell",
        since: "March 15, 2024",
        email: "sarah.mitchell@email.com",
        phone: "(555) 123-4567",
        lastEvent: "NA",
      });
      setStep("details");
    } else {
      alert("Member not found ❌");
    }
  };

  const handleMarkAttendee = () => {
    setStep("success");
    setTimeout(() => {
      setStep("search");
      handleClose(); // auto close after success
    }, 2000);
  };

  // ✅ Render nothing if modal is closed (AFTER hooks)
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative p-6 animate-fadeIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step: Search */}
        {step === "search" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Member ID/Mobile
            </label>
            <div className="flex items-center border rounded px-3 py-2 mb-4">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter ID/Mobile"
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
            <button
              onClick={handleSearch}
              className="w-full bg-[#0B1F44] text-white rounded-lg py-2 text-sm font-medium"
            >
              Search
            </button>
          </div>
        )}

        {/* Step: Details */}
        {step === "details" && member && (
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {member.name.charAt(0)}
              </div>
              <div>
                <span className="px-3 py-1 text-xs bg-gray-100 rounded-full mr-2">
                  {member.id}
                </span>
                <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                  {member.type}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">Member since {member.since}</p>
            <p className="text-sm text-gray-600 mt-2">{member.email}</p>
            <p className="text-sm text-gray-600">{member.phone}</p>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Last Event Details:</p>
              <p className="text-sm font-medium text-gray-700">{member.lastEvent}</p>
            </div>

            <button
              onClick={handleMarkAttendee}
              className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-700"
            >
              Mark Attendees
            </button>
          </div>
        )}

        {/* Step: Success */}
        {step === "success" && (
          <div className="text-center py-6">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="text-green-600 w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-green-600">
              Member Entry Successfully Done in the Event
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
