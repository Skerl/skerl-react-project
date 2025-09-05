import React from "react";

export default function NewsCard({newsItem}) {
    return (
        <section className="hero-news">
            <div className="hero-content">
                <div className="hero-meta">
                    <span>{newsItem.location}</span>
                    <span>{newsItem.time}</span>
                    <span>{newsItem.views}</span>
                </div>

                <h2 className="hero-title">{newsItem.title}</h2>
                <p className="hero-excerpt">{newsItem.excerpt}</p>
            </div>
        </section>
    )
}

