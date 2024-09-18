import React from "react";
import LogoSvg from "../../static/icons/edb_landscape_color_grey.svg";

function Logo({ className, width, height }) {
  return <LogoSvg className={className} height={height} width={width} />;
}

export default Logo;
