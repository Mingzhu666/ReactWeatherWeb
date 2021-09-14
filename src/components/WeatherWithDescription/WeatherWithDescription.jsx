import React, { Component } from 'react';
import './WeatherWithDescription.scss';
import WeatherTypeIcon from '../WeatherTypeIcon/WeatherTypeIcon';
import WeatherTypeDescription from '../WeatherTypeDescription/WeatherTypeDescription';

class WeatherWithDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weather-with-description">
        <WeatherTypeIcon className="weather-with-description__icon" weatherTypeImage={this.props.weatherTypeImage} />
        <WeatherTypeDescription className="weather-with-description__description" weatherTypeText={this.props.weatherTypeText} />
      </div>
    )
  }
}

export default WeatherWithDescription;