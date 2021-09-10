import React, { Component } from 'react';
import './Location.scss';

class Location extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return <div>
      <input
    </div>
  }
}

const Location = ({ currentLocation }) => {
  return (
    <div className="search-bar-location">
    {currentLocation}
    </div>
  );
}

export default Location;

