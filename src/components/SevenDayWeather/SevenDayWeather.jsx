import React from 'react';
import DailyWeather from '../DailyWeather';
import './SevenDayWeather.scss';

const SevenDayWeather = (props) => {
  return (
    <div className="seven-day-weather">
      {
        props.sevenDayWeather.map(({ id, day, weatherIcon, lowTemperature, highTemperature }) => 
        (
          <DailyWeather className="seven-day-weather__daily" key={id} day={day} weatherIcon={weatherIcon} lowTemperature={lowTemperature} highTemperature={highTemperature} />
        ))
      } 
    </div>
  );
}
 
export default SevenDayWeather;