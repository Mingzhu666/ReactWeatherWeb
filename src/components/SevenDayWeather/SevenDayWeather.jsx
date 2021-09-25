import React from 'react';
import DailyWeather from '../DailyWeather';
import './SevenDayWeather.scss';

const SevenDayWeather = (props) => {
  return (
    <div className="seven-day-weather">
      {
        props.forecastData.map((data, index) => 
        (
          <DailyWeather
            className="seven-day-weather__daily"
            key={index}
            day={new Date(data.dt*1000).toDateString().split(" ")[0]}
            weatherIcon={data.weather[0].icon}
            lowTemperature={data.temp.min.toFixed(1)}
            highTemperature={data.temp.max.toFixed(1)}
          />
        ))
      } 
    </div>
  );
}
 
export default SevenDayWeather;