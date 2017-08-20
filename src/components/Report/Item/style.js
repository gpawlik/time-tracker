import { Dimensions, StyleSheet } from 'react-native';

import { DUSTY_GRAY, CINNABAR, WHITE } from 'config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: Dimensions.get('window').width
  },
  dataBox: {
    backgroundColor: WHITE,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dedede',
    margin: 15,
    padding: 12,
    height: 145
  },
  summary: {
    backgroundColor: CINNABAR,
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
    color: DUSTY_GRAY,
    fontWeight: '600'
  }
});
