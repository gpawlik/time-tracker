import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string
};

const NavigationIcon = ({ text }) => {
  return (
    <Text>
      {text}
    </Text>
  );
};

NavigationIcon.propTypes = propTypes;

export default NavigationIcon;
