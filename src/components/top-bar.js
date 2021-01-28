import React from 'react';
import { Alert } from 'react-bootstrap';

const TopBar = () => {
  return (
    <Alert
      variant="primary"
      className="topbar m-0 rounded-0 text-center align-middle"
    >
      This is a beta of EDB Docs 2.0.
      <a
        href="https://www.enterprisedb.com/edb-docs"
        className="font-weight-bold ml-2"
      >
        Go to EDB Docs 1.0
      </a>
    </Alert>
  );
};

export default TopBar;
