import React from 'react';

import {
  DangerIcon,
  HolidayIcon,
  Logo,
  TickRoundedIcon
} from 'components/Icons';

import s from './style';

export default ({ type }) => {
  let Handler;

  switch (type) {
    case 'active':
      Handler = TickRoundedIcon;
      break;
    case 'warning':
      Handler = DangerIcon;
      break;
    case 'holiday':
      Handler = HolidayIcon;
      break;
    default:
      Handler = Logo;
  }
  return (
    <Handler style={s.icon} width={20} height={20} />
  );
};
