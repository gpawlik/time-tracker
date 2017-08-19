import React from 'react';
import { Text, View } from 'react-native';

import RecentItem from 'components/Form/RecentItem';

import translate from 'helpers/translate';

import s from './style';

export default ({ values = [], onSelect }) => {
  return (
    <View>
      <Text style={s.header}>{translate('form.recent').toUpperCase()}</Text>
      {values.map((item, key) => {
        return (
          <RecentItem
            item={item}
            onSelect={onSelect}
            key={key}
          />
        );
      })}
    </View>
  );
};
