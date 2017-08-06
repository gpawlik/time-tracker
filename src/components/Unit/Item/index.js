import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Circle from 'components/Unit/Circle';

import s from './style';

export default ({ data = { payload: [{}] }, date, onSelect }) => {
  return (
    <TouchableHighlight style={s.unit} onPress={onSelect}>
      <View>
        <Circle />
        <View style={s.meta}>
          <Text style={s.label}>{date.format('MMM, Do')}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
