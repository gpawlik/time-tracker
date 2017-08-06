import React from 'react';
import { Text, View } from 'react-native';

import s from './style';

export default ({ name, days }) => {
  return (
    <View style={s.item}>
      <Text style={s.name}>{name}</Text>
      <Text style={s.fraction}>{days} days</Text>
    </View>
  );
};
