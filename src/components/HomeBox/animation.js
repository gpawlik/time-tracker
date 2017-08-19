import { Animated } from 'react-native';

export default ({ borderWidth, scale }) => {
  return Animated.sequence([
    Animated.timing(
      borderWidth,
      {
        toValue: 12,
        duration: 80
      }
    ),
    Animated.timing(
      borderWidth,
      {
        toValue: 8,
        duration: 80
      }
    ),
    Animated.timing(
      scale,
      {
        toValue: 1.02,
        duration: 80
      }
    ),
    Animated.timing(
      scale,
      {
        toValue: 1,
        duration: 80
      }
    )
  ]).start();
};
