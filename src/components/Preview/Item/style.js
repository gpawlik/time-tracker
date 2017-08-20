import { StyleSheet } from 'react-native';

import { SILVER, MOUNTAIN_MEADOW, BUTTERCUP } from 'config/colors';

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
    color: MOUNTAIN_MEADOW
  },
  holidayDate: {
    ...baseDate,
    color: SILVER
  },
  inactiveDate: {
    ...baseDate,
    color: SILVER
  },
  warningDate: {
    ...baseDate,
    color: BUTTERCUP
  }
});
