import React from "react";
import iconNames from "./iconNames";

import * as defaultIcons from "@enterprisedb/icons";
import * as colorIcons from "@enterprisedb/icons/color";
import * as logosIcons from "@enterprisedb/icons/logos";
import * as ebd_postgres_aiIcons from "@enterprisedb/icons/edb_logos";

function IconContainer({
  circle = false,
  circleClassName = "",
  circleDiameter = 100,
  circleAutoMargin = true,
  iconName: name = "dottedbox",
  ...props
}) {
  props = Object.assign(
    {},
    { className: "dottedbox", width: 100, height: 100 },
    props,
  );
  const iconNameParts = name.split("/");
  const iconCategory = iconNameParts.length === 1 ? "" : iconNameParts[0];
  const iconName = iconNameParts.length === 1 ? name : iconNameParts[1];

  if (circle && circleDiameter) {
    return (
      <div
        className={`hpx-${circleDiameter} wpx-${circleDiameter} rounded-circle
        ${
          circleAutoMargin && "mx-auto"
        } d-flex justify-content-center align-items-center ${circleClassName}`}
      >
        <Icon category={iconCategory} name={iconName} {...props} />
      </div>
    );
  } else {
    return <Icon category={iconCategory} name={iconName} {...props} />;
  }
}

const Icon = ({ category, name, ...props }) => {
  let SelectedIcon = "";

  if (!category) {
    SelectedIcon = defaultIcons[name];
  } else if (category === "logos") {
    SelectedIcon = logosIcons[name];
  } else if (category === "color") {
    SelectedIcon = colorIcons[name];
  } else if (category === "edb_postgres_ai") {
    SelectedIcon = ebd_postgres_aiIcons[name];
  }

  if (!SelectedIcon) SelectedIcon = "span";

  return <SelectedIcon {...props} />;
};

export { iconNames };

export default IconContainer;
