import React from 'react';
import { Text } from 'react-native';

import translate from 'helpers/translate';

import s from './style';

export default () => {
  return (
    <Text style={s.text}>{translate('loading')}</Text>
  );
};
