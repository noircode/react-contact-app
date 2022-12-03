import React from 'react';
import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ id, onDelete }) {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/control-has-associated-label, react/button-has-type, react/jsx-filename-extension
  return <button className="contact-item__delete" onClick={() => onDelete(id)}><FiDelete /></button>;
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
