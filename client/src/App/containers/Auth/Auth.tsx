import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Button from "../../components/Button/Button";
import styles from "./Auth.scss";
import rootStyles from "../../assets/styles/main.scss";

const Auth = () => {
    return(
        <div className={`${styles['auth']} ${rootStyles['wrapper']}`}>
            <h1 className={styles['auth__title']}>Customer login</h1>
            <div className={styles['auth__row']}>
                <div className={styles['auth__col']}>
                    <div className={styles['auth__col-inner']}>
                        <h4 className={styles['auth__col-title']}>Registered Customers</h4>
                        <p className={styles['auth__col-desc']}>If you have an account, sign in with your email address.</p>
                        <AuthForm />
                    </div>
                </div>
                <div className={styles['auth__col']}>
                    <div className={styles['auth__col-inner']}>
                        <h4 className={styles['auth__col-title']}>New Customer?</h4>
                        <p className={styles['auth__col-desc']}>Creating an account has many benefits:</p>
                        <ul className={styles['auth-list']}>
                            <li className={styles['auth-list__item']}>Check out faster</li>
                            <li className={styles['auth-list__item']}>Keep more than one address</li>
                            <li className={styles['auth-list__item']}>Track orders and more</li>
                        </ul>
                        <Button type="button" text="Create An Account" isPrimary={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth