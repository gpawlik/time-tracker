import { StyleSheet } from 'react-native';

import { DARK_GRAY, LIGHT_GRAY } from 'config/colors';

const icon = {
  fontSize: 14,
  fontFamily: 'Dosis',
  fontWeight: '600',
  marginTop: 3
};

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  icon: {
    ...icon,
    color: LIGHT_GRAY
  },
  iconSelected: {
    ...icon,
    color: DARK_GRAY
  }
});
