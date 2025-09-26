import { useState } from "react";

export default function FormSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="bg-white ring-2 ring-[#e6e9ee] rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer"
        onClick={() => setOpen((s) => !s)}
        role="button"
        aria-expanded={open}
      >
        <h3 className="text-sm font-semibold text-[#0f1724]">{title}</h3>
        <div className={`text-[#000] transform transition-transform text-[28px] ${open ? 'rotate-0' : '-rotate-90'}`}>
          &#8964;
        </div>
      </div>
      {open && <div className="px-6 py-5 space-y-4">{children}</div>}
    </section>
  );
}
