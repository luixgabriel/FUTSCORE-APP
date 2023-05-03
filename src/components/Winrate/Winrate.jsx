import React from 'react';
import PropTypes from 'prop-types';

function Winrate({ winRate, size, strokeWidth, color }) {
  const circumference = Math.PI * (size - strokeWidth);
  const dashOffset = circumference - (circumference * winRate) / 100;
  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={color}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
}

Winrate.propTypes = {
  winRate: PropTypes.string,
  size: PropTypes.string,
  strokeWidth: PropTypes.string,
  color: PropTypes.string,
};

Winrate.defaultProps = {
  winRate: '',
  size: '',
  strokeWidth: '',
  color: '',
};

export default Winrate;
