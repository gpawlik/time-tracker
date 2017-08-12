import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

function AvatarIcon({ width, height, style }) {
  const imageStyle = {
    width: width * 4,
    height: height * 4,
    transform: [{
      translate: [
        -Math.round(Math.random() * 40),
        -Math.round(Math.random() * 40)
      ]
    }]
  };

  return (
    <View style={{ width, height, borderRadius: width, overflow: 'hidden', ...style }}>
      <Image source={require('assets/images/avatar.jpg')} style={imageStyle} />
    </View>
  );
}

AvatarIcon.defaultProps = {
  width: 25,
  height: 25
};

AvatarIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number
};

export default AvatarIcon;
