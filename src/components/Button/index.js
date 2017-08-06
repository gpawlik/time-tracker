import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const s = StyleSheet.create({
  button: {
    backgroundColor: '#27ae60',
    padding: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});

export default ({ onPress, children }) => {
  return (
    <TouchableHighlight onPress={onPress} style={s.button}>
      <Text style={s.text}>{children}</Text>
    </TouchableHighlight>
  );
};
