import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { DARK_GRAY } from 'config/colors';

function CrossIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 22.88 22.88">
      <Path fill={color} d="M.324 1.91c-.43-.43-.43-1.144 0-1.588.444-.43 1.143-.43 1.587 0l9.524 9.54 9.54-9.54c.428-.43 1.142-.43 1.57 0 .444.444.444 1.16 0 1.587l-9.523 9.523 9.524 9.54c.444.428.444 1.142 0 1.586-.43.428-1.143.428-1.57 0l-9.54-9.54-9.523 9.54c-.443.428-1.142.428-1.586 0-.43-.445-.43-1.16 0-1.588l9.523-9.54L.324 1.91z" fill="#1E201D"/>
    </Svg>
  );
}

CrossIcon.defaultProps = {
  width: 16,
  height: 16,
  color: DARK_GRAY
};

CrossIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default CrossIcon;
