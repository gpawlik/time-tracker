import { StyleSheet } from 'react-native';

import { LIGHT_GRAY, LIGHT_GREEN, LIGHT_YELLOW } from 'config/colors';

const baseDate = {
  marginTop: 5,
  color: '#333',
  fontWeight: '600',
  fontSize: 12,
  textAlign: 'center'
};

export default StyleSheet.create({
  unit: {
    alignItems: 'center',
    width: 50
  },
  activeDate: {
    ...baseDate,
    color: LIGHT_GREEN
  },
  holidayDate: {
    ...baseDate,
    color: LIGHT_GRAY
  },
  inactiveDate: {
    ...baseDate,
    color: LIGHT_GRAY
  },
  warningDate: {
    ...baseDate,
    color: LIGHT_YELLOW
  }
});
