"use client";
import "./DaftarAsetTable.css";

export default function DaftarAsetTable() {
  return (
    <>
      <div className="daftar-aset-table">
        <div className="daftar-aset-table__header p-3">
          <h5 className="daftar-aset-table__header-title">Tabel Aset</h5>
        </div>
        <div className="daftar-aset-table__buttons p-3">
          <div className="d-flex justify-content-between flex-column flex-lg-row gap-2 w-100">
            <div className="d-flex flex-wrap gap-2">
              <div style={{ minWidth: "120px" }}>
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="Search..."
                />
              </div>
              <div style={{ minWidth: "120px" }}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">Kategori</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ minWidth: "120px" }}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">Lokasi</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ minWidth: "120px" }}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">Status</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <button className="btn btn-primary">Tambah Aset</button>
          </div>
        </div>
        <div className="daftar-aset-table__content p-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daftar-aset-table__footer p-3"></div>
      </div>
    </>
  );
}
