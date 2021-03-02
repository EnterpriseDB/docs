import React from 'react';
import iconNames from './iconNames';

import BarmanSvg from '../../../static/edb-icons/barman.svg';
import CoffeeSvg from '../../../static/edb-icons/coffee.svg';
import EdbReplicateSvg from '../../../static/edb-icons/edb-replicate.svg';
import ExternalLinkSvg from '../../../static/edb-icons/external-link.svg';
import SynchronizeSvg from '../../../static/edb-icons/synchronize.svg';
import TicketStarSvg from '../../../static/edb-icons/ticket-star.svg';
import TrainingSvg from '../../../static/edb-icons/training.svg';

function formatIconName(name) {
  return name && name.replace(/ /g, '').toLowerCase();
}

export default function IconType({ iconName, ...rest }) {
  switch (formatIconName(iconName)) {
    case iconNames.BARMAN:
      return <BarmanSvg {...rest} />;
    case iconNames.COFFEE:
      return <CoffeeSvg {...rest} />;
    case iconNames.EDB_REPLICATE:
      return <EdbReplicateSvg {...rest} />;
    case iconNames.EXTERNAL_LINK:
      return <ExternalLinkSvg {...rest} />;
    case iconNames.SYNCHRONIZE:
      return <SynchronizeSvg {...rest} />;
    case iconNames.TICKET_STAR:
      return <TicketStarSvg {...rest} />;
    case iconNames.TRAINING:
      return <TrainingSvg {...rest} />;
    default:
      return null;
  }
}
