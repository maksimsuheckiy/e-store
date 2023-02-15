import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";
import rootStyles from "../../assets/styles/main.scss";

const Layout = () => {
    return (
        <div className={rootStyles.page}>
            <main className={`${rootStyles.main}`}>
                <Header/>
                <div className={rootStyles.wrapper}>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout