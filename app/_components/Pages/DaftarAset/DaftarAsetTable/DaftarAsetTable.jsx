"use client";

import "./DaftarAsetTable.css";

export default function DaftarAsetTable() {
  return (
    <>
      <div className="daftar-aset-table">
        <div className="daftar-aset-table__header p-3">
          <h5 className="daftar-aset-table__header-title">Tabel Aset</h5>
          <button className="btn-primary-custom">
            <i className="bi bi-plus-circle me-2"></i>Tambah Aset
          </button>
        </div>

        <div className="daftar-aset-table__buttons p-3">
          <div className="daftar-aset-table__buttons__filter-container">
            {/* SEARCH */}
            <div className="daftar-aset-table__buttons__search-box">
              <input type="text" placeholder="Search..." />
              <i className="bi bi-search daftar-aset-table__buttons__search-box-search-icon"></i>
            </div>

            {/* FILTER: KATEGORI */}
            <div className="daftar-aset-table__buttons__custom-select">
              <select>
                <option value="">Kategori</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Furniture">Furniture</option>
              </select>
              <i className="bi bi-chevron-down daftar-aset-table__buttons__custom-select-select-icon"></i>
            </div>

            {/* FILTER: LOKASI */}
            <div className="daftar-aset-table__buttons__custom-select">
              <select>
                <option value="">Lokasi</option>
                <option value="Lab">Lab</option>
                <option value="Ruang Guru">Ruang Guru</option>
              </select>
              <i className="bi bi-chevron-down daftar-aset-table__buttons__custom-select-select-icon"></i>
            </div>

            {/* FILTER: STATUS */}
            <div className="daftar-aset-table__buttons__custom-select">
              <select>
                <option value="">Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
              <i className="bi bi-chevron-down daftar-aset-table__buttons__custom-select-select-icon"></i>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="daftar-aset-table__content p-3">
          <table className="daftar-aset-table__content__table-custom">
            <thead>
              <tr>
                <th>No</th>
                <th>Kode</th>
                <th>Nama</th>
                <th className="text-center">Kondisi</th>
                <th className="text-center">Status</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataAset.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.kode}</td>
                  <td>{item.nama}</td>
                  <td>
                    <span className="daftar-aset-table__content__table-custom--kondisi">
                      {item.kondisi}
                    </span>
                  </td>
                  <td>
                    <span className="daftar-aset-table__content__table-custom--status">
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
      </div>
    </>
  );
}

const dataAset = [
  {
    id: 1,
    kode: "AST-001",
    nama: "Laptop Dell Inspiron 14",
    kondisi: "Baik",
    status: "Aktif",
  },
  {
    id: 2,
    kode: "AST-002",
    nama: "Proyektor Epson EB-X05",
    kondisi: "Rusak Ringan",
    status: "Aktif",
  },
  {
    id: 3,
    kode: "AST-003",
    nama: "Kursi Kantor Ergonomis",
    kondisi: "Cukup",
    status: "Nonaktif",
  },
  {
    id: 4,
    kode: "AST-004",
    nama: "PC Rakitan Lab Komputer",
    kondisi: "Baik",
    status: "Aktif",
  },
  {
    id: 5,
    kode: "AST-005",
    nama: "Printer LaserJet HP 1020",
    kondisi: "Rusak Berat",
    status: "Nonaktif",
  },
  {
    id: 6,
    kode: "AST-006",
    nama: "Meja Belajar Kayu Jati",
    kondisi: "Baik",
    status: "Aktif",
  },
  {
    id: 7,
    kode: "AST-007",
    nama: "AC Panasonic 1 PK",
    kondisi: "Cukup",
    status: "Aktif",
  },
  {
    id: 8,
    kode: "AST-008",
    nama: "CCTV HikVision Indoor",
    kondisi: "Baik",
    status: "Aktif",
  },
  {
    id: 9,
    kode: "AST-009",
    nama: "Whiteboard Magnetik 2m",
    kondisi: "Baik",
    status: "Aktif",
  },
  {
    id: 10,
    kode: "AST-010",
    nama: "Speaker Portable Meeting",
    kondisi: "Rusak Ringan",
    status: "Nonaktif",
  },
];
