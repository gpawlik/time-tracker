import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  ChevronIcon,
  CrossIcon,
  Logo,
  MenuIcon
} from 'components/Icons';
import s from './styles';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      hasBackButton,
      hasCloseButton,
      hasActionButton,
      hasMenuButton,
      actionText,
      onClose,
      onAction,
      onBack
    } = this.props;

    const backButton = (
      <TouchableOpacity style={s.backButton} onPress={() => {
        return onBack ? onBack() : Actions.pop();
      }}>
        <ChevronIcon />
      </TouchableOpacity>
    );
    const closeButton = (
      <TouchableOpacity style={s.rightButton} onPress={onClose}>
        <CrossIcon />
      </TouchableOpacity>
    );
    const actionButton = (
      <TouchableOpacity style={s.rightButton} onPress={onAction}>
        <Text>{actionText}</Text>
      </TouchableOpacity>
    );
    const menuButton = (
      <View style={s.rightButton}>
        <MenuIcon style={{ marginTop: 0 }} />
      </View>
    );

    return (
      <View style={s.container}>
        <View style={s.content}>
          <View style={s.logoBox}>
            <Logo style={s.logo} />
            <Text style={s.logoTitle}>TIME TRACKER</Text>
            {hasMenuButton && menuButton}
          </View>
          {hasBackButton && backButton}
          {hasCloseButton && closeButton}
          {hasActionButton && actionButton}
        </View>
      </View>
    );
  }
}

export default NavigationBar;

/*
const NavigationBar = ({
  hasBackButton,
  hasSettingsButton,
  hasCloseButton,
  hasActionButton,
  actionText,
  onClose,
  onAction,
  onBack,
  message = {}
}) => {
  const backButton = (
    <TouchableOpacity style={s.backButton} onPress={() => {
      return onBack ? onBack() : Actions.pop();
    }}>
      <ChevronIcon />
    </TouchableOpacity>
  );
  const settingsButton = (
    <TouchableOpacity style={s.rightButton} onPress={() => Actions.settings()}>
      <CogIcon />
    </TouchableOpacity>
  );
  const closeButton = (
    <TouchableOpacity style={s.rightButton} onPress={onClose}>
      <CrossIcon />
    </TouchableOpacity>
  );
  const actionButton = (
    <TouchableOpacity style={s.rightButton} onPress={onAction}>
      <Text>{actionText}</Text>
    </TouchableOpacity>
  );
  const messageBox = (
    <View style={s.messageBox}>
      <Text style={s.messageText}>{message.text}!</Text>
    </View>
  );

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Logo style={s.logo} />
        {hasBackButton && backButton}
        {hasSettingsButton && settingsButton}
        {hasCloseButton && closeButton}
        {hasActionButton && actionButton}
        {(message.hasOwnProperty('text') && message.text !== '') && messageBox}
      </View>
    </View>
  );
};

NavigationBar.propTypes = {
  hasBackButton: PropTypes.bool,
  hasSettingsButton: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  hasActionButton: PropTypes.bool,
  actionText: PropTypes.string,
  onClose: PropTypes.func,
  onAction: PropTypes.func,
  onBack: PropTypes.func
};

export default NavigationBar;*/
