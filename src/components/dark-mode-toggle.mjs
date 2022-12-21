import React from "react";
import { Form } from "react-bootstrap";
import Icon, { iconNames } from "../components/icon/";
import { LayoutContext } from "../components";

const DarkModeToggle = ({ className = "" }) => (
  <LayoutContext.Consumer>
    {({ dark, toggleDark }) => (
      <li
        className={`dark-mode-toggle d-flex ${className}`}
        title="Toggle Color Theme"
      >
        <label className="mr-2 link-label" htmlFor="darkmode-switch">
          Toggle Theme
        </label>
        <Form.Check
          type="switch"
          id="darkmode-switch"
          checked={dark}
          onChange={toggleDark}
          label=""
        />
        <Icon
          iconName={iconNames.MOON}
          className="sun"
          width="10"
          height="10"
        />
        <Icon
          iconName={iconNames.SUN}
          className="moon"
          width="10"
          height="10"
        />
      </li>
    )}
  </LayoutContext.Consumer>
);

export default DarkModeToggle;
