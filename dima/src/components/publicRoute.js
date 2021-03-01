import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getLoggedIn } from '../redux/user/user-selectors'

export default function PublicRoute({ children, redirectTo = '/', restricted = false, ...routeProps }) {
    const isLoggedIn = useSelector(getLoggedIn)
    const shouldRedirect = isLoggedIn && restricted
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    )
}