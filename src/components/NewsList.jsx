// src/components/NewsList.jsx
import React, { useState, useMemo } from "react";
import { news } from "../data";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

export default function NewsList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Кількість новин на сторінці

    // Розраховуємо загальну кількість сторінок
    const totalPages = Math.ceil(news.length / itemsPerPage);

    // Отримуємо новини для поточної сторінки
    const currentNews = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return news.slice(startIndex, endIndex);
    }, [currentPage, itemsPerPage]);

    // Обробник зміни сторінки
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Прокрутка до верху списку новин
        //window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="news-list">
            {/* Список новин */}
            <div className="news-items">
                {currentNews.map(item => (
                    <NewsCard key={item.id} newsItem={item} />
                ))}
            </div>

            {/* Пагінація */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    totalItems={news.length}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}