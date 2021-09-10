import React from 'react';
import './TemperatureRange.scss';

const TemperatureRange = ({ rangeType, rangeTemperature }) => {
  return (
    <div className="temperature-range">
      <div className="temperature-range__type">{rangeType}</div>
      <div className="temperature-range__temperature">{rangeTemperature}</div>
    </div>
  );
}

export default TemperatureRange;

