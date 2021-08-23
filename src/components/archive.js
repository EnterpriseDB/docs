import React from "react";

import Icon, { iconNames } from "./icon";
import Link from "./link";

const isProduction = process.env.APP_ENV === "production";
const environment = isProduction ? "main" : "develop";

export default function Archive({
  variant = "default",
  title,
  path = "",
  ...props
}) {
  const updatedPath = !path.startsWith("/") ? `/${path}` : path;
  const url = `https://github.com/EnterpriseDB/docs-archive/raw/${environment}${updatedPath}`;

  return variant === "title-first" ? (
    <TitleFirstVariant {...{ title, url }} {...props} />
  ) : (
    <DefaultVariant {...{ title, url }} {...props} />
  );
}

const DefaultVariant = ({ title, url, ...props }) => {
  return (
    <Link to={url} title={title} className="w-100 d-block" {...props}>
      <PdfIcon /> {title}
    </Link>
  );
};

const TitleFirstVariant = ({ title, url, ...props }) => {
  return (
    <Link to={url} title={title} className="w-100 d-block" {...props}>
      {title} <PdfIcon />
    </Link>
  );
};

const PdfIcon = () => (
  <Icon
    iconName={iconNames.PDF}
    className="fill-orange position-relative top-minus-1"
    width="16"
    height="16"
  />
);
