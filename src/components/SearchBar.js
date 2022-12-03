/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasaran nama"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />

  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
