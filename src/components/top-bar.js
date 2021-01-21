import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'gatsby';

const TopBar = () => {
  return (
    <Alert
      variant="primary"
      className="topbar m-0 rounded-0 text-center align-middle"
    >
      This is a beta of our redesigned docs site.
      <a
        href="https://www.enterprisedb.com/edb-docs"
        className="font-weight-bold ml-2"
      >
        Go to the legacy docs site
      </a>
    </Alert>
  );
};

export default TopBar;
