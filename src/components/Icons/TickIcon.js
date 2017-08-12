import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { DARK_GRAY } from 'config/colors';

function TickIcon({ width, height, color, style }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 512 512">
      <Path fill={color} d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.31c-9.997-9.997-26.205-9.996-36.204 0-9.998 9.998-9.998 26.206 0 36.204l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"/>
    </Svg>
  );
}

TickIcon.defaultProps = {
  width: 22,
  height: 22,
  color: DARK_GRAY
};

TickIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number
};

export default TickIcon;
