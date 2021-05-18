import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss';

const ContactItem = ({ name, number, onDeleteItem, id }) => {
  const handleDelete = () => {
    onDeleteItem(id);
  };

  return (
    <li className={styles.ContactItem}>
      <span className={styles.ContactItem__text}>
        {name}: {number}
      </span>
      <button
        className={styles.ContactItem__btn}
        onClick={handleDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
export default ContactItem;
