import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'gatsby';

const TopBar = () => {
  return (
    <Alert variant="primary" className="topbar m-0 rounded-0 text-center align-middle hidden-for-testing">
      This is a beta of our redesigned docs site.
      <Link to="/" className="font-weight-bold ml-2">
        Switch to the old design
      </Link>
    </Alert>
  );
};

export default TopBar;
