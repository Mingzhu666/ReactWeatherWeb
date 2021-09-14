import React, { Component } from 'react';
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

const LocationSearchBar = ({ currentLocation }) => {
  return (
    <input 
      className='search-bar-location'
      type='search' 
      placeholder={currentLocation}
    />
  );
}

export default LocationSearchBar;