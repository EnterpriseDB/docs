import React from 'react';
import { DarkModeToggle, Link, Logo } from './';

const LogoLink = () => {
  return (
    <h1 className="h3">
      <Link className="d-block py-4 text-dark" to="/">
        <Logo width="149" height="40" />
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
    <FooterItem url="/postgresql-docs/postgresql/">PostgreSQL Docs</FooterItem>
    <FooterItem url="/community/contribute/">Contribute</FooterItem>
    <FooterItem url="/community/authoring/">Authoring</FooterItem>
    <FooterItem url="https://support.enterprisedb.com">Support</FooterItem>
    <FooterItem url="https://enterprisedb.com/contact">Contact Us</FooterItem>
    <FooterItem url="/community/feedback/">Feedback?</FooterItem>
    <DarkModeToggle />
  </ul>
);

const SideNavigation = ({ children, background = 'light', footer = true }) => {
  return (
    <nav className={`sidebar d-block bg-${background} border-right`}>
      <div className="sidebar-sticky pl-4 pr-4 pb-4">
        <LogoLink />
        {children}
        {footer && <SideNavigationFooter />}
      </div>
    </nav>
  );
};

export default SideNavigation;
