import React from "react";
import './assets/styles/reset.css';
import AppRouter from "./router/AppRouter";
import Loader from "./components/Loader/Loader";
import {useAuth0} from "@auth0/auth0-react";

const App = () => {
    const { isLoading } = useAuth0();
    return isLoading ? <Loader /> : <AppRouter/>
};

export default App