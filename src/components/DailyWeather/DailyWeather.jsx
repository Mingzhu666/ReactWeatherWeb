import React from 'react';
import './DailyWeather.scss'
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DailyWeather = ({ day, weatherIcon, lowTemperature, highTemperature }) => {
  return (
    <div className="daily-temperature">
      <div className="daily-temperature__day">
        {day}
      </div>
      <div className="daily-temperature__weather-icon">
        {weatherIcon === 'Cloud' ? <FontAwesomeIcon icon={faCloud} /> : ''}
      </div>
      <div className="daily-temperature__range">
        <span className="daily-temperature__range-low">{lowTemperature}</span>
        <span className="daily-temperature__range-high">{highTemperature}</span>
      </div>
    </div>
  );
}

export default DailyWeather;


