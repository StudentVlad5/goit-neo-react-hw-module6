import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.containerList}>
      {contacts.map(con => {
        return <Contact key={con.id} con={con} deleteContact={deleteContact} />;
      })}
    </ul>
  );
};

export default ContactList;
