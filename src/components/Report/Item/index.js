import React from 'react';
import { Text, View } from 'react-native';

import s from './style';

export default ({ data }) => {
  const { moment, events = [] } = data;

  return (
    <View style={s.item}>
      <Text style={s.name}>{moment && moment.format('YYYY-MM-DD')}</Text>
      {events.map((event, index) => {
        return (
          <Text style={s.value} key={index}>{event.name}, {event.fraction} days</Text>
        );
      })}
    </View>
  );
};
