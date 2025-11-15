"use client";

import "./DashboardChart.css";
import DashboardKomposisiChart from "./DashboardKomposisiChart";
import DashboardPenyusutanChart from "./DashboardPenyusutanChart";

export default function DashboardChart() {
  return (
    <>
      <section className="dashboard-chart mb-3">
        <div className="row g-3">
          <div className="col-12 col-lg-6">
            <div className="dashboard-chart__card shadow-sm h-100">
              <h5 className=" dashboard-chart__card-title m-0 mb-3">
                Komposisi Aset Berdasarkan Kategori
              </h5>

              <DashboardKomposisiChart />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="dashboard-chart__card shadow-sm h-100">
              <h5 className=" dashboard-chart__card-title m-0 mb-3">
                Penyusutan Pertahun
              </h5>

              <DashboardPenyusutanChart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
