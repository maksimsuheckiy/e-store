import React from "react";
import styles from './Register.scss';
import rootStyles from "../../assets/styles/main.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
    return(
        <div className={`${styles['register']} ${rootStyles['wrapper']}`}>
            <h1 className={styles['register__title']}>Customer registration</h1>
            <div className={styles['register__inner']}>
                <div className={styles['register__form-wrap']}>
                    <div className={styles['register__form-wrap-inner']}>
                        <h4 className={styles['register__form-title']}>New customer?</h4>
                        <p className={styles['register__form-desc']}>If you don&apos;t have an account, you can create one.</p>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register