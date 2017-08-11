import React from 'react';
import { View, Text } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetch, updateScheduleDate } from './actions';
import {
  selectCalendar,
  selectCurrentSchedule,
  selectIsLoading,
  selectIsFetched
} from './selectors';
import { formatDate } from 'helpers/date';

import Header from 'components/Header';
import PercentageCircle from 'components/Countdown';
import NavigationBar from 'components/NavigationBar';
import Preloader from '../../components/Preloader';
import UnitBar from '../../components/Unit/Bar';
import MainUnit from '../../components/Unit/Main';

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
    const { calendar, isLoading, currentSchedule } = this.props;

    return (
      <View style={{ marginTop: 74 }}>
        {isLoading && <Preloader />}
        <UnitBar
          items={7}
          calendar={calendar}
          onSelect={this._handleDateChange}
        />
        <Header>{formatDate(currentSchedule[0].date, 'dddd, MMMM D, YYYY')}</Header>
        <PercentageCircle seconds={10} radius={20} />
        <MainUnit
          data={currentSchedule}
          onPress={() => Actions.tab1_2()}
        />
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
