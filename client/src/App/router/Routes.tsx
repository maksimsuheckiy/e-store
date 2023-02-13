import React from "react";
import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";
import Auth from "../containers/Auth/Auth";
import Register from "../containers/Register/Register";
import UserProfile from "../containers/UserProfile/Profile";
import Cart from "../containers/Cart/Cart";

export const RoutesConfig = [
    {
        path: "",
        component: () => <Home/>
    },
    {
        path: '/login',
        component: () => <Auth/>
    },
    {
        path: '/registration',
        component: () => <Register/>
    },
    {
        path: '/profile',
        component: () => <UserProfile/>
    },
    {
        path: '/cart',
        component: () => <Cart/>
    },
    {
        path: '*',
        component: () => <NotFound/>
    }
]