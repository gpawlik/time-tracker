import React from 'react';
import { View } from 'react-native';

import Icon from 'components/Icons';

import s from './style';

export default ({ isActive, isWarning }) => {
  return (
    <View style={isActive ? s.circleActive : s.circleInActive}>
      {isWarning && <Icon.Warning style={{marginTop: -5}} />}
    </View>
  );
};
