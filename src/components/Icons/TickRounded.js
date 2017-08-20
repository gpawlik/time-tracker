import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { MOUNTAIN_MEADOW } from 'config/colors';

function TickRounded({ width, height, color, style }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 426.667 426.667">
      <Path fill={color} d="M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.156 0 213.333 0zM174.2 322.918l-93.936-93.93 31.31-31.31 62.625 62.622 140.893-140.898 31.31 31.31-172.204 172.206z"/>
    </Svg>
  );
}

TickRounded.defaultProps = {
  width: 30,
  height: 30,
  color: MOUNTAIN_MEADOW
};

TickRounded.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number
};

export default TickRounded;
