import React from 'react';
import './InsolationDuration.scss'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InsolationDuration = ({ insolationIcon, insolationTime, timezone }) => {
  const sunTime = new Date(insolationTime * 1000).toLocaleTimeString('en-US', timezone);

  return (
    <div className="insolation-duration">
      <div className="insolation-duration__icon">
        {insolationIcon === 'Start' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </div>
      <div className="insolation-duration__time">
        {sunTime}
      </div>
    </div>
  );
}

export default InsolationDuration;