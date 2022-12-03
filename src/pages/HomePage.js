/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
import { deleteContact, getContacts } from '../utils/data';

function HomepageWrapper() {
  const [serachParams, setSearchParams] = useSearchParams();

  const keyword = serachParams.get('keyword');

  // eslint-disable-next-line no-shadow
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  // eslint-disable-next-line react/jsx-no-bind
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
      keyword: props.defaultKeyword || '',
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

    this.props.keywordChange(keyword);
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

export default HomepageWrapper;
