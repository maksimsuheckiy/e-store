import React, {ComponentType} from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../components/Loader/Loader";

type AuthenticationGuard = {
    component: ComponentType;
}

const AuthenticationGuard = ({ component }: AuthenticationGuard) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <Loader />
    })

    return <Component/>
}

export default AuthenticationGuard