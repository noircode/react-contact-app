/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ContactList from '../components/ContactList';
import { deleteContact, getContacts } from '../utils/data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
    };

    this.onDeleteHander = this.onDeleteHander.bind(this);
  }

  onDeleteHander(id) {
    deleteContact(id);

    this.setState(() => ({
      contacts: getContacts(),
    }));
  }

  render() {
    return (
      <section>
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHander} />
      </section>
    );
  }
}

export default HomePage;
