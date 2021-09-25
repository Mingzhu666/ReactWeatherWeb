import React from 'react';
import TemperatureRange from '../TemperatureRange/TemperatureRange';
import InsolationDuration from '../InsolationDuration/InsolationDuration';
import './TemperatureWithInsolation.scss';

const TemperatureWithInsolation = ({ sunrise, sunset, tempMin, tempMax, timezone }) => {
  return (
    <div className="temperature-with-insolation"> 
      <div className="temperature-container">
        {<>
          <TemperatureRange 
            rangeType="Low" 
            rangeTemperature={tempMin} 
          />
          <TemperatureRange 
            rangeType="High" 
            rangeTemperature={tempMax} 
          />
        </>}
      </div>

      <div className="insolation-container">
        {<>
          <InsolationDuration
            className="insolation-duration-container__range"
            insolationIcon="Start"
            insolationTime={sunrise}
            timezone={timezone}
          />
          <InsolationDuration
            className="insolation-duration-container__range"
            insolationIcon="End"
            insolationTime={sunset}
            timezone={timezone}
          />
        </>}
      </div>
    </div>
  );
}

export default TemperatureWithInsolation;
