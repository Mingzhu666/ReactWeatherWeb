import React from 'react';
import './WeatherTypeIcon.scss';
import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// weatherTable.map(({ WeatherType, WeatherIcon }) => (
// WeatherType === WeatherTypeImage ? WeatherIcon : WeatherTypeImage
// ))

const WeatherTypeIcon = ({ WeatherTypeImage }) => {
  const weatherTable = [
    { WeatherType: 'Cloud', WeatherIcon: '<FontAwesomeIcon icon={faCloud} />' },
    { WeatherType: 'Sun', WeatherIcon: '<FontAwesomeIcon icon={faSun} />' },
  ];

  return (
    <div className="weather-icon"> 
      {
        <FontAwesomeIcon icon={faSun} />
      }
    </div>
  );
}

export default WeatherTypeIcon;