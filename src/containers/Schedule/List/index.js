import React from 'react';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectSchedule } from 'containers/Schedule/selectors';
import { generateCalendar, fillCalendar } from './../../../helpers/calendar';

import Calendar from 'components/Calendar';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schedule } = this.props;
    const calendar = fillCalendar(generateCalendar(), schedule).toJS();

    return (
      <ScrollView>
        <Calendar data={calendar} />
      </ScrollView>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    schedule: selectSchedule()
  });
}

export default connect(mapStateToProps, {})(HistoryList);
