import { useState } from "react";

export default function ValidityRadio({ register, required = false }) {
  const [selected, setSelected] = useState("1");

  const options = [
    { label: "1 Year", value: "1" },
    { label: "2 Years", value: "2" },
    { label: "Renewal", value: "renewal" },
  ];

  return (
    <div className="mb-4 w-full">
      <label className="text-sm text-[#2b3a4a] mb-2 font-medium block">
        Validity
        {required && <span className="text-black ml-1">*</span>}
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              value={opt.value}
              {...register("validity")}
              checked={selected === opt.value}
              onChange={() => setSelected(opt.value)}
              className={`h-4 w-4 ${
                selected === opt.value ? "accent-[#ffd24a]" : "accent-gray-400"
              }`}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
