import React from 'react';
import './WeatherTypeDescription.scss';
import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherTypeDescription = ({ WeatherTypeText }) => {
  return (
    <div className="weather-icon-description">{WeatherTypeText}</div>
  );
}

export default WeatherTypeDescription;

