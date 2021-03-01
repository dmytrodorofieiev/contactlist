import * as styles from '../styles/phonebook.module.css';

export default function Section({ title, children }) {
  return (
    <section>
      <h2 className={styles.phonebookHeader}>{title}</h2>
      {children}
    </section>
  );
}
