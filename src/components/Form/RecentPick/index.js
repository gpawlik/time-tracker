import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { AvatarIcon } from 'components/Icons';

import s from './style';

export default ({ values = [], onSelect }) => {
  return (
    <View>
      <Text style={s.header}>{'Recent Picks'.toUpperCase()}</Text>
      {values.map((item, key) => {
        return (
          <TouchableOpacity style={s.item} activeOpacity={0.65} onPress={() => onSelect(item)} key={key}>
            <View style={s.itemBox}>
              <AvatarIcon token={item.name} />
              <View style={s.infoBox}>
                <Text style={s.name}>{item.name}</Text>
                <Text style={s.details}>{item.details}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
