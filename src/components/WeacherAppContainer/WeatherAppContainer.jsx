import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import './WeatherAppContainer.scss';
import TemperatureWithInsolation from '../TemperatureWithInsolation';
import WeatherWithDescription from '../WeatherWithDescription';
import SevenDayWeather from '../SevenDayWeather';

class WeatherAppContainer extends Component {
  constructor() {
    super();

    // this.state = [
    //   {
    //     id : 1,
    //     rangeType : 'Low',
    //     rangeTemperature : '08',
    //   },
    //   {
    //     id : 2,
    //     rangeType : 'High',
    //     rangeTemperature : '28',
    //   },
    // ];
  }

  render() {
    return (
      <div className="weather-app-container"> 
        <SearchBar />
        <div className="weather-app-container__today">
          <WeatherWithDescription />
          <TemperatureWithInsolation />
        </div>
        <SevenDayWeather />
      </div>
    )
  }
}

export default WeatherAppContainer;
