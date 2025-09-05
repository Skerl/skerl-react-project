import React from "react";

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">📰 Skerl1k News</div>

                <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Сulturee</a></li>
                </ul>

                <div className="serch-group">
                    <input type="text" placeholder="Search news..." className="search-input-header def-input-style"/>
                    <button className="serach-btn">🔍</button>
                </div>

            </div>
        </header>
    )
}