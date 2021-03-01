import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import React, { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/user/user-operations'
import { getIsLoading } from './redux/user/user-selectors'

import PrivateRoute from './components/privateRoute'
import PublicRoute from './components/publicRoute'
import Container from './components/container/container'

const ContactsView = lazy(() => import('./views/contactsView'))
const LoginFormView = lazy(() => import('./views/loginFormView'))
const SignUpFormView = lazy(() => import('./views/signUpFormView'))
const NavBarView = lazy(() => import('./views/navBarView'))

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <Container>
      {
        isLoading ? ("Loading...") : (
          <Router>
            <Switch>
              <Suspense fallback="Loading...">
                <NavBarView />
                <PrivateRoute exact path="/">
                  <ContactsView />
                </PrivateRoute>
                <PrivateRoute exact path="/contacts">
                  <ContactsView />
                </PrivateRoute>
                <PublicRoute exact path="/login" restricted>
                  <LoginFormView />
                </PublicRoute>
                <PublicRoute exact path="/signup" redirectTo='/contacts' restricted>
                  <SignUpFormView />
                </PublicRoute>
              </Suspense >
            </Switch >
          </Router >)
      }
    </Container>
  )
}