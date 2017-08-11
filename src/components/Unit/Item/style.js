import { StyleSheet } from 'react-native';

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
    color: '#2ecc71'
  },
  inactiveDate: {
    ...baseDate,
    color: '#95a5a6'
  },
  warningDate: {
    ...baseDate,
    color: '#f39c12'
  }
});
