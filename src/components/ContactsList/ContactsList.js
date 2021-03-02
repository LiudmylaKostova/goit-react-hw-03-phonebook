import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContactBtn }) => {
  return (
    <ul className={styles.ul}>
      {contacts.map(contact => (
        <li className={styles.li} key={contact.id}>
          <span className={styles.name}>{contact.name}</span>
          <span className={styles.number}>{contact.number}</span>
          <button
            className={styles.button}
            onClick={() => deleteContactBtn(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  ContactsList: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContactBtn: PropTypes.func,
};

export default ContactsList;
