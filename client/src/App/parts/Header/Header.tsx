import React from "react";
import styles from './Header.scss';
import rootStyles from '../../assets/styles/main.scss';
import Logo from '../../assets/images/logo.svg';
import CartIcon from '../../assets/images/header/cart.svg';
import ProfileIcon from '../../assets/images/header/profile.svg';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import {useAuth0} from "@auth0/auth0-react";

const Header = () => {
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

    const handleAuth = (type: string) => {
        if (type === 'login') {
            return loginWithRedirect()
        } else {
            return logout()
        }
    }

    return (
        <header className={styles['header']}>
            <div className={`${styles['header__inner']} ${rootStyles['wrapper']}`}>
                <Link to="/">
                    <Logo className={styles['header__logo']}/>
                </Link>
                <div className={styles['user-panel']}>
                    {!isAuthenticated ?
                        <Button type="button" text="Sign in" isPrimary smaller onClick={() => handleAuth('login')}/> :
                        <Button type="button" text="Sign out" isPrimary smaller onClick={() => handleAuth('logout')}/>
                    }
                    <Link to="/cart">
                        <CartIcon className={styles['user-panel__icon']}/>
                    </Link>
                    {isAuthenticated && (
                        <Link to="/profile">
                            <ProfileIcon className={styles['user-panel__icon']}/>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header