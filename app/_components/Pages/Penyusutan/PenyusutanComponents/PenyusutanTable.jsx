"use client";
import Pagination from "@/app/_components/Pagination/Pagination";
import "./PenyusutanTable.css";

export default function PenyusutanTable() {
  return (
    <>
      <div className="penyusutan-table mb-3">
        <div className="penyusutan-table__header p-3">
          <h5 className="penyusutan-table__header-title">Tabel Penyusutan</h5>
          {/* <button className="btn-primary-custom">
            <i className="bi bi-plus-circle me-2"></i>Tambah Jadwal
          </button> */}
        </div>

        <div className="penyusutan-table__buttons p-3">
          <div className="penyusutan-table__buttons__filter-container">
            {/* SEARCH */}
            <div className="penyusutan-table__buttons__search-box">
              <input type="text" placeholder="Search..." />
              <i className="bi bi-search penyusutan-table__buttons__search-box-search-icon"></i>
            </div>

            <div className="penyusutan-table__buttons__custom-select">
              <select>
                <option value="">Tahun</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Furniture">Furniture</option>
              </select>
              <i className="bi bi-chevron-down penyusutan-table__buttons__custom-select-select-icon"></i>
            </div>
            <div className="penyusutan-table__buttons__custom-select">
              <select>
                <option value="">Metode</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Furniture">Furniture</option>
              </select>
              <i className="bi bi-chevron-down penyusutan-table__buttons__custom-select-select-icon"></i>
            </div>

            {/* FILTER: STATUS */}
            <div className="penyusutan-table__buttons__custom-select">
              <select>
                <option value="">Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
              <i className="bi bi-chevron-down penyusutan-table__buttons__custom-select-select-icon"></i>
            </div>
          </div>
        </div>

        <div className="penyusutan-table__overview p-3">
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="penyusutan-table__overview__icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <span className="penyusutan-table__overview__title">
                Total Aset Tersusut: 1230
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="penyusutan-table__overview__icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <span className="penyusutan-table__overview__title">
                Total Nilai Buku: 923000000
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="penyusutan-table__overview__icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <span className="penyusutan-table__overview__title">
                Metode Umum: Garis Lurus
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="penyusutan-table__overview__icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <span className="penyusutan-table__overview__title">
                Tahun Data: 2025
              </span>
            </div>
          </div>
        </div>

        <div className="penyusutan-table__content p-3">
          <table className="penyusutan-table__content__table-custom">
            <thead>
              <tr>
                <th>No</th>
                <th>Kode</th>
                <th>Nama</th>
                <th className="text-center">Nilai Awal</th>
                <th className="text-center">Nilai Buku</th>
                <th className="text-center">Status</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPenyusutan.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.kode}</td>
                  <td>{item.nama}</td>
                  <td className="text-center">{item.nilai_awal}</td>
                  <td className="text-center">{item.nilai_buku}</td>
                  <td>
                    <span className="penyusutan-table__content__table-custom--status">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div
                      className="d-flex gap-2 justify-content-center"
                      style={{ fontSize: "18px" }}
                    >
                      <i className="bi bi-info-circle text-info"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="penyusutan-table__footer p-3">
          <Pagination />
        </div>
      </div>
    </>
  );
}

const dataPenyusutan = [
  {
    id: 1,
    kode: "AST-001",
    nama: "Laptop Dell Inspiron 14",
    nilai_awal: 10000000,
    nilai_buku: 7500000,
    status: "Aktif",
  },
  {
    id: 2,
    kode: "AST-002",
    nama: "Printer Epson L3110",
    nilai_awal: 2500000,
    nilai_buku: 1800000,
    status: "Aktif",
  },
  {
    id: 3,
    kode: "AST-003",
    nama: "Monitor ASUS 24 inch",
    nilai_awal: 3200000,
    nilai_buku: 2600000,
    status: "Tidak Aktif",
  },
  {
    id: 4,
    kode: "AST-004",
    nama: "Router TP-Link Archer C6",
    nilai_awal: 1500000,
    nilai_buku: 1300000,
    status: "Aktif",
  },
  {
    id: 5,
    kode: "AST-005",
    nama: "AC Daikin 1 PK",
    nilai_awal: 5500000,
    nilai_buku: 4000000,
    status: "Aktif",
  },
  {
    id: 6,
    kode: "AST-006",
    nama: "Proyektor BenQ MX560",
    nilai_awal: 7000000,
    nilai_buku: 5200000,
    status: "Aktif",
  },
  {
    id: 7,
    kode: "AST-007",
    nama: "CCTV Hikvision Dome",
    nilai_awal: 1800000,
    nilai_buku: 1400000,
    status: "Tidak Aktif",
  },
  {
    id: 8,
    kode: "AST-008",
    nama: "Server Lenovo ThinkSystem",
    nilai_awal: 25000000,
    nilai_buku: 21000000,
    status: "Aktif",
  },
  {
    id: 9,
    kode: "AST-009",
    nama: "Switch Cisco 24 Port",
    nilai_awal: 8500000,
    nilai_buku: 6900000,
    status: "Aktif",
  },
  {
    id: 10,
    kode: "AST-010",
    nama: "Laptop HP ProBook 450 G6",
    nilai_awal: 12000000,
    nilai_buku: 9500000,
    status: "Aktif",
  },
];
