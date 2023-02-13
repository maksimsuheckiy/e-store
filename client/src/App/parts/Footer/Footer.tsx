import React from "react";
import styles from './Footer.scss';
import rootStyles from '../../assets/styles/main.scss';
import FacebookIcon from '../../assets/images/social/facebook.svg';
import InstagramIcon from '../../assets/images/social/instagram.svg';
import PayPalIcon from '../../assets/images/payment/paypal.svg';
import VisaIcon from '../../assets/images/payment/visa.svg';
import MaestroIcon from '../../assets/images/payment/maestro.svg';
import DiscoveryIcon from '../../assets/images/payment/discover.svg';
import AmericanExpressIcon from '../../assets/images/payment/american-express.svg';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={rootStyles['main-wrapper']}>
                <div className={styles['footer__row']}>

                </div>
                <div className={styles['footer__row']}>
                    <div className={styles['social']}>
                        <a href="#" target="_blank">
                            <FacebookIcon className="social__icon"/>
                        </a>
                        <a href="#" target="_blank">
                            <InstagramIcon className="social__icon"/>
                        </a>
                    </div>
                    <div className={styles['payment']}>
                        <a href="#">
                            <PayPalIcon className="payment__icon"/>
                        </a>
                        <a href="#">
                            <VisaIcon className="payment__icon"/>
                        </a>
                        <a href="#">
                            <MaestroIcon className="payment__icon"/>
                        </a>
                        <a href="#">
                            <DiscoveryIcon className="payment__icon"/>
                        </a>
                        <a href="#">
                            <AmericanExpressIcon className="payment__icon"/>
                        </a>
                    </div>
                    <p className={styles['footer__copyright']}>
                        Copyright © 2023 Shop Ltd.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer