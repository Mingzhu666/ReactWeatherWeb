import React from 'react';
import './LocationSearchBar.scss';

// class Location extends Component {
//   constructor() {
//     super();

//     this.state = {

//     };
//   }

//   render() {
//     return <div className="search-bar-location">
//       <input 
//         className='search'
//         type='search' 
//         placeholder={placeholder} 
//         onChange={handleChange}
//       />
//     </div>
//   }
// }

const LocationSearchBar = ({ searchField,handleSearchBarChange, handleSubmit }) => {
  console.log(searchField);
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='search' 
        className='search-bar-location'
        placeholder='Search for a city'
        value={searchField}
        // placeholder={currentLocation}
        onChange={(event) => handleSearchBarChange(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default LocationSearchBar;