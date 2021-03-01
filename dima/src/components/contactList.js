import Section from './section';
import shortid from 'shortid';
import { getContactsSelector } from '../redux/contacts/contacts-selectors';
import { deleteContact } from '../redux/contacts/contacts-operations';
import { getFilter } from '../redux/filter/filter-selectors';
import { connect } from 'react-redux';
import * as styles from '../styles/phonebook.module.css';

function ContactList({ contacts, filter, deleteContact }) {
  const filterContacts = () => {
    return contacts.filter(
      item => item.name && item.name.toLowerCase().includes(filter),
    );
  };

  return (
    <Section title="Contacts">
      {!!filterContacts().length ? (
        filterContacts().map(item => (
          <div className={styles.phonebookContact} key={shortid.generate()}>
            &#128519; {item.name}
            <span className="break">&#128241; {item.number}</span>
            <button onClick={() => deleteContact(item.id)}>delete</button>
          </div>
        ))
      ) : (
          <div className={styles.phonebookContact}>
            Contacts not found &#128530;
            <span className="break"> Please add some</span>
          </div>
        )}
    </Section>
  );
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    filter: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
