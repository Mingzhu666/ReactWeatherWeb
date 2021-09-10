import React from 'react';
import './CurrentDate.scss';

const CurrentDate = ({ currentDate }) => {
  return (
    <div className="search-bar-date">{currentDate}</div>
  );
}

export default CurrentDate;

