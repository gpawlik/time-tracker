import React from 'react';
import { Text, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Dosis',
    textAlign: 'center',
    margin: 20,
    marginTop: 25,
    color: '#333'
  }
});

export default ({ children }) => {
  return (
    <Text style={s.header}>
      {children}
    </Text>
  );
};
