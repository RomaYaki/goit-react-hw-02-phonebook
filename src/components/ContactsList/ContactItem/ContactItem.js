import React from 'react';
import styles from './ContactItem.module.css';
const ContactItem = ({ contacts, onDeleteClick }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.item}>
        {name}: {number}
        <button
          className={styles.contacts_button}
          onClick={() => onDeleteClick(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });

export default ContactItem;
