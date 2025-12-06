import Contact from './Contact/Contact';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.trim().toLowerCase());

  const filtered = contacts.filter(c => c?.name.toLowerCase().includes(filter));
  return (
    <ul className={css.containerList}>
      {filtered.map(con => {
        return <Contact key={con.id} con={con} />;
      })}
    </ul>
  );
};

export default ContactList;
