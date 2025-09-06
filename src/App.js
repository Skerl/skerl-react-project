import './styles.css'
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import ThemeProvider from "./components/ThemeProvider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CommentsForm from "./components/CommentsForm";



function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Header/>
                <div className="container">
                    <div className="main-content">
                        <NewsList/>
                        <CommentsForm/>
                    </div>
                    <Sidebar/>
                </div>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;