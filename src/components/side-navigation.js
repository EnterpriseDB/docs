import React from "react";
import { DarkModeToggle, Link, Logo } from "./";

const LogoLink = () => {
  return (
    <h1 className="h3">
      <Link className="d-block py-4 text-dark" to="/">
        <Logo width="200" height="50" />
      </Link>
    </h1>
  );
};

const FooterItem = ({ url, children }) => (
  <li className="ml-0">
    <Link to={url} className="d-block py-1 align-middle">
      {children}
    </Link>
  </li>
);

const SideNavigationFooter = () => (
  <ul className="list-unstyled mt-0">
    <hr />
    <FooterItem url="https://support.enterprisedb.com/support/s/">
      Knowledge Base
    </FooterItem>
    <FooterItem url="https://enterprisedb.com/contact">Contact Us</FooterItem>
    <FooterItem url="/community/contributing/">Have feedback?</FooterItem>
    <DarkModeToggle className="mt-1" />
  </ul>
);

const SideNavigation = ({ children, background = "light", footer = true }) => {
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
