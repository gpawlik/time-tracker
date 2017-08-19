import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icons from 'components/Icons';

import s from './style';

export default ({ item, onSelect }) => {
  return (
    <TouchableOpacity style={s.item} activeOpacity={0.65} onPress={() => onSelect(item)}>
      <View style={s.itemBox}>
        <Icons.Avatar token={item.name} />
        <View style={s.infoBox}>
          <Text style={s.name}>{item.name}</Text>
          <Text style={s.details}>{item.details}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
