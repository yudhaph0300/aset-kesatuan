import "./globals.css";
import Sidebar from "./_components/sidebar/Sidebar.jsx";
import Header from "./_components/header/Header.jsx";
import BootstrapClient from "./_components/BootstrapClient/BootstrapClient";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: "Admin Panel",
  description: "Admin Sekolah Kesatuan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-light">
        <BootstrapClient />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 layout-content">
            <Header />
            <main style={{ padding: "20px" }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
