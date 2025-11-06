import "./globals.css";
import Sidebar from "./_components/sidebar/Sidebar";
import Header from "./_components/header/Header";
import BootstrapClient from "./_components/BootstrapClient/BootstrapClient";

export const metadata = {
  title: "Admin Panel",
  description: "Dashboard Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-light">
        <BootstrapClient />
        <div className="d-flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-grow-1" style={{ marginLeft: "240px" }}>
            <Header />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
