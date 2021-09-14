import React, { Component } from 'react';
import DailyWeather from '../DailyWeather';
import './SevenDayWeather.scss';
// this.state.map((item) => 
//           (
//             <DailyWeather className="seven-day-weather__daily" key={item.id} day={item.day} weatherIcon={item.weatherIcon} lowTemperature={item.lowTemperature} highTemperature={item.highTemperature} />
//           ))

class SevenDayWeather extends Component {  //convert to function component, no state, no 生命周期; having commit logs every time; UI should be nicer
  constructor(props) {
    super(props);

    // this.state = {sevenDay: props.sevenDay};
  }
  
  render() {
    return (
      <div className="seven-day-weather">
        {
          this.props.sevenDayWeather.map(({ id, day, weatherIcon, lowTemperature, highTemperature }) => 
          (
            <DailyWeather className="seven-day-weather__daily" key={id} day={day} weatherIcon={weatherIcon} lowTemperature={lowTemperature} highTemperature={highTemperature} />
          ))
        } 
      </div>
    );
  }
}

export default SevenDayWeather;