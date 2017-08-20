import React, { Component } from 'react';
import { Animated, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { isEqual } from 'lodash';

import Circle from 'components/Preview/Circle';
import Icons from 'components/Icons';

import translate from 'helpers/translate';
import { isFromPast, isWeekDay } from 'helpers/date';

import s from './style';
import animate from './animation';

import { SILVER, BUTTERCUP } from 'config/colors';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      itemPositionLeft: new Animated.Value(0),
      itemPositionRight: new Animated.Value(-60)
    };

    this._handleToggleEdit = this._handleToggleEdit.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.data.event, nextProps.data.event);
  }

  _handleToggleEdit() {
    const { isEditing, itemPositionLeft, itemPositionRight } = this.state;
    const { data, onSelect } = this.props;

    onSelect(data.moment);

    this.setState({
      isEditing: !isEditing
    });

    animate({
      isEditing,
      itemPositionLeft,
      itemPositionRight
    });
  }

  _handleEdit() {
    this._handleToggleEdit();
    Actions.scheduleForm();
  }

  render() {
    const { moment, event = {} } = this.props.data;
    const { itemPositionLeft, itemPositionRight } = this.state;
    const isCircleActive = event.hasOwnProperty('key');
    const boxAnimatedStyle = {
      left: itemPositionLeft,
      right: itemPositionRight
    };
    const regularBox = (
      <View style={s.itemInfo}>
        {event.name && <Text style={s.itemTitle}>{event.name}</Text>}
        {event.details && <Text style={s.itemDetails}>{event.details}</Text>}
      </View>
    );
    const holidayBox = (
      <View style={s.itemInfo}>
        <Text style={{ ...StyleSheet.flatten(s.itemTitle), color: SILVER }}>{translate('calendar.weekend')}</Text>
      </View>
    );
    const warningBox = (
      <View style={s.itemInfo}>
        <Text style={{ ...StyleSheet.flatten(s.itemTitle), color: BUTTERCUP }}>{translate('calendar.empty')}</Text>
      </View>
    );
    let type, boxType;

    if(isCircleActive) {
      type = 'active';
      boxType = regularBox;
    } else if (!isCircleActive && isFromPast(moment) && isWeekDay(moment)) {
      type = 'warning';
      boxType = warningBox;
    } else if (!isWeekDay(moment)) {
      type = 'holiday';
      boxType = holidayBox;
    } else {
      type = 'inactive';
      boxType = regularBox;
    }

    return (
      <TouchableHighlight
        underlayColor="#fff"
        onPress={this._handleToggleEdit}
        style={s.item}>
        <Animated.View style={{
          ...StyleSheet.flatten(s.mainBox),
          ...boxAnimatedStyle
        }}>
          <View style={s.itemBox}>
            <Circle type={type} />
            {boxType}
          </View>
          <Text style={s.date}>{moment && moment.format('MMM D').toUpperCase()}</Text>
          <TouchableHighlight
            underlayColor="red"
            onPress={this._handleEdit}
            style={s.editBox}>
            <View>
              <Icons.Edit />
            </View>
          </TouchableHighlight>
        </Animated.View>
      </TouchableHighlight>
    );
  }
}
