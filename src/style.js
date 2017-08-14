import { Platform, StyleSheet } from 'react-native';

import { WHITE } from 'config/colors';
import { TABBAR_HEIGHT } from 'config/constants';

export const getSceneStyle = () => ({
  backgroundColor: WHITE,
  shadowOpacity: 0.2,
  shadowRadius: 3
});

export default StyleSheet.create({
  scene: {
    ...Platform.select({
      ios: {
        marginTop: 74
      },
      android: {
        marginTop: 74
      },
      windows: {
        marginTop: 64
      }
    })
  },
  tabBarStyle: {
    height: TABBAR_HEIGHT,
    backgroundColor: WHITE
  }
});
