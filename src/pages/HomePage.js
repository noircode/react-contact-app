/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
import { deleteContact, getContacts } from '../utils/data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
      keyword: '',
    };

    this.onDeleteHander = this.onDeleteHander.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHander(id) {
    deleteContact(id);

    this.setState(() => ({
      contacts: getContacts(),
    }));
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => ({
      keyword,
    }));
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => contact.name
      .toLocaleLowerCase().includes(
        this.state.keyword.toLocaleLowerCase(),
      ));

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={contacts} onDelete={this.onDeleteHander} />
      </section>
    );
  }
}

export default HomePage;
