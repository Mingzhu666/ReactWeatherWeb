import React from 'react';
import './LocationSearchBar.scss';

const LocationSearchBar = ({ searchField, handleSearchBarChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='search' 
        className='search-bar-location'
        placeholder='Search for a city'
        value={searchField}
        onChange={handleSearchBarChange}
      />
    </form>
  );
}

export default LocationSearchBar;