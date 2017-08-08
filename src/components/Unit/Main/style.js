import { StyleSheet } from 'react-native';

const basicUnit = {
  borderRadius: 300,
  width: 300,
  height: 300,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  margin: 20,
  borderWidth: 10
};
const activeUnit = {
  borderColor: '#27ae60',
  backgroundColor: '#2ecc71'
};
const inActiveUnit = {
  borderColor: '#7f8c8d',
  backgroundColor: '#95a5a6'
};

export default StyleSheet.create({
  unitActive: {
    ...basicUnit,
    ...activeUnit
  },
  unitInActive: {
    ...basicUnit,
    ...inActiveUnit
  },
  date: {
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center'
  },
  client: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center'
  }
});
