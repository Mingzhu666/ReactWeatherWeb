import React, { Component } from 'react';
import InsolationDuration from '../InsolationDuration/InsolationDuration';
import './InsolationDurationContainer.scss'

class InsolationDurationContainer extends Component {
  constructor() {
    super();

    this.state = [
      {
        key: 1,
        insolationIcon: 'Start',
        insolationTime: '06:30',
      },
      {
        key: 1,
        insolationIcon: 'End',
        insolationTime: '05:30',
      },
    ];
  }

  render() {
    return (
      <div className="insolation-duration-container">
        {
          this.state.map((item) => 
          (
            <InsolationDuration className="insolation-duration-container__range" key={item.id} insolationIcon={item.insolationIcon} insolationTime={item.insolationTime} />
          ))
        } 
      </div>
    );
  }
}

export default InsolationDurationContainer;


