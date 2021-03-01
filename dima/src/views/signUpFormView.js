import { signUp } from '../redux/user/user-operations.js'
import { connect } from 'react-redux'
import Section from '../components/section'
import phonebook from '../styles/phonebook.module.css'

function SignUpFormView({ signUp }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value

        }

        signUp(credentials)
    }
    return (
        <Section title="SignUp">
            <form className={phonebook.phonebookForm} onSubmit={handleSubmit} method="post">
                <div className={phonebook.phonebookInputWrap}>
                    <label className={phonebook.phonebookLabel} htmlFor="name">Your name</label>
                    <input className={phonebook.phonebookInput} type="name" name="name" id="name" />
                </div>
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
    )

}

const mapDispatchToProps = dispatch => {
    return {
        signUp: credentials => dispatch(signUp(credentials)),
    };
};

export default connect(null, mapDispatchToProps)(SignUpFormView);

