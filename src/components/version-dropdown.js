import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from './';

const DropdownItem = ({ to, active, children }) => (
  <Link
    to={to}
    className={`dropdown-item ${active && 'active font-weight-bold'}`}
  >
    {children}
  </Link>
);

const VersionDropdown = ({ versionArray, path }) => {
  const activeVersion = path.split('/')[2];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" size="sm">
        Version {activeVersion}&nbsp;
        {
          // must be a better way to get space between the text and caret
        }
      </Dropdown.Toggle>

      <Dropdown.Menu className="version-dropdown">
        {versionArray.map((version) => (
          <DropdownItem
            to={version.url}
            key={version.url}
            active={activeVersion === version.version}
          >
            Version {version.version}
          </DropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VersionDropdown;
