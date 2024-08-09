import { Component } from 'react';

import { nanoid } from 'nanoid';

import { Phonebook } from './Phonebook/Phonebook';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = initialState;

  hasContact = ({ name }) =>
    this.state.contacts.some(contact => contact.name === name);

  addContact = newContact => {
    if (this.hasContact(newContact))
      return alert(`${newContact.name} is already in contacts`);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  getFiltered = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );

  handleFilter = evt => this.setState({ filter: evt.target.value });
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // flexDirection: 'column',
          gap: '120px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} handleFilter={this.handleFilter} />
          <Contacts
            contacts={this.getFiltered()}
            handleDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
