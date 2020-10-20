import React from 'react';
import { Form } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';
import { LayoutContext } from '../components';

const DarkModeToggle = () => (
  <LayoutContext.Consumer>
    {({dark, toggleDark}) => (
      <div className="dark-mode-toggle d-flex" title="Toggle Color Theme">
        <Form.Check type="switch" id="darkmode-switch" checked={dark} onChange={toggleDark} label="" />
        <Icon iconName={iconNames.MOON} className="sun" width="10" height="10" />
        <Icon iconName={iconNames.SUN} className="moon" width="10" height="10" />
      </div>
    )}
  </LayoutContext.Consumer>
);

export default DarkModeToggle;
