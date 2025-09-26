import Image from "next/image";
import { FaBell, FaUsers } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] flex items-center justify-between bg-[#0a1844] text-white px-16 z-50">
      <div className="relative flex items-center">
        <Image
          src="/images/logo.png"
          alt="Aurum CoNexus"
          width={220}
          height={65}
          className="w-24 lg:w-[220px] h-auto"
          priority
        />
      </div>
      <div className="flex items-center gap-5">
        <div className="relative text-white cursor-pointer">
          <FaBell className="text-2xl" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border text-xl">
            <FaUsers />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Lucy Williams</p>
            <small className="text-xs text-gray-300">Admin</small>
          </div>
        </div>
      </div>
    </header>
  );
}
