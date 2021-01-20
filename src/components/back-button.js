import React from 'react';
import { Link } from './';
import Icon, { iconNames } from './icon/';

const BackButton = ({ path, currentPath }) => {
  let url = path;
  if (!url && currentPath) {
    const splitPath = currentPath.split('/');
    url =
      splitPath.length > 4
        ? splitPath.slice(0, splitPath.length - 2).join('/') + '/'
        : '/';
  } else if (!url) {
    url = '/';
  }

  return (
    <li className="ml-0 mb-3">
      <Link to={url} className="d-block py-1 align-middle small text-dark">
        <Icon
          iconName={iconNames.ARROW_LEFT}
          className="fill-black mt-n1 mr-1"
          width="12"
          height="12"
        />
        Back
      </Link>
    </li>
  );
};

export default BackButton;
