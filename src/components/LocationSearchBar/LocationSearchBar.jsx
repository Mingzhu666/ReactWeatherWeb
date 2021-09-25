import React from 'react';
import './LocationSearchBar.scss';

const LocationSearchBar = ({ searchField, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='search' 
        className='search-bar-location'
        placeholder='Search for a city'
        value={searchField}
        onChange={handleChange}
      />
    </form>
  );
}

export default LocationSearchBar;