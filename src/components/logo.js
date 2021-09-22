import React from "react";
import LogoSvg from "../../static/icons/edb-docs-logo-disc-dark.svg";

function Logo({ className, width, height }) {
  return <LogoSvg className={className} height={height} width={width} />;
}

export default Logo;
