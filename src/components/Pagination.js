import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="pagination">
      <button className="first-page" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        First
      </button>
      <button className="previous-page" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={pageNumber === currentPage ? 'active' : ''}>
          {pageNumber}
        </button>
      ))}
      <button className="next-page" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <button className="last-page" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
