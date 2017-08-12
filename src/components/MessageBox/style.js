import { StyleSheet } from 'react-native';

import { DARK_GRAY, WHITE } from 'config/colors';

export default StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#eee',
    marginTop: 19
  },
  box: {
    margin: 10,
    backgroundColor: WHITE,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Dosis',
    fontWeight: '600',
    color: DARK_GRAY,
    marginLeft: 10
  }
});
