import React from 'react';
import LogoSvg from '../../static/edb-icons/edb-docs-logo-dark.svg';

function Logo({ className, width, height }) {
  return <LogoSvg className={className} height={height} width={width} />;
}

export default Logo;
