import { StyleSheet } from 'react-native';

const basicCircle = {
  borderRadius: 20,
  width: 20,
  height: 20,
  alignSelf: 'center',
  marginBottom: 5,
  borderWidth: 1,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 5
};
const activeCircle = {
  borderColor: '#60ea9a',
  backgroundColor: '#2ecc71',
  shadowColor: '#27ae60'
};
const inActiveCircle = {
  borderColor: '#7f8c8d',
  backgroundColor: '#95a5a6',
  shadowColor: '#fff'
};
const warningCircle = {
  borderColor: '#f1c40f',
  backgroundColor: '#f39c12',
  shadowColor: '#f39c12'
};

export default StyleSheet.create({
  circleActive: {
    ...basicCircle,
    ...activeCircle
  },
  circleInActive: {
    ...basicCircle,
    ...inActiveCircle
  },
  circleWarning: {
    ...basicCircle,
    ...warningCircle
  }
});
