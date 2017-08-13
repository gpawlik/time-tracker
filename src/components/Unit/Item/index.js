import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Circle from 'components/Unit/Circle';
import { isFromPast, isWeekDay } from 'helpers/date';

import s from './style';

export default ({ itemEvents = [], date, onSelect }) => {
  const isCircleActive = itemEvents[0] && itemEvents[0].hasOwnProperty('key');
  let type;

  if(isCircleActive) {
    type = 'active';
  } else if (!isCircleActive && isFromPast(date) && isWeekDay(date)) {
    type = 'warning';
  } else if (!isWeekDay(date)) {
    type = 'holiday';
  } else {
    type = 'inactive';
  }

  return (
    <TouchableHighlight
      style={s.unit}
      underlayColor="transparent"
      onPress={onSelect}>
      <View>
        <Circle type={type} />
        <Text style={s[`${type}Date`]}>{date.format('ddd').toUpperCase()}</Text>
      </View>
    </TouchableHighlight>
  );
};
