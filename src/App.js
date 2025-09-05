import React, {useState} from "react";
import './styles.css'
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import NewsCard from "./components/NewsCard";
import ThemeProvider from "./components/ThemeProvider";
import { news } from "./data";
import theme from "tailwindcss/defaultTheme";



function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Header/>
                <div className="container">
                    <div className="main-content">
                        <NewsList/>
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
            </ThemeProvider>

        </div>
    );


}

export default App;