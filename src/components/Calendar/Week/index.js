import React, { Component } from 'react';
import { Animated, Easing, Text, TouchableHighlight, View } from 'react-native';

import Item from 'components/Report/Item';

import s from './style';

class WeekItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      itemHeight: new Animated.Value(490)
    };

    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleToggle() {
    const { isOpen, itemHeight } = this.state;

    this.setState({
      isOpen: !isOpen
    });

    Animated.timing(
      itemHeight,
      {
        toValue: isOpen ? 0 : 490,
        duration: 2000
      }
    ).start();
  }

  render() {
    const { days = {}, weekIndex, onSelect } = this.props;
    const { itemHeight } = this.state;

    return (
      <View style={s.container}>
        <TouchableHighlight onPress={this._handleToggle} style={s.label}>
          <Text style={s.labelText}>Week {weekIndex}</Text>
        </TouchableHighlight>
        <Animated.View style={{ height: itemHeight }}>
          {Object.keys(days).map(key => {
            return <Item data={days[key]} onSelect={onSelect} key={key} />;
          })}
        </Animated.View>
      </View>
    );
  }
}

export default WeekItem;
