"use client";

import "./Header.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const pageTitle = () => {
    if (pathname === "/") return "Dashboard";
    if (pathname === "/profile") return "Profile";
    return "Admin Panel";
  };

  return (
    <header className="header">
      <h5 className="header__title">{pageTitle()}</h5>

      <div className="header__actions">
        <div className="header__search-wrapper">
          <input
            className="header__search"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <button className="header__admin-btn">
          <i className="bi bi-person-circle"></i>
          <span>Admin</span>
        </button>
      </div>
    </header>
  );
}
