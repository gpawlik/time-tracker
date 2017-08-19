import { StyleSheet } from 'react-native';

import { RED } from 'config/colors';

export default StyleSheet.create({
  item: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  mainBox: {
    padding: 25,
    paddingRight: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: -60,
    bottom: 0
  },
  date: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Dosis',
    color: '#333'
  },
  itemBox: {
    flexDirection: 'row'
  },
  itemInfo: {
    marginLeft: 25
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Dosis',
    color: '#333'
  },
  itemDetails: {
    fontWeight: '100',
    fontSize: 14,
    fontFamily: 'Dosis',
    color: '#777'
  },
  editBox: {
    backgroundColor: RED,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0
  }
});
