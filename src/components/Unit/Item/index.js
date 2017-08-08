import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Circle from 'components/Unit/Circle';
import { isFromPast } from 'helpers/date';

import s from './style';

export default ({ itemEvents = [], date, onSelect }) => {
  const isCircleActive = itemEvents[0] && itemEvents[0].hasOwnProperty('key');
  const isCircleWarning = !isCircleActive && isFromPast(date);

  return (
    <TouchableHighlight style={s.unit} onPress={onSelect}>
      <View>
        <Circle
          isActive={isCircleActive}
          isWarning={isCircleWarning}
        />
        <View style={s.meta}>
          <Text style={s.label}>{date.format('MMM, Do')}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
