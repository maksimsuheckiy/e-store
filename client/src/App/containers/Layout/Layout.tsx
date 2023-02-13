import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";
import rootStyles from "../../assets/styles/main.scss";

const Layout = () => {
    return(
        <>
            <Header/>
            <main className={`${rootStyles.main} ${rootStyles.wrapper}`}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout