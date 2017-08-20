import { StyleSheet } from 'react-native';

import { CINNABAR, SILVER } from 'config/colors';

const arrowStyle = {
  padding: 12,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

export default StyleSheet.create({
  item: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: SILVER,
    borderBottomColor: SILVER,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  labelText: {
    fontWeight: '300',
    fontSize: 16
  },
  arrowLeft: {
    ...arrowStyle,
    borderRightColor: SILVER,
    borderRightWidth: StyleSheet.hairlineWidth
  },
  arrowRight: {
    ...arrowStyle,
    borderLeftColor: SILVER,
    borderLeftWidth: StyleSheet.hairlineWidth
  }
});
