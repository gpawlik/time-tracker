import { StyleSheet } from 'react-native';

import { GRAY, RED, WHITE } from 'config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fafafa'
  },
  dataBox: {
    backgroundColor: WHITE,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dedede',
    margin: 15,
    padding: 12
  },
  summary: {
    backgroundColor: RED,
    fontFamily: 'Dosis',
    fontSize: 16,
    fontWeight: '600',
    padding: 15,
    color: WHITE,
    textAlign: 'center'
  },
  labelBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  label: {
    fontFamily: 'Dosis',
    color: GRAY,
    fontWeight: '600'
  }
});
