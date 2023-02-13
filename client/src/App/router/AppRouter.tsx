import React from "react";
import {Routes, Route} from 'react-router-dom';
import {RoutesConfig} from './Routes';
import Layout from "../containers/Layout/Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {RoutesConfig.map(route => (
                    <Route
                        key={route.path}
                        path={route.path === '' ? '' : route.path}
                        index={route.path === '/'}
                        element={<route.component/>}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default AppRouter