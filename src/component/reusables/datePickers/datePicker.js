import { Controller } from 'react-hook-form';

export default function DateField({ label, name, control, required = false }) {
  return (
    <div className="flex flex-col" style={{marginBottom:"16px"}}>
      <label className="text-[13px] text-[#2b3a4a] mb-2 font-medium">
        {label}
        {required && <span className="text-black ml-1">*</span>}
      </label>

      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field }) => {
          const { value, onChange, onBlur, ref } = field;
          return (
            <div className="relative">
              <input
                value={value ?? ''}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                type="date"
                placeholder="-/-/-"
                className="h-11 w-full rounded-[8px] border border-[#e6e9ee] px-3 text-sm placeholder:text-[#9aa3b2] focus:outline-none focus:ring-2 focus:ring-[#0f2d66]/10"
              />
              <div className="absolute right-3 top-3 pointer-events-none text-sm text-[#6b7280]"></div>
            </div>
          );
        }}
      />
    </div>
  );
}

