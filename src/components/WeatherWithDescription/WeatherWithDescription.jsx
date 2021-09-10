import React, { Component } from 'react';
import './WeatherWithDescription.scss';
import WeatherTypeIcon from '../WeatherTypeIcon/WeatherTypeIcon';
import WeatherTypeDescription from '../WeatherTypeDescription/WeatherTypeDescription';

class WeatherWithDescription extends Component {
  constructor() {
    super();

    this.state = {
      WeatherTypeImage: 'Sun',
      WeatherTypeText: 'Sun',
    }
  }

  render() {
    const { WeatherTypeImage, WeatherTypeText } = this.state;

    return (
      <div className="weather-with-description">
        <WeatherTypeIcon className="weather-with-description__icon" WeatherTypeImage={WeatherTypeImage} />
        <WeatherTypeDescription className="weather-with-description__description" WeatherTypeText={WeatherTypeText} />
      </div>
    )
  }
}

export default WeatherWithDescription;