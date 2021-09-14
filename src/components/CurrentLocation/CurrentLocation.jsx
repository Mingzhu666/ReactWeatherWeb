import React from 'react';
import './CurrentLocation.scss';

const CurrentLocation = ({ currentLocation }) => {
  return (
    <div className="location">{currentLocation}</div>
  );
}

export default CurrentLocation;