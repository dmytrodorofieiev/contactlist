import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getLoggedIn } from '../redux/user/user-selectors'

export default function PrivateRoute({ children, ...props }) {
    const isLoggedIn = useSelector(getLoggedIn)
    return (
        <Route {...props}>
            {isLoggedIn ? children : <Redirect to="login" />}
        </Route>
    )
}