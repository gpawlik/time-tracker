import { StyleSheet } from 'react-native';

import { DARK_GREEN, LIGHT_GREEN } from 'config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  label: {
    backgroundColor: DARK_GREEN,
    padding: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LIGHT_GREEN
  },
  labelText: {
    color: '#fff',
    fontFamily: 'Dosis',
    fontSize: 18,
    fontWeight: '600'
  }
});
