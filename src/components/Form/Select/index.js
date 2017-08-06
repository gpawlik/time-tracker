import React from 'react';
import { Picker } from 'react-native';

import s from './style';

export default ({ selected, options, onChange }) => {
  return (
    <Picker
      style={s.select}
      selectedValue={selected}
      onValueChange={onChange}>
      {options.map(({ label, value }) => {
        return (<Picker.Item label={label} value={value} key={value} />);
      })}
    </Picker>
  );
};
