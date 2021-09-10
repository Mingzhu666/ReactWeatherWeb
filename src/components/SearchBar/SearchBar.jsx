import React, { Component } from 'react';
import CurrentLocation from '../Location';
import CurrentDate from '../CurrentDate';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor() {
    super();

    this.state ={
      currentLocation: 'Sydney',
      currentDate: 'Monday, 06 September 2021',
    }
  }

  render() {
    const { currentLocation, currentDate } = this.state;
    
    return (
      <div className="search-bar">
        <CurrentLocation className="search-bar__location" currentLocation={currentLocation} />
        <CurrentDate className="search-bar__current-date" currentDate={currentDate} />
      </div>
    );
  }
}

export default SearchBar;


