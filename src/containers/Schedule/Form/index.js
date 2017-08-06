import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';
import moment from 'moment';

import Select from 'components/Form/Select';
import RecentPick from 'components/Form/RecentPick';

import { selectCurrentScheduleDate, selectCurrentSchedule } from 'containers/Schedule/selectors';
import { updateSchedule } from './../actions';
import config from 'config';
import { recent } from './../mock';

import s from './style';

class ScheduleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: this.props.currentSchedule[0] ? this.props.currentSchedule[0].payload.key : '',
      details: this.props.currentSchedule[0] ? this.props.currentSchedule[0].payload.details : ''
    };

    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(item) {
    this.setState({
      client: item.key,
      details: item.details
    });

    this.props.onUpdateSchedule({
      date: this.props.currentScheduleDate,
      payload: {
        key: item.key,
        name: item.name,
        details: item.details,
        fraction: 1
      }
    });
  }

  render() {
    const { currentScheduleDate } = this.props;
    const currentDate = moment(currentScheduleDate).format('dddd, Do MMM');
    const currentClient = this.state.client;
    const currentDetails = this.state.details;

    return (
      <View>
        <Text style={s.header}>{currentDate}</Text>
        <Select
          selected={currentClient}
          onChange={itemValue => this.setState({ client: itemValue })}
          options={config.clients}>
        </Select>
        <View style={s.section}>
          <TextInput
            style={s.textInput}
            onChangeText={text => this.setState({ details: text })}
            value={currentDetails}
            multiline={true}
            placeholder="Specify details of the project (optional)"
            placeholderTextColor="#888"
            returnKeyType="done"
            autoCorrect={false}
          />
        </View>
        <RecentPick values={recent} onSelect={this._handleSelect} />
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
