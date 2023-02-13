import React from "react";
import styles from './Button.scss';

type Button = {
    type: 'submit' | 'reset' | 'button';
    text: string;
    isPrimary: boolean;
    onClick?: () => void;
}

const Button = (props: Button) => {
    const {type, text, isPrimary, onClick} = props;

    return (
        <button type={type}
                className={`${styles.button} ${isPrimary ? `${styles['button--primary']}` : `${styles['button--secondary']}`}`}
                onClick={onClick}>
            {text}
        </button>
    )
}

export default Button