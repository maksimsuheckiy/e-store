import React from "react";
import styles from './Header.scss';
import rootStyles from '../../assets/styles/main.scss';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '../../assets/images/header/search.svg';
import CartIcon from '../../assets/images/header/cart.svg';
import ProfileIcon from '../../assets/images/header/profile.svg';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={`${styles['header__inner']} ${rootStyles['main-wrapper']}`}>
                <Logo className={styles['header__logo']}/>
                <div></div>
                <div className={styles['user-panel']}>
                    <SearchIcon className={styles['user-panel__icon']}/>
                    <CartIcon className={styles['user-panel__icon']}/>
                    <ProfileIcon className={styles['user-panel__icon']}/>
                </div>
            </div>
        </header>
    )
}

export default Header