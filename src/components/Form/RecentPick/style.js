import { StyleSheet } from 'react-native';

import { LIGHT_GRAY, DARK_GREEN, WHITE } from 'config/colors';

export default StyleSheet.create({
  header: {
    padding: 9,
    backgroundColor: DARK_GREEN,
    fontFamily: 'Dosis',
    fontSize: 16,
    fontWeight: '600',
    color: WHITE,
    textAlign: 'center'
  },
  item: {
    padding: 15,
    paddingTop: 9,
    paddingBottom: 9,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LIGHT_GRAY
  },
  itemBox: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  infoBox: {
    marginLeft: 15
  },
  name: {
    fontFamily: 'Dosis',
    fontWeight: '600',
    fontSize: 16
  },
  details: {
    fontFamily: 'Dosis',
    fontWeight: '300',
    fontSize: 14,
    color: '#888'
  }
});
