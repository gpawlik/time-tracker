import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import s from './style';

export default ({ values = [], onSelect }) => {
  return (
    <View>
      <Text style={s.header}>Recent Picks</Text>
      {values.map((item, key) => {
        return (
          <TouchableHighlight style={s.item} onPress={() => onSelect(item)} key={key}>
            <View>
              <Text style={s.name}>{item.name}</Text>
              <Text style={s.details}>{item.details}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};
