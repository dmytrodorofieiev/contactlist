import { connect } from 'react-redux';
import setFilter from '../redux/filter/filter-actions';
import * as styles from '../styles/phonebook.module.css';

function Filter({ setFilter }) {
  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  };

  return (
    <div className={styles.phonebookInputWrap}>
      <label className={styles.phonebookLabel} htmlFor=" filter">
        Filter
      </label>
      <input
        className={styles.phonebookInput}
        type="text"
        id="filter"
        onChange={changeFilter}
      />
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => dispatch(setFilter(value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
