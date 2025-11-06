"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const pageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/profile") return "Profile";
    return "Admin Panel";
  };

  return (
    <header className="bg-white shadow-sm py-3 px-4 border-bottom">
      <h5 className="fw-semibold mb-0">{pageTitle()}</h5>
    </header>
  );
}
