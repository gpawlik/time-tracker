import React from 'react';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCalendar } from 'containers/Schedule/selectors';

import Calendar from 'components/Calendar';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.scrollView.scrollTo({ y: 1800 });
  }

  render() {
    const { calendar } = this.props;

    return (
      <ScrollView ref="scrollView">
        <Calendar data={calendar} />
      </ScrollView>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    calendar: selectCalendar()
  });
}

export default connect(mapStateToProps, {})(HistoryList);
