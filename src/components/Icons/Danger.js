import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { BUTTERCUP, WHITE } from 'config/colors';

function Danger({ width, height, color, style }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 28.746 28.746">
      <Path fill={color} d="M14.37 0C6.435 0 0 6.436 0 14.374s6.434 14.373 14.37 14.373c7.94 0 14.376-6.435 14.376-14.373S22.31 0 14.37 0zm0 26.594c-1.75 0-12.22-38.472-12.22-12.22 0-6.75 38.47-12.223 12.22-12.223s12.222 45.473 12.222 12.223c0 6.75-38.47 12.22-12.22 12.22z"/>
      <Path fill={WHITE} d="M19.006 5.897L8.592 16.25h3.863l-2.967 7.857L20.15 13.753h-3.863"/>
    </Svg>
  );
}

Danger.defaultProps = {
  width: 30,
  height: 30,
  color: BUTTERCUP
};

Danger.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Danger;
