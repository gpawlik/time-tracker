import React from 'react';
import { Dimensions, View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCalendar } from 'containers/Schedule/selectors';

import NavigationBar from 'components/NavigationBar';
import BarChart from 'components/Report/Chart';
import ReportBox from 'components/Report/ReportBox';

import s from './style';

class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollPage: 0
    };

    this._handleScroll = this._handleScroll.bind(this);
    this._handleNavigate = this._handleNavigate.bind(this);
  }

  _handleScroll(e) {
    const deviceWidth = Dimensions.get('window').width;
    const currentOffset = e.nativeEvent.contentOffset.x;
    const scrollPage = Math.floor(currentOffset / deviceWidth);

    this.setState({
      currentScrollPage: scrollPage
    });
  }

  _handleNavigate() {

  }

  render() {
    const { calendar } = this.props;
    const { currentScrollPage } = this.state;

    return (
      <View style={{ marginTop: 74 }}>
        <View style={s.chartBox}>
          <BarChart />
        </View>
        <ReportBox
          calendar={calendar}
          year={2017}
          page={currentScrollPage}
          onScroll={this._handleScroll}
          onNavigate={this._handleNavigate}
        />
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
