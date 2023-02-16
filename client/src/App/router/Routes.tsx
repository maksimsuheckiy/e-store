import React from "react";
import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";
import UserProfile from "../containers/UserProfile/Profile";
import Cart from "../containers/Cart/Cart";
import SingleProduct from "../containers/SingleProduct/SingleProduct";
import AuthenticationGuard from "./Authentication-guard";

export const RoutesConfig = [
    {
        path: "",
        component: () => <Home/>
    },
    {
        path: '/profile',
        component: () => <AuthenticationGuard component={UserProfile} />
    },
    {
        path: '/cart',
        component: () => <Cart/>
    },
    {
        path: '/product/:id',
        component: () => <SingleProduct/>
    },
    {
        path: '*',
        component: () => <NotFound/>
    }
]