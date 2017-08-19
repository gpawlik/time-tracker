import { StyleSheet } from 'react-native';

import { LIGHT_GRAY } from 'config/colors';

export default StyleSheet.create({
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
