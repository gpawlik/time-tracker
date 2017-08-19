import React from 'react';
import { View } from 'react-native';

import CalendarBox from 'components/Calendar/Box';

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

export default ({ data, onSelect }) => {
  const weeks = ignoreMonths(data['2017']);

  return (
    <View>
      {Object.keys(weeks).map(key => {
        return (
          <CalendarBox
            days={weeks[key]}
            weekIndex={key}
            onSelect={onSelect}
            key={key}
          />
        );
      })}
    </View>
  );
};
