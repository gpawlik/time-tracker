import React from 'react';

import Icons from 'components/Icons';

import s from './style';

export default ({ type }) => {
  let Handler;

  switch (type) {
    case 'active':
      Handler = Icons.TickRounded;
      break;
    case 'warning':
      Handler = Icons.Danger;
      break;
    case 'holiday':
      Handler = Icons.Holiday;
      break;
    default:
      Handler = Icons.Logo;
  }
  return (
    <Handler
      style={s.icon}
      width={20}
      height={20}
    />
  );
};
