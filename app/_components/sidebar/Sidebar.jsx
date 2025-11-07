"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./Sidebar.css";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: "bi-grid",
    },
    {
      name: "Daftar Aset",
      path: "/daftar-aset",
      icon: "bi-box-seam",
    },
    {
      name: "Pemeliharaan",
      path: "/pemeliharaan",
      icon: "bi-tools",
    },
    {
      name: "Penyusutan",
      path: "/penyusutan",
      icon: "bi-graph-down",
    },
    {
      name: "Peminjaman",
      path: "/peminjaman",
      icon: "bi-card-checklist",
    },
    {
      name: "Pengaturan",
      path: "/pengaturan",
      icon: "bi-gear",
    },
  ];

  return (
    <aside className={`sidebar ${isMobile ? "sidebar--mobile" : ""}`}>
      <div className="sidebar__header">
        {!isMobile ? (
          <div className="sidebar__logo">
            <Image src="/assets/logo.png" alt="Logo" width={28} height={28} />
            <h5 className="sidebar__title">Aset Management</h5>
          </div>
        ) : (
          <Image src="/assets/logo.png" alt="Logo" width={28} height={28} />
        )}
      </div>

      <nav className="sidebar__menu">
        {menus.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`sidebar__link ${isActive ? "active" : ""}`}
              style={{
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <i className={`bi ${item.icon}`}></i>
              {!isMobile && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
