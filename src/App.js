import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MyForm from './components/MyForm/MyForm';
import {Filter} from './components/Filter/Filter';
import {ContactsList} from './components/ContactsList/ContactsList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
    console.log(contact);
  };

  onFilterInput = e => {
    const value = e.currentTarget.value;
    this.setState({ filter: value });
  };

  onFilterChange = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(i =>
      i.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  onDeleteContactClick = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const contacts = this.onFilterChange();
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <MyForm onSubmit={this.onSubmitForm} />
        <Filter value={filter} onFilter={this.onFilterInput} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={contacts}
          onDeleteClick={this.onDeleteContactClick}
        />
      </>
    );
  }
}

export default App;