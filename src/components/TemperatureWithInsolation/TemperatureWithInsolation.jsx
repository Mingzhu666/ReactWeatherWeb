import React, { Component } from 'react';
import TemperatureRangeContainer from '../TemperatureRangeContainer';
import InsolationDurationContainer from '../InsolationDurationContainer';
import './TemperatureWithInsolation.scss';

class TemperatureWithInsolation extends Component {
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
      <div className="temperature-with-insolation"> 
        <TemperatureRangeContainer />
        <InsolationDurationContainer />
      </div>
    )
  }
}

export default TemperatureWithInsolation;
