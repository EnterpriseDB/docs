import React from 'react';
import { Dropdown } from 'react-bootstrap';
import usePathPrefix from '../hooks/use-path-prefix';

const VersionDropdown = ({ versionArray, path }) => {
  const activeVersion = path.split('/')[2];
  const pathPrefix = usePathPrefix();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" size="sm">
        Version {activeVersion}&nbsp;
        {
          // must be a better way to get space between the text and caret
        }
      </Dropdown.Toggle>

      <Dropdown.Menu className="version-dropdown">
        {versionArray.map(version => (
          <Dropdown.Item
            href={pathPrefix + version.url}
            key={version.url}
            active={activeVersion === version.version}
            className={activeVersion === version.version && 'font-weight-bold'}
          >
            Version {version.version}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VersionDropdown;
