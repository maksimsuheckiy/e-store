import React from "react";
import styles from "./Alert.scss";

type Alert = {
    type: 'success' | 'error' | 'warning',
    message: string
}

const Alert = ({type, message}: Alert) => {
    switch (type) {
        case 'success':
            return (
                <div className={`${styles.alert} ${styles['alert--success']}`}>
                    <p className={`${styles['alert__message']} ${styles['alert__message--success']}`}>{message}</p>
                </div>
            )
        case 'error':
            return (
                <div className={`${styles.alert} ${styles['alert--error']}`}>
                    <p className={`${styles['alert__message']} ${styles['alert__message--error']}`}>{message}</p>
                </div>
            )
        case 'warning':
            return (
                <div className={`${styles.alert} ${styles['alert--warning']}`}>
                    <p className={`${styles['alert__message']} ${styles['alert__message--warning']}`}>{message}</p>
                </div>
            )
    }
}

export default Alert