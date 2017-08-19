import { Animated } from 'react-native';

export default ({ itemPositionLeft, itemPositionRight, isEditing }) => {
  return Animated.parallel([
    Animated.timing(
      itemPositionLeft,
      {
        toValue: isEditing ? 0 : -60,
        duration: 200
      }
    ),
    Animated.timing(
      itemPositionRight,
      {
        toValue: isEditing ? -60 : 0,
        duration: 200
      }
    )
  ]).start();
};
