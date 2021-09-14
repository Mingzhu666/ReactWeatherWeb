import React from 'react';
import TemperatureRange from '../TemperatureRange/TemperatureRange';
import InsolationDuration from '../InsolationDuration/InsolationDuration';
import './TemperatureWithInsolation.scss';


const TemperatureWithInsolation = (props) => {
  return (
    <div className="temperature-with-insolation"> 
      <div className="temperature-container">
        {
          props.temperatureData.map(({ id, rangeType, rangeTemperature }) => (
            <TemperatureRange 
              key={id} 
              rangeType={rangeType} 
              rangeTemperature={rangeTemperature} 
            />
          ))
        }
      </div>

      <div className="insolation-container">
        {
          props.insolationData.map(({id, insolationIcon, insolationTime}) => 
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
  );
}

export default TemperatureWithInsolation;
