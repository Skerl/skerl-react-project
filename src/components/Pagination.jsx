import React from "react";

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       itemsPerPage,
                                       totalItems,
                                       onPageChange
                                   }) {
    const pages = [];

    // Генеруємо масив номерів сторінок
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    // Розраховуємо діапазон показаних елементів
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="pagination-container">
                        <div className="pagination">
                {/* Кнопка "Попередня" */}
                <button
                    className={`pagination-btn pagination-btn-move ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ◄
                </button>

                {/* Номери сторінок */}
                {pages.map(page => (
                    <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Кнопка "Наступна" */}
                <button
                    className={`pagination-btn pagination-btn-move ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    ►
                </button>
            </div>
        </div>
    );
}