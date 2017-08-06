import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import { Actions, Router, Modal, Scene } from 'react-native-router-flux';

import store from './store';
//import scenes from './scenes';

import TabIcon from 'components/TabIcon';
import Schedule from 'containers/Schedule';
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
                key="tabbar"
                gestureEnabled={false}
                showLabel={false}
                tabs
                tabBarStyle={styles.tabBarStyle}
                activeBackgroundColor="#ddd"
              >
                <Scene
                  key="tab1"
                  title="Home"
                  tabBarLabel="TAB #1"
                  icon={TabIcon}
                  navigationBarStyle={{backgroundColor: 'red'}}
                  titleStyle={{color: 'white', alignSelf: 'center'}}
                  initial
                >
                  <Scene
                    key="tab1_1"
                    component={Schedule}
                    title="Tab #1_1"
                  />
                  <Scene
                    key="tab1_2"
                    component={Form}
                    title="Tab #1_2"
                    back
                    titleStyle={{color: 'black', alignSelf: 'center'}}
                    onRight={() => Actions.pop()}
                    rightTitle="Save"
                  />
                </Scene>
                <Scene key="tab2" component={List} title="History" icon={TabIcon} />
                <Scene key="tab3" component={Report} title="Report" icon={TabIcon}/>
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('timeTracker', () => timeTracker);
