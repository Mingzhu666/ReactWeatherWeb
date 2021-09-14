import React from 'react';
import './CurrentLocation.scss';

const CurrentLocation = ({ currentLocation }) => {
  return (
    <div className="search-bar-date">{currentLocation}</div>
  );
}

export default CurrentLocation;