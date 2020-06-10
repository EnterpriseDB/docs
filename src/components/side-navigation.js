import React from 'react';
import { Link } from 'gatsby';
import Logo from './logo';

const LogoLink = () => {
  return (
    <h1 className="h3">
      <Link className="d-block py-4 text-dark" to="/">
        <Logo width="149" height="20" />
      </Link>
    </h1>
  );
};

const FooterItem = ({ url, children }) => (
  <li className="ml-0">
    <a href={url} className="d-block py-1 align-middle">
      {children}
    </a>
  </li>
);

const SideNavigationFooter = () => (
  <ul className="list-unstyled mt-0">
    <hr />
    <FooterItem url="#">PostgreSQL Docs</FooterItem>
    <FooterItem url="https://github.com/rocketinsights/edb_docs/issues/new">
      Got feedback?
    </FooterItem>
  </ul>
);

const SideNavigation = ({ children }) => {
  return (
    <nav className="sidebar d-block bg-light border-right">
      <div className="sidebar-sticky ml-1 pl-0 pr-4 pb-4">
        <LogoLink />
        {children}
        <SideNavigationFooter />
      </div>
    </nav>
  );
};

export default SideNavigation;
