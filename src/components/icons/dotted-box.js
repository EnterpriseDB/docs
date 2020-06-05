import React from 'react';
import DottedBoxSvg from '../../../static/edb-icons/dotted-box.svg';

function DottedBox({ className, width, height }) {
  return <DottedBoxSvg className={className} height={height} width={width} />;
}

export default DottedBox;
