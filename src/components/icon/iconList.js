import React from "react";

import Icon, { iconNames } from "../icon/";

export const IconList = () => (
  <div class="d-flex flex-wrap">
    {Object.keys(iconNames).map((key) => (
      <div class="d-flex flex-column mb-5 ">
        <Icon iconName={iconNames[key]} className="mr-5" />
        {iconNames[key]}
      </div>
    ))}
  </div>
);
