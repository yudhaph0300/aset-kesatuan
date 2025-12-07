"use client";
import Pagination from "@/app/_components/Pagination/Pagination";
import "./PemeliharaanTable.css";

export default function PemeliharaanTable() {
  return (
    <>
      <div className="pemeliharaan-table">
        <div className="pemeliharaan-table__header p-3">
          <h5 className="pemeliharaan-table__header-title">Pemeliharaan</h5>
          <button className="btn-primary-custom">
            <i className="bi bi-plus-circle me-2"></i>Tambah Aset
          </button>
        </div>

        <div className="pemeliharaan-table__buttons p-3">
          <div className="pemeliharaan-table__buttons__filter-container">
            {/* SEARCH */}
            <div className="pemeliharaan-table__buttons__search-box">
              <input type="text" placeholder="Search..." />
              <i className="bi bi-search pemeliharaan-table__buttons__search-box-search-icon"></i>
            </div>

            <div className="pemeliharaan-table__buttons__custom-select">
              <select>
                <option value="">Rentang Tanggal</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Furniture">Furniture</option>
              </select>
              <i className="bi bi-chevron-down pemeliharaan-table__buttons__custom-select-select-icon"></i>
            </div>

            {/* FILTER: STATUS */}
            <div className="pemeliharaan-table__buttons__custom-select">
              <select>
                <option value="">Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
              <i className="bi bi-chevron-down pemeliharaan-table__buttons__custom-select-select-icon"></i>
            </div>
          </div>
        </div>

        <div className="pemeliharaan-table__content p-3">
          <table className="pemeliharaan-table__content__table-custom">
            <thead>
              <tr>
                <th>No</th>
                <th>Kode</th>
                <th>Nama</th>
                <th className="text-center">Tanggal</th>
                <th className="text-center">Status</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPemeliharaan.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.kode}</td>
                  <td>{item.nama}</td>
                  <td className="text-center">{item.tanggal}</td>
                  <td>
                    <span className="pemeliharaan-table__content__table-custom--status">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div
                      className="d-flex gap-2 justify-content-center"
                      style={{ fontSize: "18px" }}
                    >
                      <i className="bi bi-info-circle text-info"></i>
                      <i className="bi bi-pencil-square text-warning"></i>
                      <i className="bi bi-trash3-fill text-danger"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pemeliharaan-table__footer p-3">
          <Pagination />
        </div>
      </div>
    </>
  );
}

const dataPemeliharaan = [
  {
    id: 1,
    kode: "AST-001",
    nama: "Laptop Dell Inspiron 14",
    tanggal: "05-11-2025",
    status: "Terjadwal",
  },
  {
    id: 2,
    kode: "AST-002",
    nama: "Printer Epson L3110",
    tanggal: "10-11-2025",
    status: "Selesai",
  },
  {
    id: 3,
    kode: "AST-003",
    nama: "Monitor ASUS 24 inch",
    tanggal: "15-11-2025",
    status: "Dalam Proses",
  },
  {
    id: 4,
    kode: "AST-004",
    nama: "Router TP-Link Archer C6",
    tanggal: "18-11-2025",
    status: "Terjadwal",
  },
  {
    id: 5,
    kode: "AST-005",
    nama: "AC Daikin 1 PK",
    tanggal: "20-11-2025",
    status: "Menunggu Sparepart",
  },
  {
    id: 6,
    kode: "AST-006",
    nama: "Proyektor BenQ MX560",
    tanggal: "25-11-2025",
    status: "Dalam Proses",
  },
  {
    id: 7,
    kode: "AST-007",
    nama: "Kamera CCTV Hikvision Dome",
    tanggal: "27-11-2025",
    status: "Terjadwal",
  },
  {
    id: 8,
    kode: "AST-008",
    nama: "Server Lenovo ThinkSystem",
    tanggal: "01-12-2025",
    status: "Selesai",
  },
  {
    id: 9,
    kode: "AST-009",
    nama: "Switch Cisco 24 Port",
    tanggal: "05-12-2025",
    status: "Dalam Proses",
  },
  {
    id: 10,
    kode: "AST-010",
    nama: "Laptop HP ProBook 450 G6",
    tanggal: "08-12-2025",
    status: "Terjadwal",
  },
];
