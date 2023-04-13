import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Timer({ duration }) {
  const [remainingSeconds, setRemainingSeconds] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingSeconds, duration]);

  console.log(remainingSeconds);
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <>
      <h2>{minutes < 10 ? `0${minutes}` : minutes}</h2>
      <h2>:</h2>
      <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
    </>
  );
}

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Timer;
