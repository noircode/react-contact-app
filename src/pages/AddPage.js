/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../utils/data';
import ContactInput from '../components/ContactInput';

function AddPage() {
  const navigate = useNavigate();

  function onAddContactHandler(contact) {
    addContact(contact);
    navigate('/');
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}

export default AddPage;
