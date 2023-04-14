/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Timer({ duration, matchTime }) {
  const [remainingSeconds, setRemainingSeconds] = useState(duration);
  const [secondHalf, setSecondHalf] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      } else if (matchTime > 1) {
        setSecondHalf(true);
      } else {
        setGameOver(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingSeconds, duration]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  if (gameOver) {
    return (
      <div>
        <button type="submit">Finalizar Partida</button>
      </div>
    );
  }

  return (
    <>
      {secondHalf === true ? (
        <div>
          <button type="submit">Iniciar 2 tempo</button>
        </div>
      ) : (
        <>
          <h2>TEMPO</h2>
          <h2>{minutes < 10 ? `0${minutes}` : minutes}</h2>
          <h2>:</h2>
          <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
        </>
      )}
    </>
  );
}

Timer.propTypes = {
  duration: PropTypes.number,
  matchTime: PropTypes.number,
};

Timer.defaultProps = {
  duration: 0,
  matchTime: 0,
};

export default Timer;
