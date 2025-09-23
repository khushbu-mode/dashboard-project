export default function StatsCard({ icon, value, label, color }) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm flex flex-col items-start">
      {/* Icon in Circle */}
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full mb-4`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      {/* Value */}
      <p className="text-2xl font-semibold text-gray-900">{value}</p>

      {/* Label */}
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
