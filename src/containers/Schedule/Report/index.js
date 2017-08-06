import React from 'react';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectSchedule } from 'containers/Schedule/selectors';
import { generateCalendar, fillCalendar } from './../../../helpers/calendar';

import Month from 'components/Calendar/Month';

class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schedule } = this.props;
    const calendar = fillCalendar(generateCalendar(), schedule).toJS();

    return (
      <ScrollView>
        {
          Object.keys(calendar['2017']).map(key => {
            return <Month month={calendar['2017'][key]} monthIndex={key} key={key} />;
          })
        }
      </ScrollView>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    schedule: selectSchedule()
  });
}

export default connect(mapStateToProps, {})(Report);
