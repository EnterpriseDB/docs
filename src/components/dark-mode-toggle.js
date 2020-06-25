import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Form } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
    storageKey: 'dark-theme', // must match gatsby-config plugin settings
  });

  console.log(darkMode.value);

  return (
    <div className="dark-mode-toggle" title="Toggle Color Theme">

      <label className="d-flex cursor">
      <Icon iconName={iconNames.MOON} className="sun" width="10" height="10" />
      <Icon iconName={iconNames.SUN} className="moon" width="10" height="10" />
        <Form.Check type="switch" id="darkmode-switch" checked={darkMode.value} onChange={darkMode.toggle} label="" />
      </label>

    </div>
  );
};

export default DarkModeToggle;
