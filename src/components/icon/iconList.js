import React from "react";

import Icon, { iconNames } from "../icon/";

export const IconList = () => (
  <div className="d-flex flex-wrap">
    {Object.keys(iconNames).map((key) => (
      <div className="d-flex flex-column mb-5 ">
        <Icon iconName={iconNames[key]} className="me-5" />
        {iconNames[key]}
      </div>
    ))}
  </div>
);
