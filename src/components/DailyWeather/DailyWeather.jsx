import React from 'react';
import './DailyWeather.scss'
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DailyWeather = ({ day, weatherIcon, lowTemperature, highTemperature }) => {
  const low = (lowTemperature - 273.15).toFixed(1);
  const high = (highTemperature - 273.15).toFixed(1);

  return (
    <div className="daily-temperature">
      <div className="daily-temperature__day">
        {day}
      </div>
      <div className="daily-temperature__weather-icon">
        {/* {weatherIcon === 'Cloud' ? <FontAwesomeIcon icon={faCloud} /> : ''} */}
        <img alt="weatherIcon" src={ `http://openweathermap.org/img/w/${weatherIcon}.png` } />
      </div>
      <div className="daily-temperature__range">
        <span className="daily-temperature__range-low">{low}℃</span>
        <span className="daily-temperature__range-high">{high}℃</span>
      </div>
    </div>
  );
}

export default DailyWeather;