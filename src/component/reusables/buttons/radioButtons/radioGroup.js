import { Controller } from 'react-hook-form';

export default function RadioGroup({ label, name, control, options = [], required = false }) {
  return (
    <div className="flex flex-col">
      <label className="text-[13px] text-[#2b3a4a] mb-2 font-medium">{label}{required && <span className="text-black ml-1">*</span>}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field }) => (
          <div className="flex gap-3 flex-wrap">
            {options.map((opt) => {
              const active = field.value === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => field.onChange(opt.value)}
                  className={`flex items-center gap-3 px-4 py-2 border rounded-lg min-w-[170px] text-sm transition-shadow ${
                    active ? 'border-[#ffd24a] shadow-[0_6px_18px_rgba(255,210,74,0.12)] bg-[#fffaf0]' : 'border-[#e6e9ee] bg-white'
                  }`}
                >
                  <div className="text-lg">{opt.icon || '•'}</div>
                  <div className="text-[#374151]">{opt.label}</div>
                </button>
              );
            })}
          </div>
        )}
      />
    </div>
  );
}