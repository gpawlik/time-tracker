import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { ChevronIcon } from 'components/Icons';

import s from './style';

export default ({ month, onPress }) => {
  return (
    <View style={s.item}>
      <TouchableHighlight onPress={() => onPress('prev')}>
        <View style={s.arrowLeft}>
          <ChevronIcon />
        </View>
      </TouchableHighlight>
      <Text style={s.labelText}>{month}</Text>
      <TouchableHighlight onPress={() => onPress('next')}>
        <View style={s.arrowRight}>
          <ChevronIcon direction="right" />
        </View>
      </TouchableHighlight>
    </View>
  );
};
