import React from 'react';
import { Text, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Dosis',
    textAlign: 'center',
    marginTop: 15,
    color: '#ccc'
  }
});

export default ({ children }) => {
  return (
    <Text style={s.header}>
      {children}
    </Text>
  );
};
