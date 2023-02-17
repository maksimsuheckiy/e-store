import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import styles from "./Profile.scss";

const UserProfile = () => {
    const {user} = useAuth0();

    return (
        <div className={styles['profile']}>
            <h1 className={styles['profile__title']}>User profile</h1>
            <div className={styles['user']}>
                <div className={styles['user__photo-box']}>
                    <img src={user?.picture} alt={user?.nickname} className={styles['user__photo']}/>
                </div>
                <h1 className={styles['user__name']}>Name: {user?.nickname}</h1>
                <p className={styles['user__email']}>Email: <span className={styles['user__email--primary']}>{user?.email}</span></p>
                {!user?.email_verified && (
                    <p className={styles['user__email-verify']}>Your email is not verified! Please check your inbox.</p>
                )}
            </div>
        </div>
    )
}

export default UserProfile