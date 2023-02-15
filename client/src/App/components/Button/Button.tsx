import React from "react";
import styles from './Button.scss';

type Button = {
    type: 'submit' | 'reset' | 'button';
    text: string;
    isPrimary: boolean;
    smaller?: boolean;
    onClick?: () => void;
}

const Button = (props: Button) => {
    const {type, text, isPrimary, smaller, onClick} = props;

    return (
        <button type={type}
                className={`
                    ${styles.button} 
                    ${isPrimary ? `${styles['button--primary']}` : `${styles['button--secondary']}`}
                    ${smaller && `${styles['button--smaller']}`}
                `}
                onClick={onClick}>
            {text}
        </button>
    )
}

export default Button