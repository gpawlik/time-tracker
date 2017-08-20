import { StyleSheet } from 'react-native';

import { VALLEY_GREEN, MOUNTAIN_MEADOW } from 'config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  label: {
    backgroundColor: VALLEY_GREEN,
    padding: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: MOUNTAIN_MEADOW
  },
  labelText: {
    color: '#fff',
    fontFamily: 'Dosis',
    fontSize: 18,
    fontWeight: '600'
  }
});
