import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import styles from "./Profile.scss";

const UserProfile = () => {
    const {user, isAuthenticated} = useAuth0();

    console.log(user);

    return (
        isAuthenticated ?
            <div className={styles['profile-wrap']}>
                {JSON.stringify(user)}
            </div> : null
    )
}

export default UserProfile