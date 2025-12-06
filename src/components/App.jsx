import './App.css';
import contactsList from '../CONSTANTS/contacts.json';
import { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contactsList');
    return savedContacts ? JSON.parse(savedContacts) : contactsList || [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(prev => prev.filter(cont => cont.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} />
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
