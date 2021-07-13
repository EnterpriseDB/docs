import React from "react";

import Icon from "./icon";
import Link from "./link";

const environment = process.env.GATSBY_ENVIRONMENT_BRANCH;

export default function Archive({ title, path = "", ...props }) {
  const updatedPath = !path.startsWith("/") ? `/${path}` : path;
  const url = `https://github.com/EnterpriseDB/docs-archive/raw/${environment}${updatedPath}`;

  return (
    <Link to={url} title={title} className="w-100 d-block" {...props}>
      <PdfIcon /> {title}
    </Link>
  );
}

const PdfIcon = () => (
  <Icon
    iconName="PDF"
    className="fill-orange position-relative top-minus-1"
    width="16"
    height="auto"
  />
);
