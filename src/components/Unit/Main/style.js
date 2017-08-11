import { StyleSheet } from 'react-native';

const basicUnit = {
  borderRadius: 280,
  width: 280,
  height: 280,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  margin: 20,
  padding: 20,
  borderWidth: 3
};
const activeUnit = {
  borderColor: '#2ecc71',
  backgroundColor: '#fafafa'
};
const inActiveUnit = {
  borderColor: '#eee',
  backgroundColor: '#fff'
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
    color: '#333',
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center'
  },
  client: {
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Dosis',
    fontSize: 30,
    textAlign: 'center'
  }
});
