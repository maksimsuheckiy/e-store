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
const domain = 'dev-ojk4ka18g2axrif7.us.auth0.com';
const clientID = 'UtFdSikiO8rTpirqM9BGyQ6Kt8jsW4PD';

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Auth0Provider
                    domain={domain}
                    clientId={clientID}
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