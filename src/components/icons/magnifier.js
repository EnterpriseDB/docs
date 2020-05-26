import React from 'react';
import MagnifierSvg from '../../../static/icons/search.svg';

function Magnifier({ className, width, height }) {
  return <MagnifierSvg className={className} height={height} width={width} />;
}

export default Magnifier;
