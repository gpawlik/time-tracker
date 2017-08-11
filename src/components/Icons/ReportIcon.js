import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { DARK_GRAY, LIGHT_GRAY } from 'config/colors';

function ReportIcon({ width, height, style, isActive }) {
  const iconColor = isActive ? DARK_GRAY : LIGHT_GRAY;

  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 295.82 295.82">
      <Path fill={iconColor} d="M287.12 278.42h-27.842V175.753c0-5.22-3.48-8.7-8.7-8.7h-34.803c-5.22 0-8.7 3.48-8.7 8.7V278.42H180.97v-46.983c0-5.22-3.48-8.7-8.7-8.7H137.47c-5.22 0-8.7 3.48-8.7 8.7v46.983h-26.103v-76.565c0-5.22-3.48-8.7-8.7-8.7H59.164c-5.22 0-8.7 3.48-8.7 8.7v76.565H17.4v-88.31l60.904-45.68 66.124 40.024c3.48 1.74 6.96 1.74 10.44-1.74l120.07-113.11c3.48-3.48 3.48-8.7 0-12.18-3.48-3.48-8.702-3.48-12.182 0L147.91 165.31 81.786 125.29c-3.48-1.74-6.96-1.74-10.44 0L17.4 165.398V8.7c0-5.22-3.48-8.7-8.7-8.7S0 3.48 0 8.7v278.42c0 5.22 3.48 8.7 8.7 8.7h278.42c5.22 0 8.7-3.48 8.7-8.7 0-5.22-3.48-8.7-8.7-8.7zm-62.644-93.967h17.4v93.966h-17.4v-93.967zm-78.305 55.684h17.402v38.283h-17.4v-38.283zm-78.305-29.582h17.4v67.865h-17.4v-67.865z"/>
    </Svg>
  );
}

ReportIcon.defaultProps = {
  width: 23,
  height: 23
};

ReportIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number
};

export default ReportIcon;
