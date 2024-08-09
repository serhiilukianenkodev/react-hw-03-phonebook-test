import css from './Contacts.module.css';

export const Contacts = ({ contacts, handleDelete }) => (
  <ul className={css.contact_list}>
    {contacts.map(contact => (
      <li className={css.contact} key={contact.id}>
        <span className={css.name}>{contact.name} </span>
        <span>{contact.number}</span>
        <button className={css.button} onClick={() => handleDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
