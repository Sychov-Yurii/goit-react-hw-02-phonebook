import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    // Додайте логіку для збереження контакту в стані або передачі даних на сервер

    // Після збереження можна очистити поля форми
    this.setState({ name: '', number: '' });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    const { name, number, contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>

        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={this.handleFilterChange}
        />

        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
