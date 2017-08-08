import React from 'react';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCalendar } from 'containers/Schedule/selectors';

import Month from 'components/Calendar/Month';

class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { calendar } = this.props;

    return (
      <ScrollView>
        {Object.keys(calendar['2017']).map(key => {
          return <Month month={calendar['2017'][key]} monthIndex={key} key={key} />;
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  calendar: selectCalendar()
});

export default connect(mapStateToProps, {})(Report);
