import React from 'react';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  fetch,
  updateScheduleDate
} from 'containers/Schedule/actions';
import {
  selectCalendar,
  selectCurrentSchedule,
  selectIsLoading,
  selectIsFetched
} from 'containers/Schedule/selectors';

import NavigationBar from 'components/NavigationBar';
import Preloader from 'components/Preloader';
import Preview from 'components/Preview';
import HomeBox from 'components/HomeBox';
import MessageBox from 'components/MessageBox';

import translate from 'helpers/translate';

import s from '../../../style';

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
    const messageText = isValid ? translate('home.validity.success') : translate('home.validity.warning');
    const status = isValid ? 'valid' : 'invalid';

    return (
      <View style={s.scene}>
        {isLoading && <Preloader />}
        <Preview
          items={7}
          calendar={calendar}
          onSelect={this._handleDateChange}
        />
        <HomeBox
          data={currentSchedule}
          onPress={() => Actions.scheduleForm()}
        />
        <MessageBox text={messageText} status={status} />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  calendar: selectCalendar(),
  currentSchedule: selectCurrentSchedule(),
  isLoading: selectIsLoading(),
  isFetched: selectIsFetched()
});

const mapDispatchToProps = dispatch => ({
  onScheduleFetch: () => {
    dispatch(fetch());
  },
  onScheduleDateUpdate: date => {
    dispatch(updateScheduleDate(date));
  }
});

Schedule.navBar = () => {
  return (
    <NavigationBar hasMenuButton />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
