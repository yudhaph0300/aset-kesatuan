"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard, LuUser } from "react-icons/lu"; // ikon dari Lucide

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LuLayoutDashboard size={18} />,
    },
    { name: "Profile", path: "/profile", icon: <LuUser size={18} /> },
  ];

  return (
    <aside
      className="d-flex flex-column bg-danger text-white vh-100 position-fixed"
      style={{ width: "240px" }}
    >
      <div className="p-3 border-bottom border-light">
        <h5 className="fw-bold mb-0">Admin Panel</h5>
      </div>
      <nav className="flex-grow-1 mt-3">
        {menus.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`d-flex align-items-center gap-2 px-3 py-2 text-decoration-none ${
              pathname === item.path
                ? "bg-white text-danger fw-semibold"
                : "text-white"
            }`}
          >
            <span className="me-2">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
