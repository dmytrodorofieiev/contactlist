import { logIn, fetchCurrentUser } from '../redux/user/user-operations.js'
import { connect } from 'react-redux'
import * as phonebook from '../styles/phonebook.module.css'
import Section from '../components/section'

function LoginFormView({ logIn }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        logIn(credentials)
    }

    return (
        <>
            <Section title="Login">
                <form className={phonebook.phonebookForm} onSubmit={handleSubmit} method="post">

                    <div className={phonebook.phonebookInputWrap}>
                        <label className={phonebook.phonebookLabel} htmlFor="email">Your email</label>
                        <input className={phonebook.phonebookInput} type="email" name="email" id="email" />
                    </div>
                    <div className={phonebook.phonebookInputWrap}>
                        <label className={phonebook.phonebookLabel} htmlFor="password">Password</label>
                        <input className={phonebook.phonebookInput} type="password" name="password" id="password" />
                    </div>
                    <button className={phonebook.phonebookButton} type="submit">
                        Login
                </button>
                </form>
            </Section>
        </>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        logIn: credentials => dispatch(logIn(credentials)),
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    };
};

export default connect(null, mapDispatchToProps)(LoginFormView);

