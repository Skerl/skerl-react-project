import React from "react";


export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="top-news sidebar-widget">
                <h3 className="widget-title">📊 Top News by Rating</h3>
                <div id="top-rated-news">

                </div>
            </div>
            <div className="news-latter sidebar-widget">
                <h3 className="widget-title">📧 Newsletter</h3>
                <div className="newsletter-form">
                    <p className="newsletter-text-promotion under-title-text">Most important news in your inbox!</p>
                    <input type="email" className="newsletter-input" placeholder="Your email"/>
                    <button className="newsletter-btn" onClick="subscribe()">Subscribe</button>
                </div>
            </div>

            <div className="social-media sidebar-widget">
                <h3 className="widget-title">🌐 Social Networks</h3>
                <div className="social-links">
                    <a href="#" className="social-link social-facebook">f</a>
                    <a href="#" className="social-link social-twitter">t</a>
                    <a href="#" className="social-link social-instagram">📷</a>
                    <a href="#" className="social-link social-youtube">▶</a>
                </div>
            </div>
            <div className="ad sidebar-widget">
                <h3 className="widget-title">📢 Advertisement</h3>
                <div>
                    {/*<p className="under-title-text">Advertisement Space<br/>300x200</p>*/}
                    <img src="images.jpg" alt="Advertisement" className=""/>
                </div>
            </div>
        </aside>
    )
}