import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { ChevronIcon } from 'components/Icons';

import s from './style';

export default ({ onPress }) => {
  return (
    <View style={s.item}>
      <TouchableHighlight onPress={onPress}>
        <View style={s.arrowLeft}>
          <ChevronIcon />
        </View>
      </TouchableHighlight>
      <Text style={s.labelText}>August</Text>
      <TouchableHighlight onPress={onPress}>
        <View style={s.arrowRight}>
          <ChevronIcon direction="right" />
        </View>
      </TouchableHighlight>
    </View>
  );
};
