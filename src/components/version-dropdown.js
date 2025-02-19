import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "./";

const DropdownItem = ({ to, active, children }) => (
  <Link to={to} className={`dropdown-item ${active && "active fw-bold"}`}>
    {children}
  </Link>
);

const VersionDropdown = ({ versionArray, preciseVersion, path }) => {
  const activeVersion = path.split("/")[2];
  const isActive = (version) => version === activeVersion;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" size="sm">
        Version {preciseVersion || activeVersion}&nbsp;
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
            Version {version.version}{" "}
            {isActive(version.version) && preciseVersion !== activeVersion
              ? `(${preciseVersion})`
              : ""}
          </DropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VersionDropdown;
