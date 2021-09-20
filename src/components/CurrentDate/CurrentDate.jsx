import React from 'react';
import './CurrentDate.scss';

const CurrentDate = ({ currentDate, timezone }) => {
  const current = new Date(currentDate * 1000).toLocaleDateString('en-US', timezone);

  return (
    <div className="search-bar-date">{current}</div>
  );
}

export default CurrentDate;