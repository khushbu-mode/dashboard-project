export default function TextField({ label, name, register, placeholder = '', required = false, type = 'text', className = '' }) {
  return (
    <div className={`flex flex-col  mb-4 ${className}`} >
      <label className="text-[13px] text-[#2b3a4a] mb-2 font-medium">{label}{required && <span className="text-black ml-1">*</span>}</label>
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-[8px] border border-[#e6e9ee] px-3 text-sm placeholder:text-[#9aa3b2] focus:outline-none focus:ring-2 focus:ring-[#0f2d66]/10"
      />
    </div>
  );
}