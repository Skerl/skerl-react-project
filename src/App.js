import React, {useState} from "react";
import './styles.css'
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";


function App() {
    return (
    <div className="App">
    <Header />
        <div className="container">
            <div className="main-content">
               <NewsCard/>
            </div>

            <aside className="sidebar">
                <div className="top-news sidebar-widget">

                </div>
                <div className="news-latter sidebar-widget">

                </div>

                <div className="social-media sidebar-widget">

                </div>
                <div className="ad sidebar-widget">

                </div>
            </aside>
        </div>
    </div>
    );


}

export default App;