import { StyleSheet } from 'react-native';

const basicCircle = {
  borderRadius: 60,
  width: 60,
  height: 60,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 5,
  borderWidth: 5
};
const activeCircle = {
  borderColor: '#27ae60',
  backgroundColor: '#2ecc71'
};
const inActiveCircle = {
  borderColor: '#7f8c8d',
  backgroundColor: '#95a5a6'
};

export default StyleSheet.create({
  circleActive: {
    ...basicCircle,
    ...activeCircle
  },
  circleInActive: {
    ...basicCircle,
    ...inActiveCircle
  }
});
