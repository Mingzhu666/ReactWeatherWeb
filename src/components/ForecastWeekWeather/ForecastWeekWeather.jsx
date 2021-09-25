import React from 'react';
import DailyWeather from '../DailyWeather';
import './ForecastWeekWeather.scss';

const ForecastWeekWeather = (props) => {
  return (
    <div className="forecast-week-weather">
      {
        props.forecastData.map((data, index) => 
        (
          <DailyWeather
            className="forecast-week-weather__daily"
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
 
export default ForecastWeekWeather;