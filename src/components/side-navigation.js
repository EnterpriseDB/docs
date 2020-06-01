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

const FooterItem = ({ url, children }) => (
  <li className="ml-0">
    <a href={url} className="d-block py-1 align-middle">
      { children }
    </a>
  </li>
);

const SideNavigationFooter = () => (
  <ul className="list-unstyled mt-0">
    <hr />
    <FooterItem url="#">PostgreSQL Docs</FooterItem>
    <FooterItem url="#">Got feedback?</FooterItem>
  </ul>
);

const SideNavigation = ({ children }) => {
  return (
    <nav className="sidebar d-none d-md-block bg-light border-right">
      <div className="sidebar-sticky pl-0 pr-4 pb-4">
        <Logo />
        {children}
        <SideNavigationFooter />
      </div>
    </nav>
  );
};

export default SideNavigation;
