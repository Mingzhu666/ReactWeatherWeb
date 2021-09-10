import React, { Component } from 'react';
import TemperatureRange from '../TemperatureRange';
import './TemperatureRangeContainer.scss';

class TemperatureRangeContainer extends Component {
  constructor() {
    super();

    this.state = [
      {
        id : 1,
        rangeType : 'Low',
        rangeTemperature : '08',
      },
      {
        id : 2,
        rangeType : 'High',
        rangeTemperature : '28',
      },
    ];
  }

  render() {
    return (
      <div className="temperature-range-container"> 
        {
          this.state.map(({ id, rangeType, rangeTemperature }) => (
            <TemperatureRange Key={id} rangeType={rangeType} rangeTemperature={rangeTemperature} />
          ))
        }
      </div>
    )
  }
}

export default TemperatureRangeContainer;
