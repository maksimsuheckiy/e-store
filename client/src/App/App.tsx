import React from "react";
import './assets/styles/reset.css';
import './assets/styles/main.scss';
import Home from "./containers/Home/Home";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";

const App = () => {
    return(
        <>
            <Header/>
            <Home/>
            <Footer/>
        </>
    )
};

export default App