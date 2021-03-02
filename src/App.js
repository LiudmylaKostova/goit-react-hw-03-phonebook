import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }
  addContact = ({ name, number }) => {
    this.setState(prevState => {
      if (this.state.contacts.some(contact => contact.name === name)) {
        alert(`${name} already exists in contacts`);
      } else {
        const newContact = { id: uuidv4(), name, number };
        return { contacts: [newContact, ...prevState.contacts] };
      }
    });
  };

  onChangeFilter = filter => {
    this.setState({ filter });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onAddContact={this.addContact}></ContactForm>
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length > 1 ? (
          <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        ) : null}
        <ContactsList
          contacts={filteredContacts}
          deleteContactBtn={this.removeContact}
        ></ContactsList>
      </>
    );
  }
}

export default App;
