import React from 'react';
import { View } from 'react-native';

import Week from 'components/Calendar/Week';

const ignoreMonths = yearData => {
  const weekObject = {};

  return Object.keys(yearData).reduce((memoWeek, key) => {
    const monthData = yearData[key];

    Object.keys(monthData).map(wKey => {
      if(!memoWeek[wKey]) memoWeek[wKey] = {};
      memoWeek[wKey] = { ...memoWeek[wKey], ...monthData[wKey] };
    });

    return memoWeek;
  }, weekObject);
};

export default ({ data }) => {
  const weeks = ignoreMonths(data['2017']);

  return (
    <View>
      {
        Object.keys(weeks).map(key => {
          return <Week days={weeks[key]} weekIndex={key} key={key} />;
        })
      }
    </View>
  );
};
