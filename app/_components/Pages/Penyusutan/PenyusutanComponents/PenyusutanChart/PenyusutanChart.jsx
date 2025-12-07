"use client";

import "./PenyusutanChart.css";

export default function PenyusutanChart() {
  return (
    <>
      <section className="dashboard-chart mb-3">
        <div className="row g-3">
          <div className="col-12 col-lg-6">
            <div className="dashboard-chart__card shadow-sm h-100">
              <h5 className=" dashboard-chart__card-title m-0 mb-3">
                Komposisi Aset Berdasarkan Kategori
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                amet? Ipsam corrupti modi quaerat dignissimos itaque, ullam,
                numquam cum in quidem autem perferendis esse distinctio
                molestias! Nostrum et minus eligendi vitae hic. Nobis omnis ad
                unde reiciendis. Veniam, enim dicta.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="dashboard-chart__card shadow-sm h-100">
              <h5 className=" dashboard-chart__card-title m-0 mb-3">
                Nilai Buku Per Kategori Aset - 2025
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                amet? Ipsam corrupti modi quaerat dignissimos itaque, ullam,
                numquam cum in quidem autem perferendis esse distinctio
                molestias! Nostrum et minus eligendi vitae hic. Nobis omnis ad
                unde reiciendis. Veniam, enim dicta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
