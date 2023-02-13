import React from "react";
import Button from "../Button/Button";
import {useForm, SubmitHandler} from "react-hook-form";
import styles from './AuthForm.scss';

type Inputs = {
    email: string;
    password: string;
}

const AuthForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
            <div className={styles['form__field']}>
                <label className={styles['form__label']}>
                    Email <span className={styles['form__field--required']}>*</span>
                </label>
                <input {...register("email")} type="email" placeholder="Your email" className={styles['form__input']}/>
                {errors.email && <span className={styles['form__error-text']}>This field is required</span>}
            </div>
            <div className={styles['form__field']}>
                <label className={styles['form__label']}>
                    Password <span className={styles['form__field--required']}>*</span>
                </label>
                <input {...register("password")} type="password" placeholder="Your password" className={styles['form__input']}/>
                {errors.password && <span className={styles['form__error-text']}>This field is required</span>}
            </div>
            <Button type="submit" text="Sign In" isPrimary={true} />
        </form>
    )
}

export default AuthForm