import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";


function App() {
    return (
    <React.Suspense fallback='Loading...'>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </React.Suspense>


  );
}

export default App;
