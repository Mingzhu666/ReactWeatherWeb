import React from 'react';
import './TemperatureRange.scss';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TemperatureRange = ({ rangeType, rangeTemperature }) => {
  const temperature = (rangeTemperature - 273.15).toFixed(1);

  return (
    <div className="temperature-range">
      <div className="temperature-range__type">{rangeType}</div>
      <div className="temperature-range__temperature">{temperature}℃</div>
    </div>
  );
}

export default TemperatureRange;

