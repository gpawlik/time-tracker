import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';

import Select from 'components/Form/Select';
import RecentPick from 'components/Form/RecentPick';
import NavigationBar from 'components/NavigationBar';

import { selectCurrentScheduleDate, selectCurrentSchedule } from 'containers/Schedule/selectors';
import { setCurrentSchedule } from './../actions';
import config from 'config/clients';
import { recent } from './../mock';

import s from './style';

class ScheduleForm extends React.Component {
  constructor(props) {
    super(props);

    this._handleSelect = this._handleSelect.bind(this);
    this._handlePick = this._handlePick.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleSetSchedule = this._handleSetSchedule.bind(this);
  }

  _handleSetSchedule({ key, name, details }) {
    const { onSetSchedule, currentSchedule, currentScheduleDate } = this.props;

    onSetSchedule({
      date: currentScheduleDate,
      payload: {
        key: key || currentSchedule.payload.key,
        name: name || currentSchedule.payload.name,
        details: details || currentSchedule.payload.details,
        fraction: 1
      }
    });
  }

  _handlePick({ key, name, details }) {
    this._handleSetSchedule({
      key,
      name,
      details
    });
  }

  _handleSelect(itemValue, itemPosition) {
    this._handleSetSchedule({
      key: itemValue,
      name: config.clients[itemPosition].label
    });
  }

  _handleTextChange(text) {
    this._handleSetSchedule({
      details: text
    });
  }

  render() {
    const { key, details } = this.props.currentSchedule.payload;

    return (
      <View style={s.view}>
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
        <RecentPick values={recent} onSelect={this._handlePick} />
      </View>
    );
  }
}

ScheduleForm.navBar = props => {
  return (
    <NavigationBar
      hasBackButton
      hasSaveButton
      onBack={props.onRight}
      onSave={props.onSave}
    />
  );
};

function mapStateToProps() {
  return createStructuredSelector({
    currentScheduleDate: selectCurrentScheduleDate(),
    currentSchedule: selectCurrentSchedule()
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onSetSchedule: data => {
      dispatch(setCurrentSchedule(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
