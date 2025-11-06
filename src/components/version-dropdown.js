import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "./";

const DropdownItem = ({ to, active, children }) => (
  <Link to={to} className={`dropdown-item ${active && "active fw-bold"}`}>
    {children}
  </Link>
);

const FormatVersion = (version) => {
  if (!/^\d/.test(version)) {
    return version;
  }
  return "Version " + version;
};

const VersionDropdown = ({ versionArray, preciseVersion, path }) => {
  const activeVersion = path.split("/")[2];
  const isActive = (version) => version === activeVersion;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" size="sm">
        {FormatVersion(preciseVersion || activeVersion)}&nbsp;
        {
          // must be a better way to get space between the text and caret
        }
      </Dropdown.Toggle>

      <Dropdown.Menu className="version-dropdown">
        {versionArray.map((version) => (
          <DropdownItem
            to={version.url}
            key={version.url}
            active={isActive(version.version)}
          >
            {FormatVersion(version.preciseVersion)}{" "}
          </DropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VersionDropdown;
