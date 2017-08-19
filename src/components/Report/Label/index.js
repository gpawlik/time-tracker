import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Icons from 'components/Icons';

import s from './style';

export default ({ month, onPress }) => {
  return (
    <View style={s.item}>
      <TouchableHighlight onPress={() => onPress('prev')}>
        <View style={s.arrowLeft}>
          <Icons.Chevron />
        </View>
      </TouchableHighlight>
      <Text style={s.labelText}>{month}</Text>
      <TouchableHighlight onPress={() => onPress('next')}>
        <View style={s.arrowRight}>
          <Icons.Chevron direction="right" />
        </View>
      </TouchableHighlight>
    </View>
  );
};
