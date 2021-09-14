import React from 'react';
import './WeatherWithDescription.scss';
import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherWithDescription = ({ weatherTypeImage, weatherTypeText }) => {
  return (
    <div className="weather-with-description">
      <div>{weatherTypeImage === 'Sun' ? <FontAwesomeIcon icon={faSun} /> : ''}</div>
      <div>{weatherTypeText}</div>
    </div>
  );
}

export default WeatherWithDescription;
