import { StyleSheet } from 'react-native';

import { RED, LIGHT_GRAY } from 'config/colors';

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
    borderTopColor: LIGHT_GRAY,
    borderBottomColor: LIGHT_GRAY,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  labelText: {
    fontWeight: '300',
    fontSize: 16
  },
  arrowLeft: {
    ...arrowStyle,
    borderRightColor: LIGHT_GRAY,
    borderRightWidth: StyleSheet.hairlineWidth
  },
  arrowRight: {
    ...arrowStyle,
    borderLeftColor: LIGHT_GRAY,
    borderLeftWidth: StyleSheet.hairlineWidth
  }
});
