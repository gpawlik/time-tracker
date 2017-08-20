import { StyleSheet } from 'react-native';

import { DOVE_GRAY, SILVER } from 'config/colors';

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
    color: SILVER
  },
  iconSelected: {
    ...icon,
    color: DOVE_GRAY
  }
});
