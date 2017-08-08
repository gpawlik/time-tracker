import React from 'react';
import { View } from 'react-native';

import Week from 'components/Calendar/Week';

export default ({ weeks }) => {
  return (
    <View>
      {Object.keys(weeks).map(key => {
        return <Week days={weeks[key]} weekIndex={key} key={key} />;
      })}
    </View>
  );
};
