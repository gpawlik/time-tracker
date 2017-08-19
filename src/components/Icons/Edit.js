import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function Edit({ width, height, color, style }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 267.978 267.978">
      <Path fill={color} d="M257.028 29.582l-19.14-19.14c-12.182-13.922-34.803-13.922-48.724 0l-22.62 22.62c0 .766-.4 1.584-.767 2.506L13.41 187.933c0 1.74-1.74 3.48-1.74 5.22L1.23 259.278c-1.74 1.74 0 5.22 1.74 6.96 1.74 0 5.22 1.74 6.96 1.74l66.124-8.7c1.74 0 3.48 0 5.22-1.74l153.13-153.13c0-1.27.783-2.803 1.27-4.752l21.35-21.35c13.925-12.18 13.925-34.803.004-48.724zM90.848 221.866l-43.504-43.503 125.29-125.29 43.502 43.504-125.29 125.29zm-18.273 18.27L20.37 248.84l8.702-52.204 6.09-6.09 43.504 43.502-6.09 6.09zm174.012-174.01l-17.4 17.4-43.504-43.503 17.4-17.4c6.96-6.96 17.402-6.96 24.363 0l19.14 19.14c6.962 6.96 6.962 17.4 0 24.362z"/>
    </Svg>
  );
}

Edit.defaultProps = {
  width: 25,
  height: 25,
  color: '#fff'
};

Edit.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.number
};

export default Edit;
