import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import s from './style';

export default ({ data = [], onPress }) => {
  return (
    <TouchableHighlight style={s.unit} onPress={onPress}>
      <View>
        {data.map((item, key) => {
          return (
            <Text style={s.label} key={key}>{item.payload.name} ({item.payload.fraction} days)</Text>
          );
        })}
      </View>
    </TouchableHighlight>
  );
};
