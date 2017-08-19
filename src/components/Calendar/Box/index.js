import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import Item from 'components/Calendar/Item';

import translate from 'helpers/translate';

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

  /* TODO: update only on any event change
  shouldComponentUpdate(nextProps) {
  }
  */

  _handleToggle() {
    const { isOpen, itemHeight } = this.state;

    this.setState({
      isOpen: !isOpen
    });

    Animated.timing(
      itemHeight,
      {
        toValue: isOpen ? 0 : 490,
        duration: 200
      }
    ).start();
  }

  render() {
    const { days = {}, weekIndex, onSelect } = this.props;
    const { itemHeight } = this.state;

    return (
      <View style={s.container}>
        <TouchableOpacity onPress={this._handleToggle} activeOpacity={0.65} style={s.label}>
          <Text style={s.labelText}>{`${translate('calendar.week')} ${weekIndex}`}</Text>
        </TouchableOpacity>
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
