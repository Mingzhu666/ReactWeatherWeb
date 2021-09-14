import React, { Component } from 'react';
import TemperatureRange from '../TemperatureRange/TemperatureRange';
import InsolationDuration from '../InsolationDuration/InsolationDuration';
import './TemperatureWithInsolation.scss';

// <div className="insolationContainer">
//   <Insolation
//     Icon="start"
//     Time="06:30"
//   />
// </div>
// <Insolation
//   Icon="end"
//   Time="05:30"
// />
        
class TemperatureWithInsolation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="temperature-with-insolation"> 
        <div>
          {
            this.props.temperatureData.map(({ id, rangeType, rangeTemperature }) => (
              <TemperatureRange 
                key={id} 
                rangeType={rangeType} 
                rangeTemperature={rangeTemperature} 
              />
            ))
          }
        </div>

        <div>
          {
            this.props.insolationData.map(({id, insolationIcon, insolationTime}) => 
            (
              <InsolationDuration
                className="insolation-duration-container__range"
                key={id}
                insolationIcon={insolationIcon}
                insolationTime={insolationTime}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default TemperatureWithInsolation;
