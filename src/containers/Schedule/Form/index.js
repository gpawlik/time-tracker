import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Select from 'components/Form/Select';
import RecentPick from 'components/Form/RecentPick';
import NavigationBar from 'components/NavigationBar';

import { selectCurrentScheduleDate, selectCurrentSchedule } from 'containers/Schedule/selectors';
import { updateSchedule } from './../actions';
import config from 'config/clients';
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

    Actions.pop();

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
    const { key, details } = this.state;

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
      onSave={props.onRight}
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
    onUpdateSchedule: data => {
      dispatch(updateSchedule(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
