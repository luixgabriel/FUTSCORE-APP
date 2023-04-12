import React from 'react';
import PropTypes from 'prop-types';

function Timer({ duration }) {
  return (
    <div>
      <h1>Cronometro</h1>
    </div>
  );
}

Timer.propTypes = {
  duration: PropTypes.string.isRequired,
};

export default Timer;
