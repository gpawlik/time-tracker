import { scheduleWatcher } from './containers/Schedule/saga';

const root = function* rootSaga() {
  yield [
    scheduleWatcher()
  ];
};

export default root;
