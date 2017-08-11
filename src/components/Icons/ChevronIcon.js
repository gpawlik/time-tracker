
import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function ChevronIcon({ width, height, style, direction }) {
  const computedStyle = direction === 'left' ? style : { ...style, ...{ transform: [{ rotate: '180deg'}] }};

  return (
    <Svg width={width} height={height} style={computedStyle} viewBox="0 0 444.531 444.531">
      <Path d="M213.13 222.41L351.88 83.652c7.05-7.043 10.567-15.657 10.567-25.84 0-10.184-3.518-18.794-10.567-25.836L330.47 10.56C323.433 3.52 314.818 0 304.638 0s-18.79 3.52-25.84 10.56L92.648 196.426c-7.045 7.043-10.567 15.656-10.567 25.84s3.52 18.792 10.566 25.838l186.145 185.864c7.05 7.043 15.66 10.564 25.84 10.564s18.796-3.52 25.835-10.563l21.41-21.412c7.05-7.04 10.566-15.604 10.566-25.697 0-10.085-3.518-18.746-10.567-25.978L213.13 222.41z"/>
    </Svg>
  );
}

ChevronIcon.defaultProps = {
  width: 16,
  height: 16,
  direction: 'left'
};

ChevronIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number
};

export default ChevronIcon;
