import { Link } from 'react-router-dom'

export default function AuthMenu() {

    return (
        <>
            <li>
                <Link to='/signup'>
                    Signup
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    Login
                </Link>
            </li>
        </>
    )

}