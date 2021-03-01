import {
    Link
} from 'react-router-dom'
import UserMenu from './userMenuView'
import AuthMenu from './authMenuView'
import { getLoggedIn } from '../redux/user/user-selectors'
import { useSelector } from 'react-redux'
import * as styles from '../styles/header.module.css'
export default function NavBarView() {
    const isLoggedIn = useSelector(getLoggedIn)

    return (

        <header >
            <ul className={styles.headerLinks}>

                {isLoggedIn && <li> <Link to="/contacts">
                    Contacts
                    </Link ></li>}

                {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </ul>
        </header >
    )
}