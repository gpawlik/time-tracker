import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Icons from 'components/Icons';

import s from './style';

const TabIcon = ({ iconType, title, tintColor }) => {
  const isActive = tintColor === 'red';
  const iconStyle = isActive ? s.iconSelected : s.icon;
  let Handler;

  switch(iconType) {
    case 'home':
      Handler = Icons.Home;
      break;
    case 'calendar':
      Handler = Icons.Calendar;
      break;
    case 'report':
    default:
      Handler = Icons.Report;
  }

  return (
    <View style={s.container}>
      <Handler isActive={isActive} />
      <Text style={iconStyle}>{title}</Text>
    </View>
  );
};

TabIcon.propTypes = {
  iconType: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.bool
};

export default TabIcon;
