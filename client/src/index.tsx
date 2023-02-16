import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./App/store/store";
import {Auth0Provider} from "@auth0/auth0-react";
import App from "./App/App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Auth0Provider
                    domain={domain!}
                    clientId={clientID!}
                    authorizationParams={{
                        redirect_uri: window.location.origin
                    }}
                >
                    <App/>
                </Auth0Provider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);