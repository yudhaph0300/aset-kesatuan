"use client";
import "./Pagination.css";

export default function Pagination() {
  return (
    <div className="pagination">
      {/* LEFT : Pagination Buttons */}
      <div className="pagination__controls">
        <button className="pagination__button">Prev</button>

        <button className="pagination__button pagination__button--active">
          1
        </button>
        <button className="pagination__button">2</button>
        <button className="pagination__button">3</button>

        <span className="pagination__dots">...</span>

        <button className="pagination__button">10</button>

        <button className="pagination__button">Next</button>
      </div>

      {/* RIGHT : Go to Page */}
      <div className="pagination__goto">
        <span className="pagination__goto-label">Go to page:</span>
        <input type="number" min="1" className="pagination__goto-input" />
        <button className="pagination__goto-button">Go</button>
      </div>
    </div>
  );
}
