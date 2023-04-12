import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Timer({ duration }) {
  const [remainingSeconds, setRemainingSeconds] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    console.log(intervalId);

    return () => clearInterval(intervalId);
  }, [remainingSeconds, duration]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <>
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </>
  );
}

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Timer;
