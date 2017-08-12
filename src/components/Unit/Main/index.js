import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import { AvatarIcon, TapIcon } from 'components/Icons';

import s from './style';

export default ({ data = { payload: {} }, onPress }) => {
  const unitStyle = data.payload.name ? s.unitActive : s.unitInActive;
  const textBox = (
    <View>
      <Text style={s.name}>{data.payload.name}</Text>
      <Text style={s.details}>{data.payload.details}</Text>
    </View>
  );
  const emptyBox = (
    <View style={s.emptyBox}>
      <TapIcon />
      <Text style={s.actionText}>Please tap to provide details for selected date.</Text>
    </View>
  );

  return (
    <TouchableHighlight
      style={unitStyle}
      onPress={onPress}
      underlayColor={StyleSheet.flatten(unitStyle).backgroundColor}>
      <View>
        <View style={s.textBox}>
          {data.payload.name ? textBox : emptyBox}
        </View>
        <View style={s.iconBox}>
          <AvatarIcon width={55} height={55} />
        </View>
      </View>
    </TouchableHighlight>
  );
};
