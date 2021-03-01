import ContactList from '../components/contactList';
import ContactForm from '../components/contactForm';
import Filter from '../components/filter';
import { connect } from 'react-redux';

function ContactsView({ contacts }) {

    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    );
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
    };
};

export default connect(mapStateToProps)(ContactsView);
