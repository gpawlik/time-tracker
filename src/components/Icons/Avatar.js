import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

function Avatar({ width, height, token = '', style }) {
  const imageStyle = {
    width: width * 4,
    height: height * 4,
    transform: [{
      translate: [
        -token.length * 2.9,
        -token.length * 1.2
      ]
    }]
  };

  return (
    <View style={{ width, height, borderRadius: width, overflow: 'hidden', ...style }}>
      <Image source={require('assets/images/avatar.jpg')} style={imageStyle} />
    </View>
  );
}

Avatar.defaultProps = {
  width: 25,
  height: 25
};

Avatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number
};

export default Avatar;
