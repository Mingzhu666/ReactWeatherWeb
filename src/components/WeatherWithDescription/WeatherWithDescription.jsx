import React from 'react';
import './WeatherWithDescription.scss';
// import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherWithDescription = ({ icon, description }) => {
  return (
    <div className="weather-with-description">
      <img alt="weatherIcon" src={ `http://openweathermap.org/img/w/${icon}.png` } />
      <div className="weather-with-description__description">{description}</div>
    </div>
  );
}

export default WeatherWithDescription;
