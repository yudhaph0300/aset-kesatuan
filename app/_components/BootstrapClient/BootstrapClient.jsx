"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Import Bootstrap JS hanya di client
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("✅ Bootstrap JS loaded successfully");
      })
      .catch((err) => {
        console.error("❌ Error loading Bootstrap JS:", err);
      });
  }, []);

  return null; // Tidak menampilkan elemen apa pun
}
