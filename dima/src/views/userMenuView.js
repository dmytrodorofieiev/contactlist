import { useDispatch, useSelector } from 'react-redux'

import * as usersOperations from '../redux/user/user-operations.js'
import * as usersSelectors from '../redux/user/user-selectors.js'
import styles from '../styles/userMenu.module.css'

export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(usersSelectors.getName)
    return (
        <li className={styles.userMenu}>
            <span className={styles.userMenuName}>{name}</span>

            <button className={styles.userMenuButton} onClick={() => {
                dispatch(usersOperations.logOut())
            }}> LogOut</button >
        </li>
    )

}