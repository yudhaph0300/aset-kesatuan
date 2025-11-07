"use client";
import "./DashboardOverview.css";

export default function DashboardOverview() {
  const dataOverview = [
    {
      title: "Total Aset",
      icon: "bi-box-seam",
      key: "Aset Keseluruhan",
      value: "1250",
      bgColor: "#E5F3FF",
    },
    {
      title: "Dalam Perbaikan",
      icon: "bi-tools",
      key: "Diperbaiki",
      value: "1250",
      bgColor: "#FFF9A8",
    },
    {
      title: "Total Nilai Aset",
      icon: "bi-coin",
      key: "Miliar Rupiah",
      value: "1.4",
      bgColor: "#9FFFCF",
    },
    {
      title: "Penyusutan",
      icon: "bi-graph-down",
      key: "penyusutan",
      value: "1250",
      bgColor: "#FFB9BB",
    },
  ];
  return (
    <>
      <section className="dashboard-overview mb-3">
        <div className="row g-3">
          {dataOverview.map((item, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="dashboard-overview__card shadow-sm h-100">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-semibold dashboard-overview__card-title m-0 text-muted">
                    {item.title}
                  </h5>

                  <div
                    className="dashboard-overview__card-icon"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="fw-bold p-0 m-0">{item.value}</h4>
                  <p className="text-muted p-0 m-0">
                    <small>{item.key}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
