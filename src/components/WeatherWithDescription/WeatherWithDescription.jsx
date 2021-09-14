import React from 'react';
import './WeatherWithDescription.scss';
import WeatherTypeIcon from '../WeatherTypeIcon/WeatherTypeIcon';
import WeatherTypeDescription from '../WeatherTypeDescription/WeatherTypeDescription';

const WeatherWithDescription = ({ weatherTypeImage, weatherTypeText }) => {
  return (
    <div className="weather-with-description">
      <WeatherTypeIcon className="weather-with-description__icon" weatherTypeImage={weatherTypeImage} />
      <WeatherTypeDescription className="weather-with-description__description" weatherTypeText={weatherTypeText} />
    </div>
  );
}

export default WeatherWithDescription;
