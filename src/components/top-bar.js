import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from './';

const TopBar = () => {
  return (
    <Alert
      variant="primary"
      className="topbar m-0 rounded-0 text-center align-middle"
    >
      This is the redesigned EDB Docs site. For older product docs, go to the
      <Link
        to="https://www.enterprisedb.com/edb-docs"
        className="pl-1 font-weight-bold"
      >
        EDB Docs Archive
      </Link>
    </Alert>
  );
};

export default TopBar;
