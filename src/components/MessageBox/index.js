import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Icons from 'components/Icons';

import s from './style';

const MessageBox = ({ status, text }) => {
  let Handler;

  switch(status) {
    case 'valid':
      Handler = Icons.TickRounded;
      break;
    case 'invalid':
    default:
      Handler = Icons.Danger;
  }

  return (
    <View style={s.container}>
      <View style={s.box}>
        <Handler />
        <Text style={s.text}>{text}</Text>
      </View>
    </View>
  );
};

MessageBox.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

export default MessageBox;
