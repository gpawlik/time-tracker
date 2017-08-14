import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import translate from 'helpers/translate';
import { isWeekDay } from 'helpers/date';

import { HolidayIcon, TapIcon } from 'components/Icons';

import s from './style';
import animate from './animation';

class MainUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      borderWidth: new Animated.Value(0),
      scale: new Animated.Value(1)
    };
  }

  componentWillUpdate() {
    const { borderWidth, scale } = this.state;

    animate({ borderWidth, scale });
  }

  render() {
    const { data = { payload: {} }, onPress } = this.props;
    const { borderWidth, scale } = this.state;
    const { date, payload } = data;

    const activeBox = (
      <View>
        <Text style={s.name}>{payload.name}</Text>
        <Text style={s.details}>{payload.details}</Text>
      </View>
    );
    const actionBox = (
      <View style={s.emptyBox}>
        <TapIcon />
        <Text style={s.actionText}>{translate('home.button.empty')}</Text>
      </View>
    );
    const holidayBox = (
      <View style={s.emptyBox}>
        <HolidayIcon width={70} height={70} />
        <Text style={s.holidayText}>{translate('home.button.weekend')}</Text>
      </View>
    );
    let contentBox, unitStyle;

    if(data.payload.name) {
      contentBox = activeBox;
      unitStyle = s.unitActive;
    } else if (isWeekDay(date)) {
      contentBox = actionBox;
      unitStyle = s.unitInActive;
    } else {
      contentBox = holidayBox;
      unitStyle = s.unitInActive;
    }

    return (
      <Animated.View style={{ ...StyleSheet.flatten(unitStyle), borderWidth, transform: [{ scale }] }}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.9}>
          <View style={s.textBox}>
            {contentBox}
          </View>
        </TouchableOpacity>
        <View style={s.iconBox}>
          <Text style={s.unitDate}>{date.format('dddd')}</Text>
          <Text style={s.unitDate}>{date.format('MMM D').toUpperCase()}</Text>
        </View>
      </Animated.View>
    );
  }
}

export default MainUnit;
