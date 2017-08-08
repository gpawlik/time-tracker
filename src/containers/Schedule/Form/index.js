import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

import Select from 'components/Form/Select';
import RecentPick from 'components/Form/RecentPick';

import { selectCurrentScheduleDate, selectCurrentSchedule } from 'containers/Schedule/selectors';
import { updateSchedule } from './../actions';
import { formatDate } from 'helpers/date';
import config from 'config';
import { recent } from './../mock';

import s from './style';

class ScheduleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.currentSchedule[0] && this.props.currentSchedule[0].payload ? this.props.currentSchedule[0].payload.key : '',
      name: this.props.currentSchedule[0] && this.props.currentSchedule[0].payload ? this.props.currentSchedule[0].payload.name : '',
      details: this.props.currentSchedule[0] && this.props.currentSchedule[0].payload ? this.props.currentSchedule[0].payload.details : ''
    };

    this._handleSelect = this._handleSelect.bind(this);
    this._handlePick = this._handlePick.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleSave = this._handleSave.bind(this);
  }

  _handlePick({ key, name, details }) {
    this.setState({
      key,
      name,
      details
    });
  }

  _handleSelect(itemValue, itemPosition) {
    this.setState({
      key: itemValue,
      name: config.clients[itemPosition].label
    });
  }

  _handleTextChange(text) {
    this.setState({
      details: text
    });
  }

  _handleSave() {
    const { onUpdateSchedule, currentScheduleDate } = this.props;
    const { key, name, details } = this.state;

    onUpdateSchedule({
      date: currentScheduleDate,
      payload: {
        key,
        name,
        details,
        fraction: 1
      }
    });
  }

  render() {
    const { currentScheduleDate } = this.props;
    const { key, details } = this.state;
    const currentDate = formatDate(currentScheduleDate, 'dddd, Do MMM');

    return (
      <View>
        <Text style={s.header}>{currentDate}</Text>
        <Select
          selected={key}
          onChange={this._handleSelect}
          options={config.clients}>
        </Select>
        <View style={s.section}>
          <Text style={s.textInputLabel}>{'Project details (optional)'.toUpperCase()}</Text>
          <TextInput
            style={s.textInput}
            onChangeText={this._handleTextChange}
            value={details}
            multiline={true}
            returnKeyType="done"
            autoCorrect={false}
          />
        </View>
        <TouchableHighlight onPress={this._handleSave}><Text>Save</Text></TouchableHighlight>
        <RecentPick values={recent} onSelect={this._handlePick} />
      </View>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    currentScheduleDate: selectCurrentScheduleDate(),
    currentSchedule: selectCurrentSchedule()
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateSchedule: data => {
      dispatch(updateSchedule(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
