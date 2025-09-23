"use client";

import { useState, useEffect } from "react";
import Dashboard from "@/component/dashboard/dashboard";
import MobileResponsivePage from "@/component/dashboard/mobileResponsivePage";

export default function ResponsiveDashboard() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024); // >=1024px = desktop
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? <Dashboard /> : <MobileResponsivePage />}
    </>
  );
}
