import React, { Component } from 'react';
import { Animated, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Circle from 'components/Unit/Circle';
import { EditIcon } from 'components/Icons';
import { isFromPast, isWeekDay } from 'helpers/date';

import s from './style';

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

  _handleToggleEdit() {
    const { isEditing, itemPositionLeft, itemPositionRight } = this.state;

    this.setState({
      isEditing: !isEditing
    });

    // TODO: move to another folder?
    Animated.parallel([
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
  }

  _handleEdit() {
    this._handleToggleEdit();
    Actions.tab1_2();
  }

  render() {
    const { moment, events = [] } = this.props.data;
    const { itemPositionLeft, itemPositionRight } = this.state;
    const isCircleActive = events[0] && events[0].hasOwnProperty('key');
    const boxAnimatedStyle = {
      left: itemPositionLeft,
      right: itemPositionRight
    };
    let type;

    if(isCircleActive) {
      type = 'active';
    } else if (!isCircleActive && isFromPast(moment) && isWeekDay(moment)) {
      type = 'warning';
    } else {
      type = 'inactive';
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
            {events.map((event, index) => {
              return (
                <View style={s.itemInfo} key={index}>
                  {event.name && <Text style={s.itemTitle}>{event.name}</Text>}
                  {event.details && <Text style={s.itemDetails}>{event.details}</Text>}
                </View>
              );
            })}
          </View>
          <Text style={s.date}>{moment && moment.format('MMM D').toUpperCase()}</Text>
          <TouchableHighlight
            underlayColor="red"
            onPress={this._handleEdit}
            style={s.editBox}>
            <View>
              <EditIcon />
            </View>
          </TouchableHighlight>
        </Animated.View>
      </TouchableHighlight>
    );
  }
}
