import React from 'react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <h1 className="h3">
      <Link className="d-block py-4 text-dark" to="/">
        EDB Docs
      </Link>
    </h1>
  );
};

const SideNavigation = ({ children }) => {
  return (
    <nav className="sidebar d-none d-md-block bg-light border-right">
      <div className="sidebar-sticky pl-0 pr-4 pb-4">
        <Logo />
        {children}
      </div>
    </nav>
  );
};

export default SideNavigation;
