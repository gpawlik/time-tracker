import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import { Actions, Router, Modal, Scene } from 'react-native-router-flux';

import store from './store';
import { saveCurrentSchedule } from 'containers/Schedule/actions';
//import scenes from './scenes';

import TabIcon from 'components/TabIcon';
import Home from 'containers/Schedule/Home';
import List from 'containers/Schedule/List';
import Form from 'containers/Schedule/Form';
import Report from 'containers/Schedule/Report';

/* Allow XHR requests in devtools */
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3
});

const styles = {
  tabBarStyle: {
    height: 65,
    backgroundColor: '#fff'
  }
};

//TODO: move Scenes to a separate file
class timeTracker extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router getSceneStyle={getSceneStyle}>
          <Scene overlay>
            <Scene key="modal" component={Modal} hideNavBar initial>
              <Scene
                tabs
                key="tabbar"
                gestureEnabled={false}
                showLabel={false}
                tabBarStyle={styles.tabBarStyle}
                activeTintColor="red"
              >
                <Scene key="tab1" component={Home} title="Home" iconType="home" icon={TabIcon} initial />
                <Scene key="tab2" component={List} title="History" iconType="calendar" icon={TabIcon} />
                <Scene key="tab3" component={Report} title="Report" iconType="report" icon={TabIcon} />
              </Scene>
              <Scene
                hideNavBar={false}
                key="scheduleForm"
                component={Form}
                title="Schedule Form"
                onRight={() => Actions.pop()}
                onSave={() => {
                  store.dispatch(saveCurrentSchedule());
                  Actions.pop();
                }}
              />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('timeTracker', () => timeTracker);
