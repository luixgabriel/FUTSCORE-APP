/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

function Timer({ duration, onTimeUp }) {
  const [remainingSeconds, setRemainingSeconds] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      } else {
        onTimeUp();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingSeconds, duration]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <>
      <h2>TEMPO</h2>
      <h2>{minutes < 10 ? `0${minutes}` : minutes}</h2>
      <h2>:</h2>
      <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
    </>
  );
}

Timer.propTypes = {
  duration: PropTypes.number,
  onTimeUp: PropTypes.func,
};

Timer.defaultProps = {
  duration: 0,
  onTimeUp: '',
};

export default Timer;
