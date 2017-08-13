import React from 'react';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetch, updateScheduleDate } from 'containers/Schedule/actions';
import {
  selectCalendar,
  selectCurrentSchedule,
  selectIsLoading,
  selectIsFetched
} from 'containers/Schedule/selectors';

import NavigationBar from 'components/NavigationBar';
import Preloader from 'components/Preloader';
import UnitBar from 'components/Unit/Bar';
import MainUnit from 'components/Unit/Main';
import MessageBox from 'components/MessageBox';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this._handleDateChange = this._handleDateChange.bind(this);
  }

  componentWillMount() {
    this.props.onScheduleFetch();
  }

  _handleDateChange(date) {
    this.props.onScheduleDateUpdate(date);
  }

  render() {
    let isValid = false;
    const { calendar, isLoading, currentSchedule } = this.props;
    const messageText = isValid ? 'Great! Your schedule is up to date!' : 'It looks like you missed to report something!';
    const status = isValid ? 'valid' : 'invalid';

    return (
      <View style={{ marginTop: 74 }}>
        {isLoading && <Preloader />}
        <UnitBar
          items={7}
          calendar={calendar}
          onSelect={this._handleDateChange}
        />
        <MainUnit
          data={currentSchedule}
          onPress={() => Actions.scheduleForm()}
        />
        <MessageBox text={messageText} status={status} />
      </View>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    calendar: selectCalendar(),
    currentSchedule: selectCurrentSchedule(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched()
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onScheduleFetch: () => {
      dispatch(fetch());
    },
    onScheduleDateUpdate: date => {
      dispatch(updateScheduleDate(date));
    }
  };
}

Schedule.navBar = () => {
  return (
    <NavigationBar hasMenuButton />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
