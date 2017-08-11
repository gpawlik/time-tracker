import React from 'react';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCalendar } from 'containers/Schedule/selectors';

import NavigationBar from 'components/NavigationBar';
import BarChart from 'components/Report/Chart';
import ReportLabel from 'components/Report/ReportLabel';
import ReportBox from 'components/Report/ReportBox';

import s from './style';

class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { calendar } = this.props;

    return (
      <View style={{ marginTop: 74 }}>
        <View style={s.chartBox}>
          <BarChart />
        </View>
        <View>
          <ReportLabel />
        </View>
        <ReportBox calendar={calendar} year={2017} currentMonth={8} />
      </View>
    );
  }
}

Report.navBar = () => {
  return (
    <NavigationBar hasMenuButton />
  );
};

const mapStateToProps = createStructuredSelector({
  calendar: selectCalendar()
});

export default connect(mapStateToProps, {})(Report);
