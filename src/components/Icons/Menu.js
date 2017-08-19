import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function Menu({ width, height, style }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 226.216 226.216">
      <Path d="M8.7 43.503h208.815c5.22 0 8.7-3.48 8.7-8.7s-3.48-8.702-8.7-8.702H8.7c-5.22.002-8.7 3.482-8.7 8.702s3.48 8.7 8.7 8.7zM217.515 104.407H8.7c-5.22 0-8.7 3.48-8.7 8.7s3.48 8.702 8.7 8.702h208.815c5.22 0 8.7-3.48 8.7-8.702s-3.48-8.7-8.7-8.7zM217.515 182.713H8.7c-5.22 0-8.7 3.48-8.7 8.7s3.48 8.702 8.7 8.702h208.815c5.22 0 8.7-3.48 8.7-8.7s-3.48-8.702-8.7-8.702z"/>
    </Svg>
  );
}

Menu.defaultProps = {
  width: 16,
  height: 16
};

Menu.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.any
};

export default Menu;
