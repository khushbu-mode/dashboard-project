import { Controller } from "react-hook-form";
import { FaMedal, FaGem, FaBolt } from "react-icons/fa";

export default function MembershipRadio({ control }) {
  const options = [
    { value: "gold", label: "Gold Membership", icon: FaMedal, bg: "bg-yellow-400" },
    { value: "platinum", label: "Platinum Membership", icon: FaGem, bg: "bg-slate-400" },
    { value: "titanium", label: "Titanium Membership", icon: FaBolt, bg: "bg-gray-700" },
  ];

  return (
    <Controller
      name="memberType"
      control={control}
      render={({ field }) => (
        <div>
          <label className="text-sm font-medium mb-2 block">Member Type</label>
          <div className="flex flex-wrap gap-4">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = field.value === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer border ${
                    isSelected ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    value={opt.value}
                    checked={isSelected}
                    onChange={() => field.onChange(opt.value)}
                    className="hidden"
                  />
                  <div
                    className={`${opt.bg} p-2 rounded-full text-white flex items-center justify-center`}
                  >
                    <Icon />
                  </div>
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    />
  );
}
