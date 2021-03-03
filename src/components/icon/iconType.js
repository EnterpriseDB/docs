import React from 'react';
import iconNames from './iconNames';

import TrainingSvg from '../../../static/edb-icons/training.svg';

function formatIconName(name) {
  return name && name.replace(/ /g, '').toLowerCase();
}

export default function IconType({ iconName, ...rest }) {
  switch (formatIconName(iconName)) {
    case iconNames.TRAINING:
      return <TrainingSvg {...rest} />;
    default:
      return null;
  }
}
