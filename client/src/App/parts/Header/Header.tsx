import React from "react";
import styles from './Header.scss';
import rootStyles from '../../assets/styles/main.scss';
import Logo from '../../assets/images/logo.svg';
import CartIcon from '../../assets/images/header/cart.svg';
import ProfileIcon from '../../assets/images/header/profile.svg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={`${styles['header__inner']} ${rootStyles['wrapper']}`}>
                <Link to="/">
                    <Logo className={styles['header__logo']}/>
                </Link>
                <nav className={styles['nav']}>
                    <Link to="/registration" className={styles['nav__link']}>Registration</Link>
                    <Link to="/login" className={styles['nav__link']}>Authorization</Link>
                </nav>
                <div className={styles['user-panel']}>
                    <Link to="/cart">
                        <CartIcon className={styles['user-panel__icon']}/>
                    </Link>
                    <Link to="/profile">
                        <ProfileIcon className={styles['user-panel__icon']}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header