import React, { Component } from 'react';
import CurrentDate from '../CurrentDate';
import './LandingPage.scss';
import TemperatureWithInsolation from '../TemperatureWithInsolation';
import WeatherWithDescription from '../WeatherWithDescription';
import SevenDayWeather from '../SevenDayWeather';
import LocationSearchBar from '../LocationSearchBar';
import CurrentLocation from '../CurrentLocation';

class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      currentLocation: 'Sydney',
      currentDate: 'Monday, 06 September 2021',
      weatherTypeImage: 'Sun',
      weatherTypeText: 'Sun',
      sevenDayWeather: [{
        id: 1,
        day: 'TUE',
        weatherIcon: 'Cloud',
        lowTemperature: '7',
        highTemperature: '22',
      }, 
      {
        id: 2,
        day: 'Wed',
        weatherIcon: 'Cloud',
        lowTemperature: '3',
        highTemperature: '24',
      }, 
      {
        id: 3,
        day: 'THUR',
        weatherIcon: 'Cloud',
        lowTemperature: '5',
        highTemperature: '27',
      }, 
      {
        id: 4,
        day: 'FRI',
        weatherIcon: 'Cloud',
        lowTemperature: '6',
        highTemperature: '27',
      }, 
      {
        id: 5,
        day: 'SAT',
        weatherIcon: 'Cloud',
        lowTemperature: '7',
        highTemperature: '28',
      }, 
      {
        id: 6,
        day: 'SUN',
        weatherIcon: 'Cloud',
        lowTemperature: '-1',
        highTemperature: '15',
      },
      {
        id: 7,
        day: 'MON',
        weatherIcon: 'Cloud',
        lowTemperature: '7',
        highTemperature: '29',
      }],
      insolationData: [
        {
        key: 1,
        insolationIcon: 'Start',
        insolationTime: '06:30',
        },
        {
          key: 1,
          insolationIcon: 'End',
          insolationTime: '05:30',
        }
      ],
      temperatureData: [
        {
          id : 1,
          rangeType : 'Low',
          rangeTemperature : '08',
        },
        {
          id : 2,
          rangeType : 'High',
          rangeTemperature : '28',
        }
      ],
    };
  }

  render() {
    const { currentLocation, currentDate, weatherTypeImage, weatherTypeText, insolationData, temperatureData, sevenDayWeather } = this.state;
    
    return (
      <div className="weather-app-container"> 
        <div className="search-bar">
          <LocationSearchBar currentLocation={currentLocation} />
          <CurrentLocation currentLocation={currentLocation} />
          <CurrentDate currentDate={currentDate} />
        </div>

        <div className="weather-app-container__today">
          <WeatherWithDescription weatherTypeImage={weatherTypeImage} weatherTypeText={weatherTypeText} />
          <TemperatureWithInsolation insolationData={insolationData} temperatureData={temperatureData} />
        </div>

        <SevenDayWeather sevenDayWeather={sevenDayWeather} />
      </div>
    )
  }
}

export default LandingPage;