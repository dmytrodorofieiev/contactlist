import Section from './section';
import { addContact, getContacts } from '../redux/contacts/contacts-operations';
import { getContactsSelector } from '../redux/contacts/contacts-selectors';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as styles from '../styles/phonebook.module.css';

function ContactForm({ contacts, addContact }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleContact = e => {
    e.preventDefault();
    const { name, number } = e.target;

    if (contacts.filter(item => item.name === name.value).length > 0) {
      alert('user already exists');
      return;
    }
    const contact = { name: name.value, number: number.value };
    addContact(contact);
  };
  return (
    <Section title="phonebook">
      <form className={styles.phonebookForm} action="" onSubmit={handleContact}>
        <div className={styles.phonebookInputWrap}>
          <label className={styles.phonebookLabel} htmlFor="name">
            Name
          </label>
          <input
            className={styles.phonebookInput}
            placeholder="Artem"
            type=" text"
            id="name"
          />
        </div>
        <div className={styles.phonebookInputWrap}>
          <label className={styles.phonebookLabel} htmlFor="number">
            Phone Number
          </label>
          <input
            className={styles.phonebookInput}
            placeholder="05084838383"
            type="text"
            id="number"
          />
        </div>
        <button className={styles.phonebookButton} type="submit">
          add contact
        </button>
      </form>
    </Section>
  );
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
