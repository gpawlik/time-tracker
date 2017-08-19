import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Icons from 'components/Icons';
import s from './styles';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      hasBackButton,
      hasCloseButton,
      hasSaveButton,
      hasMenuButton,
      onClose,
      onSave,
      onBack
    } = this.props;

    const logoBox = (
      <View style={s.logoBox}>
        <Icons.Logo isActive />
        <Text style={s.logoTitle}>TIME TRACKER</Text>
      </View>
    );
    const backButton = (
      <TouchableOpacity style={s.backButton} onPress={() => {
        return onBack ? onBack() : Actions.pop();
      }}>
        <Icons.Cross />
      </TouchableOpacity>
    );
    const closeButton = (
      <TouchableOpacity style={s.rightButton} onPress={onClose}>
        <Icons.Cross />
      </TouchableOpacity>
    );
    const saveButton = (
      <TouchableOpacity style={s.rightButton} onPress={onSave}>
        <Icons.Tick />
      </TouchableOpacity>
    );
    const menuButton = (
      <View style={s.rightButton}>
        <Icons.Menu style={{ marginTop: 0 }} />
      </View>
    );

    return (
      <View style={s.container}>
        <View style={s.content}>
          {hasBackButton ? backButton : logoBox}
          {hasMenuButton && menuButton}
          {hasCloseButton && closeButton}
          {hasSaveButton && saveButton}
        </View>
      </View>
    );
  }
}

NavigationBar.propTypes = {
  hasBackButton: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  hasSaveButton: PropTypes.bool,
  hasMenuButton: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onBack: PropTypes.func
};

export default NavigationBar;
