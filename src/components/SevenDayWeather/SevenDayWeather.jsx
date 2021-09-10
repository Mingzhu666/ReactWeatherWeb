import React, { Component } from 'react';
import DailyWeather from '../DailyWeather';
import './SevenDayWeather.scss';
// this.state.map((item) => 
//           (
//             <DailyWeather className="seven-day-weather__daily" key={item.id} day={item.day} weatherIcon={item.weatherIcon} lowTemperature={item.lowTemperature} highTemperature={item.highTemperature} />
//           ))

class SevenDayWeather extends Component {
  constructor(props) {
    super(props);

    this.state = [
      {
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
      },
    ];
  }

  render() {
    return (
      <div className="seven-day-weather">
        {
          this.state.map(({ id, day, weatherIcon, lowTemperature, highTemperature }) => 
          (
            <DailyWeather className="seven-day-weather__daily" key={id} day={day} weatherIcon={weatherIcon} lowTemperature={lowTemperature} highTemperature={highTemperature} />
          ))
        } 
      </div>
    );
  }
}

export default SevenDayWeather;