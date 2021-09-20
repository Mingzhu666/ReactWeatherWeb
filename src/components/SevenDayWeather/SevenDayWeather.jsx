import React from 'react';
import DailyWeather from '../DailyWeather';
import './SevenDayWeather.scss';

const SevenDayWeather = (props) => {
  return (
    <div className="seven-day-weather">
      {
        props.forecastData.map(({index, dt, weather, temp}) => 
        (
          <DailyWeather className="seven-day-weather__daily" key={index} day={new Date(dt*1000).toDateString().split(" ")[0]} weatherIcon={weather[0].icon} lowTemperature={temp.min.toFixed(1)} highTemperature={temp.max.toFixed(1)} />
        ))
      } 
    </div>
  );
}
 
export default SevenDayWeather;