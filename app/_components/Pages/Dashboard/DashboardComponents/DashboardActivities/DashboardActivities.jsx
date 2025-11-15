"use client";
import "./DashboardActivities.css";

export default function DashboardActivities() {
  const activitiesData = [
    {
      status: "penambahan",
      title: "Laptop Dell XPS 15",
      icon: "bi-box-seam-fill",
      date: "2025-04-28",
      bgColor: "#E5F3FF",
    },
    {
      status: "penambahan",
      title: "Laptop Dell XPS 15",
      icon: "bi-box-seam-fill",
      date: "2025-04-28",
      bgColor: "#E5F3FF",
    },
    {
      status: "penambahan",
      title: "Laptop Dell XPS 15",
      icon: "bi-box-seam-fill",
      date: "2025-04-28",
      bgColor: "#E5F3FF",
    },
    {
      status: "penambahan",
      title: "Laptop Dell XPS 15",
      icon: "bi-box-seam-fill",
      date: "2025-04-28",
      bgColor: "#E5F3FF",
    },
  ];
  return (
    <>
      <section className="dashboard-activities">
        <div className="dashboard-activities__card shadow-sm">
          <h5 className="dashboard-activities__card-title m-0 mb-3">
            Aktivitas Terbaru
          </h5>
          {activitiesData.map((item, index) => (
            <div className="dashboard-activities__card-list" key={index}>
              <div className="d-flex gap-3">
                <div
                  className="dashboard-activities__card-icon"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <i className={`text-primary bi ${item.icon}`}></i>
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0" style={{ fontWeight: "500" }}>
                    {item.status === "penambahan"
                      ? "Aset Baru Ditambahkan: "
                      : ""}
                    {item.title}
                  </p>
                  <p className="m-0">
                    <small>{item.date}</small>
                  </p>
                </div>
              </div>
              <hr className="m-0 p-0 my-2 text-muted" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
