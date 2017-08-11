import React from 'react';
import { View } from 'react-native';

import { Warning } from 'components/Icons';

import s from './style';

export default ({ type }) => {
  let circleStyle;

  switch (type) {
    case 'active':
      circleStyle = s.circleActive;
      break;
    case 'warning':
      circleStyle = s.circleWarning;
      break;
    default:
      circleStyle = s.circleInActive;
  }
  return (
    <View style={circleStyle}>
    </View>
  );
};
