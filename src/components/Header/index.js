import React from 'react';
import { Text, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    margin: 20
  }
});

export default ({ children }) => {
  return (
    <Text style={s.header}>
      {children}
    </Text>
  );
};
