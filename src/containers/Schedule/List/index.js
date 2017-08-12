import React from 'react';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCalendar } from 'containers/Schedule/selectors';
import { updateScheduleDate } from 'containers/Schedule/actions';

import NavigationBar from 'components/NavigationBar';
import Calendar from 'components/Calendar';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);

    this._handleItemSelect = this._handleItemSelect.bind(this);
  }

  componentDidMount() {
    this.refs.scrollView.scrollTo({ y: 1800 });
  }

  _handleItemSelect(date) {
    this.props.onScheduleDateUpdate(date);
  }

  render() {
    const { calendar } = this.props;

    return (
      <ScrollView ref="scrollView" style={{ marginTop: 74 }}>
        <Calendar data={calendar} onSelect={this._handleItemSelect} />
      </ScrollView>
    );
  }
}

HistoryList.navBar = () => {
  return (
    <NavigationBar
      hasMenuButton
    />
  );
};

function mapStateToProps() {
  return createStructuredSelector({
    calendar: selectCalendar()
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onScheduleDateUpdate: date => {
      dispatch(updateScheduleDate(date));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList);
